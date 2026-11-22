import colyseusPkg from "colyseus";
const { Room, ServerError } = colyseusPkg;
import type { Client } from "colyseus";
import { GameState } from "../schema/GameState.js";
import { PlayerState } from "../schema/PlayerState.js";
import { EnemyAI } from "../ai/EnemyAI.js";
import {
  generateRoomCode,
  normalizeRoomCode,
  isValidRoomCode,
  MAX_PLAYERS_PER_ROOM
} from "@the-last-signal/shared";

interface JoinOptions {
  name?: string;
  roomCode?: string;
  isHost?: boolean;
}

interface InputPayload {
  x: number;
  y?: number;
  z: number;
  rotationY: number;
  pitch?: number;
  isSprinting?: boolean;
  isCrouching?: boolean;
}

interface InteractPayload {
  targetId: string;
  action:
    | "PICKUP_KEY"
    | "OPEN_GATE"
    | "PICKUP_FUSE"
    | "ACTIVATE_GENERATOR"
    | "SOLVE_PUZZLE"
    | "PICKUP_RECORDER"
    | "TRANSMIT_RADIO"
    | "ESCAPE";
  puzzleCode?: string;
}

export class GameRoom extends Room<GameState> {
  maxClients = MAX_PLAYERS_PER_ROOM; // Authoritative 4-player limit
  private enemyAI!: EnemyAI;
  private simulationIntervalMs = 50; // 20 Hz tick
  private batteryDrainRate = 1 / 3; // 1% per 3 seconds when flashlight is active

  // Authoritative World Coordinates for Objectives / Puzzles
  public static readonly LOC_KEY = { x: -14.5, y: 0.5, z: 12.0 };
  public static readonly LOC_GATE = { x: 0.0, y: 0.0, z: 15.0 };
  public static readonly LOC_FUSE = { x: 16.0, y: 0.5, z: -8.0 };
  public static readonly LOC_GENERATOR = { x: 18.0, y: 0.0, z: -14.0 };
  public static readonly LOC_SAFE = { x: -8.0, y: 1.0, z: -16.0 };
  public static readonly LOC_RADIO = { x: 2.0, y: 4.5, z: -4.0 };
  public static readonly LOC_EXTRACTION = { x: 0.0, y: 4.5, z: 2.0 };
  public static readonly MAX_INTERACT_DISTANCE = 4.5;

  onCreate(options: JoinOptions) {
    let code: string;
    if (options.roomCode && isValidRoomCode(options.roomCode)) {
      code = normalizeRoomCode(options.roomCode);
    } else {
      code = generateRoomCode();
    }

    this.setState(new GameState(code));
    if (this.listing) {
      this.setMetadata({ roomCode: code });
    }

    // Initialize Server-Authoritative Enemy AI
    this.enemyAI = new EnemyAI(this.state.enemy);

    this.enemyAI.onAttackHit = (targetPlayerId, damage) => {
      this.broadcast("PLAYER_HIT", {
        playerId: targetPlayerId,
        damage,
        remainingHealth: this.state.players.get(targetPlayerId)?.health ?? 0
      });
      this.checkPlayerDeath(targetPlayerId);
    };

    this.enemyAI.onScream = (x, y, z) => {
      this.broadcast("ENEMY_SCREAM", { x, y, z });
    };

    this.enemyAI.onStateChange = (newState, oldState) => {
      this.broadcast("ENEMY_STATE_CHANGE", { newState, oldState });
    };

    // Register Message Handlers
    this.setupMessageHandlers();

    // Start 20 Hz simulation loop
    this.setSimulationInterval((dt) => this.update(dt / 1000), this.simulationIntervalMs);
  }

  onAuth(client: Client, options: JoinOptions): boolean {
    if (this.clients.length >= MAX_PLAYERS_PER_ROOM) {
      throw new ServerError(403, "ROOM_FULL");
    }
    if (this.state.players.size >= MAX_PLAYERS_PER_ROOM) {
      throw new ServerError(403, "ROOM_FULL");
    }
    return true;
  }

