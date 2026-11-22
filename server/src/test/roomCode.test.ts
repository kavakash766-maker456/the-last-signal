import { test, describe } from "node:test";
import assert from "node:assert/strict";
import {
  generateRoomCode,
  normalizeRoomCode,
  isValidRoomCode,
  ROOM_CODE_LENGTH,
  ROOM_CODE_ALPHABET,
  MAX_PLAYERS_PER_ROOM
} from "@the-last-signal/shared";

describe("Room Code & Lobby Constraints", () => {
  test("generates 5-character room code using unambiguous alphabet", () => {
    for (let i = 0; i < 50; i++) {
      const code = generateRoomCode();
      assert.equal(code.length, ROOM_CODE_LENGTH, "Code length must be exactly 5");
      for (const char of code) {
        assert.ok(ROOM_CODE_ALPHABET.includes(char), `Character ${char} must be in allowed alphabet`);
        // Ambiguous characters must NEVER appear
        assert.ok(!["0", "O", "1", "I", "L"].includes(char), `Ambiguous char ${char} must not be present`);
      }
    }
  });

  test("normalizes lowercase and whitespace correctly", () => {
    assert.equal(normalizeRoomCode("  234ab  "), "234AB");
    assert.equal(normalizeRoomCode("xy-78"), "XY78");
  });

  test("validates valid and invalid room codes", () => {
    assert.equal(isValidRoomCode("H9KZ2"), true);
    assert.equal(isValidRoomCode("23456"), true);
    assert.equal(isValidRoomCode("H9KZ"), false); // too short
    assert.equal(isValidRoomCode("H9KZ22"), false); // too long
    assert.equal(isValidRoomCode("H9KZ0"), false); // '0' is invalid
    assert.equal(isValidRoomCode("H9KZI"), false); // 'I' is invalid
  });

  test("enforces 4-player max room limit constant", () => {
    assert.equal(MAX_PLAYERS_PER_ROOM, 4);
  });
});
