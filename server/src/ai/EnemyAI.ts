import { EnemyState, EnemyAIStateType } from "../schema/EnemyState.js";
import { PlayerState } from "../schema/PlayerState.js";

export interface Waypoint {
  x: number;
  y: number;
  z: number;
}

export interface SoundEvent {
  x: number;
  z: number;
  radius: number;
  sourceSessionId?: string;
  type: "SPRINT" | "GENERATOR" | "GATE" | "SAFE" | "RADIO";
}

export class EnemyAI {
  private enemy: EnemyState;
  private waypoints: Waypoint[] = [
    { x: 0.0, y: 0.0, z: 0.0 },     // Corridor Center
    { x: 12.0, y: 0.0, z: 6.0 },    // Ward A Hall
    { x: 10.0, y: 0.0, z: -12.0 },  // Back Corridor
    { x: -10.0, y: 0.0, z: -10.0 }, // Doctors Office Hallway
    { x: -12.0, y: 0.0, z: 6.0 }    // Reception Courtyard
  ];
  private currentWaypointIndex: number = 0;
  private soundEventQueue: SoundEvent[] = [];

  // Speeds (meters / sec)
  public static readonly SPEED_PATROL = 2.2;
  public static readonly SPEED_INVESTIGATE = 3.2;
  public static readonly SPEED_CHASE = 5.2;

  // Senses
  public static readonly SIGHT_RANGE_NORMAL = 14.0;
  public static readonly SIGHT_RANGE_FLASHLIGHT = 26.0;
  public static readonly SIGHT_FOV_COS = 0.707; // 90 degree cone (+/- 45 deg)
  public static readonly PROXIMITY_SENSE_RANGE = 2.8;
  public static readonly SPRINT_HEARING_RANGE = 12.0;

  // Combat
  public static readonly ATTACK_RANGE = 1.8;
  public static readonly ATTACK_DAMAGE = 40;
  public static readonly ATTACK_COOLDOWN_TIME = 2.5;
  public static readonly SEARCH_DURATION = 6.0;
  public static readonly CHASE_MEMORY_DURATION = 6.0;

  // Callbacks for room events
  public onAttackHit?: (targetPlayerId: string, damage: number) => void;
  public onStateChange?: (newState: EnemyAIStateType, previousState: EnemyAIStateType) => void;
  public onScream?: (x: number, y: number, z: number) => void;

  constructor(enemy: EnemyState) {
    this.enemy = enemy;
    // Initial spawn in back corridor
    this.enemy.x = this.waypoints[0].x;
    this.enemy.y = this.waypoints[0].y;
    this.enemy.z = this.waypoints[0].z;
    this.enemy.state = "PATROL";
    this.enemy.speed = EnemyAI.SPEED_PATROL;
  }

  public emitSound(event: SoundEvent) {
    this.soundEventQueue.push(event);
  }

  public update(dt: number, players: Map<string, PlayerState>) {
    // Process sound events
    while (this.soundEventQueue.length > 0) {
      const sound = this.soundEventQueue.shift()!;
      this.handleSoundEvent(sound);
    }

    // Cooldown timer progression
    if (this.enemy.attackCooldown > 0) {
      this.enemy.attackCooldown = Math.max(0, this.enemy.attackCooldown - dt);
    }

    switch (this.enemy.state) {
      case "PATROL":
        this.updatePatrol(dt, players);
        break;
      case "INVESTIGATE":
        this.updateInvestigate(dt, players);
        break;
      case "SEARCH":
        this.updateSearch(dt, players);
        break;
      case "CHASE":
        this.updateChase(dt, players);
        break;
      case "ATTACK":
        this.updateAttack(dt, players);
        break;
      case "COOLDOWN":
        this.updateCooldown(dt, players);
        break;
    }
  }