  onJoin(client: Client, options: JoinOptions) {
    if (this.state.players.size >= MAX_PLAYERS_PER_ROOM) {
      throw new ServerError(403, "ROOM_FULL");
    }

    const isFirstPlayer = this.state.players.size === 0;
    const isHost = isFirstPlayer || options.isHost === true;
    const playerName = (options.name && options.name.trim()) || `Survivor ${this.state.players.size + 1}`;

    const newPlayer = new PlayerState(client.sessionId, playerName, isHost);

    // Initial player spawn position (Clinic courtyard entrance)
    newPlayer.x = (this.state.players.size * 1.5) - 2.0;
    newPlayer.y = 0.0;
    newPlayer.z = 18.0;

    this.state.players.set(client.sessionId, newPlayer);

    this.broadcast("PLAYER_JOINED", {
      id: client.sessionId,
      name: playerName,
      isHost
    });
  }

  async onLeave(client: Client, consented: boolean) {
    const player = this.state.players.get(client.sessionId);
    if (!player) return;

    if (consented) {
      // Normal voluntary exit
      this.removePlayer(client.sessionId);
    } else {
      // Mobile network drop or temporary disconnect (30-second grace window)
      player.connected = false;
      this.broadcast("PLAYER_DISCONNECTED", { id: client.sessionId, name: player.name });

      try {
        await this.allowReconnection(client, 30);
        player.connected = true;
        this.broadcast("PLAYER_RECONNECTED", { id: client.sessionId, name: player.name });
      } catch (err) {
        // Reconnect grace expired
        this.removePlayer(client.sessionId);
      }
    }
  }

  private removePlayer(sessionId: string) {
    const leavingPlayer = this.state.players.get(sessionId);
    if (!leavingPlayer) return;

    const wasHost = leavingPlayer.isHost;
    this.state.players.delete(sessionId);

    // Host Migration: Elect next connected player
    if (wasHost && this.state.players.size > 0) {
      let newHost: PlayerState | null = null;
      for (const [, p] of this.state.players) {
        if (p.connected) {
          newHost = p;
          break;
        }
      }
      if (!newHost) {
        // Fallback to first player in map
        newHost = this.state.players.values().next().value || null;
      }

      if (newHost) {
        newHost.isHost = true;
        this.broadcast("HOST_MIGRATED", {
          newHostId: newHost.id,
          newHostName: newHost.name
        });
      }
    }

    this.broadcast("PLAYER_LEFT", { id: sessionId, wasHost });
  }

  private setupMessageHandlers() {
    // 1. Authoritative Player Input
    this.onMessage("INPUT", (client, payload: InputPayload) => {
      const player = this.state.players.get(client.sessionId);
      if (!player || !player.connected || !player.isAlive) return;

      // Speed validation & clamping
      const maxDelta = player.isSprinting ? 0.7 : 0.35; // per 50ms tick
      const dx = payload.x - player.x;
      const dz = payload.z - player.z;
      const dist = Math.hypot(dx, dz);

      if (dist > maxDelta * 2.5) {
        // Soft correction if out of bounds
        player.x += (dx / dist) * (maxDelta * 1.5);
        player.z += (dz / dist) * (maxDelta * 1.5);
      } else {
        player.x = payload.x;
        player.z = payload.z;
      }

      if (typeof payload.y === "number") player.y = payload.y;
      player.rotationY = payload.rotationY;
      if (typeof payload.pitch === "number") player.pitch = payload.pitch;
      player.isSprinting = !!payload.isSprinting;
      player.isCrouching = !!payload.isCrouching;

      // Hearing sense: emit sound event if player sprints
      if (player.isSprinting && !player.isCrouching) {
        this.enemyAI.emitSound({
          x: player.x,
          z: player.z,
          radius: EnemyAI.SPRINT_HEARING_RANGE,
          sourceSessionId: client.sessionId,
          type: "SPRINT"
        });
      }
    });

    // 2. Flashlight Toggle & Authoritative Battery Management
    this.onMessage("TOGGLE_FLASHLIGHT", (client) => {
      const player = this.state.players.get(client.sessionId);
      if (!player || !player.isAlive) return;

      if (!player.flashlightOn && player.flashlightBattery <= 0) {
        client.send("NOTIFICATION", { message: "විදුලි පන්දමේ බැටරිය අවසන් වී ඇත!" });
        return;
      }

      player.flashlightOn = !player.flashlightOn;
    });

    // 3. Lobby Ready Toggle
    this.onMessage("PLAYER_READY", (client) => {
      const player = this.state.players.get(client.sessionId);
      if (!player) return;
      player.isReady = !player.isReady;
    });

    // 4. Host Start Game
    this.onMessage("START_GAME", (client) => {
      const player = this.state.players.get(client.sessionId);
      if (!player || !player.isHost) {
        client.send("ERROR", { message: "ක්‍රීඩාව ආරම්භ කළ හැක්කේ ප්‍රධාන සත්කාරකයාට (Host) පමණි." });
        return;
      }

      this.state.phase = "PLAYING";
      this.broadcast("GAME_STARTED", { message: "ක්‍රීඩාව ආරම්භ විය! සායනය ගවේෂණය කරන්න." });
    });

    // 5. Authoritative Interaction & Puzzle Validation
    this.onMessage("INTERACT", (client, payload: InteractPayload) => {
      const player = this.state.players.get(client.sessionId);
      if (!player || !player.isAlive) return;

      this.handlePlayerInteract(client, player, payload);
    });
  }

