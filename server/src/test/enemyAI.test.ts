import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { EnemyAI } from "../ai/EnemyAI.js";
import { EnemyState } from "../schema/EnemyState.js";
import { PlayerState } from "../schema/PlayerState.js";

describe("Server-Authoritative Enemy AI State Machine", () => {
  test("starts in PATROL state and patrols waypoints", () => {
    const enemyState = new EnemyState();
    const ai = new EnemyAI(enemyState);
    const players = new Map<string, PlayerState>();

    assert.equal(enemyState.state, "PATROL");
    assert.equal(enemyState.speed, EnemyAI.SPEED_PATROL);

    const initialX = enemyState.x;
    const initialZ = enemyState.z;

    // Simulate 1 second of patrol without players
    ai.update(1.0, players);

    // Position must have moved along patrol path
    const movedDistance = Math.hypot(enemyState.x - initialX, enemyState.z - initialZ);
    assert.ok(movedDistance > 0.5, "Enemy must move along patrol waypoints");
    assert.equal(enemyState.state, "PATROL");
  });

  test("switches to INVESTIGATE when hearing sprint noise within hearing radius", () => {
    const enemyState = new EnemyState();
    const ai = new EnemyAI(enemyState);
    const players = new Map<string, PlayerState>();

    enemyState.x = 0;
    enemyState.z = 0;
    enemyState.rotationY = 0; // facing -Z

    const runner = new PlayerState("p1", "Runner", false);
    runner.x = 8.0; // within 12m sprint hearing range, but behind enemy (outside sight cone)
    runner.z = 5.0;
    runner.isSprinting = true;
    runner.isCrouching = false;
    players.set(runner.id, runner);

    ai.update(0.05, players);

    assert.equal(enemyState.state, "INVESTIGATE");
    assert.equal(enemyState.investigateX, 8.0);
    assert.equal(enemyState.investigateZ, 5.0);
    assert.ok(enemyState.alertLevel >= 50);
  });

  test("switches to CHASE when player enters visual cone", () => {
    const enemyState = new EnemyState();
    const ai = new EnemyAI(enemyState);
    const players = new Map<string, PlayerState>();

    enemyState.x = 0;
    enemyState.z = 0;
    enemyState.rotationY = 0; // facing (0, -1) in -Z direction

    let screamCalled = false;
    ai.onScream = () => {
      screamCalled = true;
    };

    const victim = new PlayerState("victim-1", "Victim", false);
    victim.x = 0;
    victim.z = -10.0; // Directly in front at 10m (within 14m normal sight range)
    victim.flashlightOn = false;
    players.set(victim.id, victim);

    ai.update(0.05, players);

    assert.equal(enemyState.state, "CHASE");
    assert.equal(enemyState.targetPlayerId, "victim-1");
    assert.equal(enemyState.speed, EnemyAI.SPEED_CHASE);
    assert.equal(screamCalled, true, "Enemy must scream upon detecting victim");
  });

  test("detects player further away when flashlight is ON", () => {
    const enemyState = new EnemyState();
    const ai = new EnemyAI(enemyState);
    const players = new Map<string, PlayerState>();

    enemyState.x = 0;
    enemyState.z = 0;
    enemyState.rotationY = 0; // facing -Z

    const distantPlayer = new PlayerState("p-far", "Distant", false);
    distantPlayer.x = 0;
    distantPlayer.z = -20.0; // 20m away: beyond normal sight (14m) but within flashlight sight (26m)
    distantPlayer.flashlightOn = true;
    players.set(distantPlayer.id, distantPlayer);

    ai.update(0.05, players);

    assert.equal(enemyState.state, "CHASE");
    assert.equal(enemyState.targetPlayerId, "p-far");
  });

  test("executes ATTACK within melee range and enters COOLDOWN", () => {
    const enemyState = new EnemyState();
    const ai = new EnemyAI(enemyState);
    const players = new Map<string, PlayerState>();

    enemyState.x = 0;
    enemyState.z = 0;
    enemyState.state = "CHASE";
    enemyState.targetPlayerId = "p-melee";

    const target = new PlayerState("p-melee", "Target", false);
    target.x = 0;
    target.z = -1.2; // 1.2m away (< 1.8m attack range)
    target.health = 100;
    players.set(target.id, target);

    let hitDamage = 0;
    ai.onAttackHit = (id, dmg) => {
      hitDamage = dmg;
    };

    // First tick enters ATTACK
    ai.update(0.05, players);
    assert.equal(enemyState.state, "ATTACK");

    // Second tick executes strike & enters COOLDOWN
    ai.update(0.05, players);
    assert.equal(hitDamage, EnemyAI.ATTACK_DAMAGE);
    assert.equal(target.health, 100 - EnemyAI.ATTACK_DAMAGE);
    assert.equal(enemyState.state, "COOLDOWN");
    assert.ok(enemyState.attackCooldown > 0);
  });

  test("searches when losing player and transitions back to PATROL", () => {
    const enemyState = new EnemyState();
    const ai = new EnemyAI(enemyState);
    const players = new Map<string, PlayerState>();

    enemyState.state = "SEARCH";
    enemyState.searchTimer = 1.0;

    // Simulate 0.5s of searching -> remains in SEARCH
    ai.update(0.5, players);
    assert.equal(enemyState.state, "SEARCH");
    assert.ok(enemyState.searchTimer <= 0.6);

    // Simulate another 0.6s -> timer expires -> transitions to PATROL
    ai.update(0.6, players);
    assert.equal(enemyState.state, "PATROL");
    assert.equal(enemyState.speed, EnemyAI.SPEED_PATROL);
  });
});