  private setState(newState: EnemyAIStateType) {
    const previous = this.enemy.state as EnemyAIStateType;
    if (previous === newState) return;
    this.enemy.state = newState;

    if (newState === "PATROL") {
      this.enemy.speed = EnemyAI.SPEED_PATROL;
      this.enemy.alertLevel = 0;
      this.enemy.targetPlayerId = "";
    } else if (newState === "INVESTIGATE") {
      this.enemy.speed = EnemyAI.SPEED_INVESTIGATE;
      this.enemy.alertLevel = Math.max(this.enemy.alertLevel, 50);
    } else if (newState === "SEARCH") {
      this.enemy.speed = 0;
      this.enemy.searchTimer = EnemyAI.SEARCH_DURATION;
      this.enemy.alertLevel = 40;
    } else if (newState === "CHASE") {
      this.enemy.speed = EnemyAI.SPEED_CHASE;
      this.enemy.alertLevel = 100;
      this.enemy.chaseMemoryTimer = EnemyAI.CHASE_MEMORY_DURATION;
      if (this.onScream) {
        this.onScream(this.enemy.x, this.enemy.y, this.enemy.z);
      }
    } else if (newState === "ATTACK") {
      this.enemy.speed = 0;
    } else if (newState === "COOLDOWN") {
      this.enemy.speed = 0;
      this.enemy.attackCooldown = EnemyAI.ATTACK_COOLDOWN_TIME;
    }

    if (this.onStateChange) {
      this.onStateChange(newState, previous);
    }
  }

  private handleSoundEvent(sound: SoundEvent) {
    // If already in CHASE or ATTACK, ignore transient noises
    if (this.enemy.state === "CHASE" || this.enemy.state === "ATTACK") {
      return;
    }

    const dist = Math.hypot(this.enemy.x - sound.x, this.enemy.z - sound.z);
    if (dist <= sound.radius) {
      this.enemy.investigateX = sound.x;
      this.enemy.investigateZ = sound.z;
      this.setState("INVESTIGATE");
    }
  }

  private findDetectablePlayer(players: Map<string, PlayerState>): { player: PlayerState; distance: number; directSight: boolean } | null {
    let closest: { player: PlayerState; distance: number; directSight: boolean } | null = null;
    let minDistance = Infinity;

    // Enemy forward vector derived from rotationY
    const forwardX = -Math.sin(this.enemy.rotationY);
    const forwardZ = -Math.cos(this.enemy.rotationY);

    for (const [, player] of players) {
      if (!player.connected || !player.isAlive) continue;

      const dx = player.x - this.enemy.x;
      const dz = player.z - this.enemy.z;
      const dist = Math.hypot(dx, dz);

      // 1. Proximity detection (smell / footsteps right next to creature)
      if (dist <= EnemyAI.PROXIMITY_SENSE_RANGE) {
        if (dist < minDistance) {
          minDistance = dist;
          closest = { player, distance: dist, directSight: true };
        }
        continue;
      }

      // 2. Sprinting hearing check
      if (player.isSprinting && !player.isCrouching && dist <= EnemyAI.SPRINT_HEARING_RANGE) {
        if (dist < minDistance) {
          minDistance = dist;
          closest = { player, distance: dist, directSight: false };
        }
      }

      // 3. Sight cone check
      const maxSight = player.flashlightOn ? EnemyAI.SIGHT_RANGE_FLASHLIGHT : EnemyAI.SIGHT_RANGE_NORMAL;
      if (dist <= maxSight && dist > 0.001) {
        const dirX = dx / dist;
        const dirZ = dz / dist;
        const dot = forwardX * dirX + forwardZ * dirZ;

        if (dot >= EnemyAI.SIGHT_FOV_COS) {
          if (dist < minDistance) {
            minDistance = dist;
            closest = { player, distance: dist, directSight: true };
          }
        }
      }
    }

    return closest;
  }

  private updatePatrol(dt: number, players: Map<string, PlayerState>) {
    // Senses check
    const detected = this.findDetectablePlayer(players);
    if (detected) {
      if (detected.directSight) {
        this.enemy.targetPlayerId = detected.player.id;
        this.setState("CHASE");
        return;
      } else {
        this.enemy.investigateX = detected.player.x;
        this.enemy.investigateZ = detected.player.z;
        this.setState("INVESTIGATE");
        return;
      }
    }

    // Move along patrol waypoints
    let wp = this.waypoints[this.currentWaypointIndex];
    let dx = wp.x - this.enemy.x;
    let dz = wp.z - this.enemy.z;
    let dist = Math.hypot(dx, dz);

    if (dist < 0.6) {
      this.currentWaypointIndex = (this.currentWaypointIndex + 1) % this.waypoints.length;
      wp = this.waypoints[this.currentWaypointIndex];
      dx = wp.x - this.enemy.x;
      dz = wp.z - this.enemy.z;
      dist = Math.hypot(dx, dz);
    }

    if (dist > 0.001) {
      const step = EnemyAI.SPEED_PATROL * dt;
      const move = Math.min(step, dist);
      this.enemy.x += (dx / dist) * move;
      this.enemy.z += (dz / dist) * move;
      this.enemy.rotationY = Math.atan2(-dx, -dz);
    }
  }