  private handlePlayerInteract(client: Client, player: PlayerState, payload: InteractPayload) {
    const action = payload.action;

    switch (action) {
      case "PICKUP_KEY": {
        // Gate key pickup validation
        const dist = Math.hypot(player.x - GameRoom.LOC_KEY.x, player.z - GameRoom.LOC_KEY.z);
        if (dist > GameRoom.MAX_INTERACT_DISTANCE) {
          client.send("ERROR", { message: "ඔබ යතුරට බොහෝ ඈතින් සිටී." });
          return;
        }
        if (this.state.hasGateKey) {
          client.send("ERROR", { message: "යතුර දැනටමත් ලබාගෙන ඇත." });
          return;
        }

        this.state.hasGateKey = true;
        this.broadcast("NOTIFICATION", {
          message: `${player.name} විසින් ප්‍රධාන ගේට්ටුවේ යතුර (Gate Key) සොයා ගන්නා ලදී!`
        });
        client.send("INTERACTION_SUCCESS", { action: "PICKUP_KEY" });
        break;
      }

      case "OPEN_GATE": {
        // Gate unlock validation
        const dist = Math.hypot(player.x - GameRoom.LOC_GATE.x, player.z - GameRoom.LOC_GATE.z);
        if (dist > GameRoom.MAX_INTERACT_DISTANCE) {
          client.send("ERROR", { message: "ඔබ ගේට්ටුවට බොහෝ ඈතින් සිටී." });
          return;
        }
        if (!this.state.hasGateKey) {
          client.send("ERROR", { message: "ගේට්ටුව විවෘත කිරීමට යතුර (Gate Key) අවශ්‍ය වේ!" });
          return;
        }
        if (this.state.gateOpened) {
          return;
        }

        this.state.gateOpened = true;
        this.completeObjective(0);
        this.enemyAI.emitSound({
          x: GameRoom.LOC_GATE.x,
          z: GameRoom.LOC_GATE.z,
          radius: 18,
          type: "GATE"
        });
        this.broadcast("NOTIFICATION", {
          message: `${player.name} විසින් ප්‍රධාන ගේට්ටුව විවෘත කරන ලදී!`
        });
        client.send("INTERACTION_SUCCESS", { action: "OPEN_GATE" });
        break;
      }

      case "PICKUP_FUSE": {
        // Fuse pickup validation
        const dist = Math.hypot(player.x - GameRoom.LOC_FUSE.x, player.z - GameRoom.LOC_FUSE.z);
        if (dist > GameRoom.MAX_INTERACT_DISTANCE) {
          client.send("ERROR", { message: "ඔබ ෆියුස් එකට බොහෝ ඈතින් සිටී." });
          return;
        }
        if (this.state.hasClinicFuse) {
          client.send("ERROR", { message: "ෆියුස් එක දැනටමත් ලබාගෙන ඇත." });
          return;
        }

        this.state.hasClinicFuse = true;
        this.state.fusesInserted = 1;
        this.broadcast("NOTIFICATION", {
          message: `${player.name} විසින් විදුලි ෆියුස් එක (Clinic Fuse) සොයා ගන්නා ලදී!`
        });
        client.send("INTERACTION_SUCCESS", { action: "PICKUP_FUSE" });
        break;
      }

      case "ACTIVATE_GENERATOR": {
        // Generator activation & power restoration
        const dist = Math.hypot(player.x - GameRoom.LOC_GENERATOR.x, player.z - GameRoom.LOC_GENERATOR.z);
        if (dist > GameRoom.MAX_INTERACT_DISTANCE) {
          client.send("ERROR", { message: "ඔබ ජනක යන්ත්‍රයට බොහෝ ඈතින් සිටී." });
          return;
        }
        if (!this.state.hasClinicFuse) {
          client.send("ERROR", { message: "විදුලි ජනකය පණගැන්වීමට ෆියුස් එකක් (Fuse) අවශ්‍ය වේ!" });
          return;
        }
        if (this.state.powerRestored) {
          return;
        }

        this.state.powerRestored = true;
        this.state.roofDoorUnlocked = true;
        this.completeObjective(1);

        // Alert enemy within 35m
        this.enemyAI.emitSound({
          x: GameRoom.LOC_GENERATOR.x,
          z: GameRoom.LOC_GENERATOR.z,
          radius: 35,
          type: "GENERATOR"
        });

        this.broadcast("NOTIFICATION", {
          message: "විදුලි ජනකය පණගැන්විණි! සායනයට විදුලිය ලැබුණි, වහලයේ දොර අගුලු හැරිණි."
        });
        client.send("INTERACTION_SUCCESS", { action: "ACTIVATE_GENERATOR" });
        break;
      }

      case "SOLVE_PUZZLE": {
        // Authoritative Symbol Lock Puzzle (Code: 739)
        const dist = Math.hypot(player.x - GameRoom.LOC_SAFE.x, player.z - GameRoom.LOC_SAFE.z);
        if (dist > GameRoom.MAX_INTERACT_DISTANCE) {
          client.send("ERROR", { message: "ඔබ සංකේත අගුලට බොහෝ ඈතින් සිටී." });
          return;
        }

        const inputCode = (payload.puzzleCode || "").trim();
        if (inputCode === "739") {
          this.state.symbolPuzzleSolved = true;
          this.state.hasAudioRecorder = true;
          this.completeObjective(2);

          this.broadcast("NOTIFICATION", {
            message: `සංකේත අගුල (739) සාර්ථකව විසඳන ලදී! ශ්‍රව්‍ය පටිගත කිරීම (Audio Recorder) ලැබිණි!`
          });
          client.send("PUZZLE_SUCCESS", { code: "739" });
          client.send("INTERACTION_SUCCESS", { action: "SOLVE_PUZZLE" });
        } else {
          client.send("PUZZLE_FAILED", {
            message: "වැරදි සංකේත අංකයකි! නැවත උත්සාහ කරන්න."
          });
        }
        break;
      }

      case "PICKUP_RECORDER": {
        if (!this.state.symbolPuzzleSolved) {
          client.send("ERROR", { message: "පළමුව සංකේත අගුල විසඳන්න!" });
          return;
        }
        this.state.hasAudioRecorder = true;
        client.send("INTERACTION_SUCCESS", { action: "PICKUP_RECORDER" });
        break;
      }

      case "TRANSMIT_RADIO": {
        // Radio SOS Broadcast on Roof
        const dist = Math.hypot(player.x - GameRoom.LOC_RADIO.x, player.z - GameRoom.LOC_RADIO.z);
        if (dist > GameRoom.MAX_INTERACT_DISTANCE) {
          client.send("ERROR", { message: "ඔබ සම්ප්‍රේෂකයට බොහෝ ඈතින් සිටී." });
          return;
        }
        if (!this.state.powerRestored) {
          client.send("ERROR", { message: "සම්ප්‍රේෂකය ක්‍රියාත්මක කිරීමට විදුලිය අවශ්‍යයි!" });
          return;
        }
        if (!this.state.hasAudioRecorder) {
          client.send("ERROR", { message: "විකාශනය සඳහා සායනයේ ශ්‍රව්‍ය පටිගත කිරීම (Audio Recorder) අවශ්‍ය වේ!" });
          return;
        }
        if (this.state.radioTransmitted) {
          return;
        }

        this.state.radioTransmitted = true;
        this.state.phase = "CLIMAX";
        this.completeObjective(3);

        this.enemyAI.emitSound({
          x: GameRoom.LOC_RADIO.x,
          z: GameRoom.LOC_RADIO.z,
          radius: 50,
          type: "RADIO"
        });

        this.broadcast("NOTIFICATION", {
          message: "අවසාන සංඥාව (The Last Signal) විකාශනය විය! බේරාගැනීමේ හෙලිකොප්ටරය පැමිණේ, නොනැසී සිටින්න!"
        });
        client.send("INTERACTION_SUCCESS", { action: "TRANSMIT_RADIO" });
        break;
      }

      case "ESCAPE": {
        // Final Extraction Escape
        const dist = Math.hypot(player.x - GameRoom.LOC_EXTRACTION.x, player.z - GameRoom.LOC_EXTRACTION.z);
        if (dist > GameRoom.MAX_INTERACT_DISTANCE) {
          client.send("ERROR", { message: "ඔබ පලායෑමේ කලාපයෙන් (Extraction Zone) පිටත සිටී." });
          return;
        }
        if (this.state.phase !== "CLIMAX" || !this.state.radioTransmitted) {
          client.send("ERROR", { message: "පළමුව ගුවන්විදුලි සංඥාව යවන්න!" });
          return;
        }

        this.state.survivorsEscaped += 1;
        this.broadcast("NOTIFICATION", {
          message: `${player.name} හෙලිකොප්ටරය වෙත පලා ගියේය!`
        });

        // Check if all connected living players have escaped
        let aliveConnectedCount = 0;
        for (const [, p] of this.state.players) {
          if (p.connected && p.isAlive) aliveConnectedCount++;
        }

        if (this.state.survivorsEscaped >= aliveConnectedCount && aliveConnectedCount > 0) {
          this.completeObjective(4);
          this.state.phase = "COMPLETED";
          this.broadcast("GAME_VICTORY", {
            message: "ජයග්‍රහණයයි! සියලු දිවි ගලවා ගත් අය ආරක්ෂිතව පලා ගියහ."
          });
        }
        client.send("INTERACTION_SUCCESS", { action: "ESCAPE" });
        break;
      }
    }
  }

