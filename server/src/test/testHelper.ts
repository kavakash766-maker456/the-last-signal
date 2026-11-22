import { GameRoom } from "../rooms/GameRoom.js";

export function createTestRoom(code: string = "TEST1"): GameRoom {
  const room = new GameRoom();
  room.autoDispose = false;
  if ((room as any)._autoDisposeTimeout) {
    clearTimeout((room as any)._autoDisposeTimeout);
  }
  room.listing = { metadata: {} } as any;
  room.presence = {
    subscribe: () => {},
    unsubscribe: () => {},
    publish: () => {},
    exists: async () => false,
    del: async () => {},
    sadd: async () => {},
    smembers: async () => [],
    srem: async () => {},
    hset: async () => {},
    hget: async () => null,
    hdel: async () => {},
    hlen: async () => 0
  } as any;
  room.onCreate({ roomCode: code });
  // Stop all background intervals & timers created by Colyseus so unit tests exit immediately
  if ((room as any)._patchInterval) {
    clearInterval((room as any)._patchInterval);
    (room as any)._patchInterval = undefined;
  }
  if ((room as any)._simulationInterval) {
    clearInterval((room as any)._simulationInterval);
    (room as any)._simulationInterval = undefined;
  }
  if ((room as any)._autoDisposeTimeout) {
    clearTimeout((room as any)._autoDisposeTimeout);
    (room as any)._autoDisposeTimeout = undefined;
  }
  room.clock.clear();
  return room;
}