  private updateInvestigate(dt: number, players: Map<string, PlayerState>) {
    // Senses check: sight takes precedence
    const detected = this.findDetectablePlayer(players);
    if (detected && detected.directSight) {
      this.enemy.targetPlayerId = detected.player.id;
      this.setState("CHASE");
      return;
    }

    const dx = this.enemy.investigateX - this.enemy.x;
    const dz = this.enemy.investigateZ - this.enemy.z;
    const dist = Math.hypot(dx, dz);

    if (dist < 0.8) {
      this.setState("SEARCH");
    } else {
      const step = EnemyAI.SPEED_INVESTIGATE * dt;
      const move = Math.min(step, dist);
      this.enemy.x += (dx / dist) * move;
      this.enemy.z += (dz / dist) * move;
      this.enemy.rotationY = Math.atan2(-dx, -dz);
    }
  }

  private updateSearch(dt: number, players: Map<string, PlayerState>) {
    // Senses check
    const detected = this.findDetectablePlayer(players);
    if (detected && detected.directSight) {
      this.enemy.targetPlayerId = detected.player.id;
      this.setState("CHASE");
      return;
    }

    // Search scanning rotation
    this.enemy.rotationY += 1.6 * dt;
    this.enemy.searchTimer -= dt;

    if (this.enemy.searchTimer <= 0) {
      this.setState("PATROL");
    }
  }

  private updateChase(dt: number, players: Map<string, PlayerState>) {
    const target = players.get(this.enemy.targetPlayerId);

    // Target disconnected, died, or invalid
    if (!target || !target.connected || !target.isAlive) {
      const nextTarget = this.findDetectablePlayer(players);
      if (nextTarget && nextTarget.directSight) {
        this.enemy.targetPlayerId = nextTarget.player.id;
      } else {
        this.setState("SEARCH");
        return;
      }
    }

    const currentTarget = players.get(this.enemy.targetPlayerId)!;
    const dx = currentTarget.x - this.enemy.x;
    const dz = currentTarget.z - this.enemy.z;
    const dist = Math.hypot(dx, dz);

    // Face target
    this.enemy.rotationY = Math.atan2(-dx, -dz);

    // Attack range check
    if (dist <= EnemyAI.ATTACK_RANGE && this.enemy.attackCooldown <= 0) {
      this.setState("ATTACK");
      return;
    }

    // Direct movement toward target
    const step = EnemyAI.SPEED_CHASE * dt;
    const move = Math.min(step, dist);
    this.enemy.x += (dx / dist) * move;
    this.enemy.z += (dz / dist) * move;

    // Check if target is out of sight range or escaped
    const maxSight = currentTarget.flashlightOn ? EnemyAI.SIGHT_RANGE_FLASHLIGHT + 4.0 : EnemyAI.SIGHT_RANGE_NORMAL + 4.0;
    if (dist > maxSight) {
      this.enemy.chaseMemoryTimer -= dt;
      if (this.enemy.chaseMemoryTimer <= 0) {
        this.enemy.investigateX = currentTarget.x;
        this.enemy.investigateZ = currentTarget.z;
        this.setState("SEARCH");
      }
    } else {
      this.enemy.chaseMemoryTimer = EnemyAI.CHASE_MEMORY_DURATION;
    }
  }

  private updateAttack(dt: number, players: Map<string, PlayerState>) {
    const target = players.get(this.enemy.targetPlayerId);
    if (target && target.isAlive) {
      const dist = Math.hypot(target.x - this.enemy.x, target.z - this.enemy.z);
      if (dist <= EnemyAI.ATTACK_RANGE + 0.8) {
        target.health = Math.max(0, target.health - EnemyAI.ATTACK_DAMAGE);
        if (target.health <= 0) {
          target.isAlive = false;
        }
        if (this.onAttackHit) {
          this.onAttackHit(target.id, EnemyAI.ATTACK_DAMAGE);
        }
      }
    }
    // Enter cooldown after strike
    this.setState("COOLDOWN");
  }

  private updateCooldown(dt: number, players: Map<string, PlayerState>) {
    if (this.enemy.attackCooldown <= 0) {
      const target = players.get(this.enemy.targetPlayerId);
      if (target && target.connected && target.isAlive) {
        const dist = Math.hypot(target.x - this.enemy.x, target.z - this.enemy.z);
        if (dist <= EnemyAI.SIGHT_RANGE_NORMAL) {
          this.setState("CHASE");
          return;
        }
      }
      this.setState("SEARCH");
    }
  }
}