  private completeObjective(index: number) {
    if (this.state.objectives[index]) {
      this.state.objectives[index].completed = true;
      if (this.state.currentObjectiveIndex <= index) {
        this.state.currentObjectiveIndex = index + 1;
      }
      this.broadcast("OBJECTIVE_UPDATED", {
        index,
        objective: this.state.objectives[index]
      });
    }
  }

  private checkPlayerDeath(targetPlayerId: string) {
    const player = this.state.players.get(targetPlayerId);
    if (!player) return;

    if (!player.isAlive) {
      this.broadcast("PLAYER_DIED", {
        id: targetPlayerId,
        name: player.name
      });

      // Check if all players dead -> FAILED
      let anyAlive = false;
      for (const [, p] of this.state.players) {
        if (p.isAlive) {
          anyAlive = true;
          break;
        }
      }
      if (!anyAlive && this.state.players.size > 0) {
        this.state.phase = "FAILED";
        this.broadcast("GAME_OVER", {
          message: "සියලු ක්‍රීඩකයින් මිය ගියහ. සායනයේ භීෂණය ජය ගත්තේය."
        });
      }
    }
  }

  update(dt: number) {
    if (this.state.phase === "PLAYING" || this.state.phase === "CLIMAX") {
      // 1. Flashlight Battery Drain
      for (const [, player] of this.state.players) {
        if (player.connected && player.isAlive && player.flashlightOn) {
          player.flashlightBattery = Math.max(0, player.flashlightBattery - this.batteryDrainRate * dt);
          if (player.flashlightBattery <= 0) {
            player.flashlightOn = false;
          }
        }
      }

      // 2. Authoritative Enemy AI State Machine Tick
      const playerMap = new Map<string, PlayerState>();
      for (const [id, player] of this.state.players) {
        playerMap.set(id, player);
      }
      this.enemyAI.update(dt, playerMap);
    }
  }
}
