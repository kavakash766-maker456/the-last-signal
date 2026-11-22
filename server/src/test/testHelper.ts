import { GameRoom } from "../rooms/GameRoom.js";

export function createTestRoom(code: string = "TEST1"): GameRoom {
  const room = new GameRoom();
  room.autoDispose = false;
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
  return room;
}
