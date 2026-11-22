import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { GameRoom } from "../rooms/GameRoom.js";
import { createTestRoom } from "./testHelper.js";
import colyseusPkg from "colyseus";
const { ServerError } = colyseusPkg;

describe("Room Lifecycle, Host Migration & 4-Player Limit", () => {
  test("enforces 4-player maximum and cleanly rejects 5th player", () => {
    const room = createTestRoom("LIMIT");

    const createMockClient = (id: string) => ({
      sessionId: id,
      send: () => {}
    } as any);

    // Join 4 players
    for (let i = 1; i <= 4; i++) {
      const client = createMockClient(`session-${i}`);
      const allowed = room.onAuth(client, { name: `Player ${i}` });
      assert.equal(allowed, true);
      room.onJoin(client, { name: `Player ${i}` });
    }

    assert.equal(room.state.players.size, 4);

    // 5th player attempts connection
    const fifthClient = createMockClient("session-5");
    assert.throws(
      () => {
        room.onAuth(fifthClient, { name: "Player 5" });
      },
      (err: any) => {
        return err instanceof ServerError && err.code === 403 && err.message === "ROOM_FULL";
      },
      "5th player must be cleanly rejected with ROOM_FULL ServerError"
    );
  });

  test("host migration transfers leadership when host leaves", () => {
    const room = createTestRoom("MIGRT");

    const client1 = { sessionId: "p1", send: () => {} } as any;
    const client2 = { sessionId: "p2", send: () => {} } as any;
    const client3 = { sessionId: "p3", send: () => {} } as any;

    room.onJoin(client1, { name: "Alice", isHost: true });
    room.onJoin(client2, { name: "Bob", isHost: false });
    room.onJoin(client3, { name: "Charlie", isHost: false });

    assert.equal(room.state.players.get("p1")?.isHost, true, "First player must be host");
    assert.equal(room.state.players.get("p2")?.isHost, false);
    assert.equal(room.state.players.get("p3")?.isHost, false);

    // Host (p1) leaves voluntarily (consented = true)
    room.onLeave(client1, true);

    assert.equal(room.state.players.has("p1"), false, "p1 must be removed");
    assert.equal(room.state.players.size, 2);

    // Bob (p2) must have been migrated to Host!
    const newHost = room.state.players.get("p2");
    assert.equal(newHost?.isHost, true, "Bob (p2) must now be host via migration");
  });

  test("flashlight battery drains during active play", () => {
    const room = createTestRoom("FLSHL");

    const client = { sessionId: "p-light", send: () => {} } as any;
    room.onJoin(client, { name: "Dilan" });
    room.state.phase = "PLAYING";

    const player = room.state.players.get("p-light")!;
    player.flashlightOn = true;
    player.flashlightBattery = 100;

    // Simulate 3 seconds of play
    room.update(3.0);

    assert.ok(player.flashlightBattery < 100, "Flashlight battery must drain when on");
    assert.ok(player.flashlightBattery >= 98, "Battery drain rate should be controlled (~1% per 3s)");

    // Drain down to 0
    player.flashlightBattery = 0.1;
    room.update(1.0);
    assert.equal(player.flashlightBattery, 0);
    assert.equal(player.flashlightOn, false, "Flashlight must auto-shutoff when battery is 0");
  });
});
