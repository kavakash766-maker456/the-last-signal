import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { GameRoom } from "../rooms/GameRoom.js";
import { PlayerState } from "../schema/PlayerState.js";
import { createTestRoom } from "./testHelper.js";

describe("Authoritative Puzzle Locks & Objective Progression", () => {
  test("symbol lock validates exact code 739", () => {
    const room = createTestRoom("TEST1");

    const player = new PlayerState("player-safe", "Investigator", true);
    // Position player right next to safe
    player.x = GameRoom.LOC_SAFE.x;
    player.z = GameRoom.LOC_SAFE.z;
    room.state.players.set(player.id, player);

    let lastError = "";
    let puzzleSuccess = false;
    const mockClient = {
      sessionId: player.id,
      send: (type: string, data: any) => {
        if (type === "ERROR" || type === "PUZZLE_FAILED") {
          lastError = data.message;
        }
        if (type === "PUZZLE_SUCCESS") {
          puzzleSuccess = true;
        }
      }
    } as any;

    // 1. Wrong code 123
    (room as any).handlePlayerInteract(mockClient, player, {
      targetId: "safe",
      action: "SOLVE_PUZZLE",
      puzzleCode: "123"
    });

    assert.equal(room.state.symbolPuzzleSolved, false, "Wrong code 123 must not unlock safe");
    assert.equal(room.state.hasAudioRecorder, false);
    assert.ok(lastError.length > 0, "Must return error message on failure");

    // 2. Correct code 739
    (room as any).handlePlayerInteract(mockClient, player, {
      targetId: "safe",
      action: "SOLVE_PUZZLE",
      puzzleCode: "739"
    });

    assert.equal(room.state.symbolPuzzleSolved, true, "Code 739 must successfully solve puzzle");
    assert.equal(room.state.hasAudioRecorder, true, "Solving safe must award Audio Recorder");
    assert.equal(puzzleSuccess, true);
    assert.equal(room.state.objectives.at(2)?.completed, true, "Objective 3 must be marked complete");
  });

  test("gate key pickup distance and gate opening validation", () => {
    const room = createTestRoom("TEST2");

    const player = new PlayerState("player-gate", "Scout", false);
    room.state.players.set(player.id, player);

    let lastError = "";
    const mockClient = {
      sessionId: player.id,
      send: (type: string, data: any) => {
        if (type === "ERROR") lastError = data.message;
      }
    } as any;

    // 1. Try to pickup key while too far away (at x: 50, z: 50)
    player.x = 50.0;
    player.z = 50.0;
    (room as any).handlePlayerInteract(mockClient, player, {
      targetId: "key",
      action: "PICKUP_KEY"
    });
    assert.equal(room.state.hasGateKey, false, "Must reject pickup when out of range");

    // 2. Move within range of key
    player.x = GameRoom.LOC_KEY.x;
    player.z = GameRoom.LOC_KEY.z;
    (room as any).handlePlayerInteract(mockClient, player, {
      targetId: "key",
      action: "PICKUP_KEY"
    });
    assert.equal(room.state.hasGateKey, true, "Must acquire key when within range");

    // 3. Try to open gate while away from gate
    (room as any).handlePlayerInteract(mockClient, player, {
      targetId: "gate",
      action: "OPEN_GATE"
    });
    assert.equal(room.state.gateOpened, false, "Cannot open gate from afar");

    // 4. Move to gate and open
    player.x = GameRoom.LOC_GATE.x;
    player.z = GameRoom.LOC_GATE.z;
    (room as any).handlePlayerInteract(mockClient, player, {
      targetId: "gate",
      action: "OPEN_GATE"
    });
    assert.equal(room.state.gateOpened, true, "Gate must open when player has key and is at gate");
    assert.equal(room.state.objectives.at(0)?.completed, true, "Objective 1 must be completed");
  });

  test("fuse restoration and generator activation", () => {
    const room = createTestRoom("TEST3");

    const player = new PlayerState("player-gen", "Engineer", false);
    room.state.players.set(player.id, player);

    const mockClient = {
      sessionId: player.id,
      send: () => {}
    } as any;

    // 1. Attempt generator activation without fuse
    player.x = GameRoom.LOC_GENERATOR.x;
    player.z = GameRoom.LOC_GENERATOR.z;
    (room as any).handlePlayerInteract(mockClient, player, {
      targetId: "generator",
      action: "ACTIVATE_GENERATOR"
    });
    assert.equal(room.state.powerRestored, false, "Generator cannot start without fuse");

    // 2. Pickup fuse at shed
    player.x = GameRoom.LOC_FUSE.x;
    player.z = GameRoom.LOC_FUSE.z;
    (room as any).handlePlayerInteract(mockClient, player, {
      targetId: "fuse",
      action: "PICKUP_FUSE"
    });
    assert.equal(room.state.hasClinicFuse, true, "Fuse must be acquired");
    assert.equal(room.state.fusesInserted, 1);

    // 3. Return to generator and activate
    player.x = GameRoom.LOC_GENERATOR.x;
    player.z = GameRoom.LOC_GENERATOR.z;
    (room as any).handlePlayerInteract(mockClient, player, {
      targetId: "generator",
      action: "ACTIVATE_GENERATOR"
    });
    assert.equal(room.state.powerRestored, true, "Generator must start successfully");
    assert.equal(room.state.roofDoorUnlocked, true, "Roof access door must unlock");
    assert.equal(room.state.objectives.at(1)?.completed, true, "Objective 2 must be completed");
  });

  test("radio SOS broadcast triggers CLIMAX and extraction completes chapter", () => {
    const room = createTestRoom("TEST4");

    const player = new PlayerState("player-hero", "Hero", true);
    room.state.players.set(player.id, player);
    room.state.phase = "PLAYING";

    const mockClient = {
      sessionId: player.id,
      send: () => {}
    } as any;

    // Prerequisites for radio SOS: powerRestored + hasAudioRecorder
    room.state.powerRestored = true;
    room.state.hasAudioRecorder = true;

    player.x = GameRoom.LOC_RADIO.x;
    player.z = GameRoom.LOC_RADIO.z;

    (room as any).handlePlayerInteract(mockClient, player, {
      targetId: "radio",
      action: "TRANSMIT_RADIO"
    });

    assert.equal(room.state.radioTransmitted, true, "SOS transmission must succeed");
    assert.equal(room.state.phase, "CLIMAX", "Game phase must shift to CLIMAX");
    assert.equal(room.state.objectives.at(3)?.completed, true);

    // Escape extraction
    player.x = GameRoom.LOC_EXTRACTION.x;
    player.z = GameRoom.LOC_EXTRACTION.z;

    (room as any).handlePlayerInteract(mockClient, player, {
      targetId: "escape",
      action: "ESCAPE"
    });

    assert.equal(room.state.survivorsEscaped, 1);
    assert.equal(room.state.phase, "COMPLETED", "Game phase must be COMPLETED upon escape");
    assert.equal(room.state.objectives.at(4)?.completed, true);
  });
});
