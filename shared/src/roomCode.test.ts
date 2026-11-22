import test from "node:test";
import assert from "node:assert/strict";
import { generateRoomCode, isValidRoomCode, normalizeRoomCode } from "./roomCode.js";
import { ROOM_CODE_LENGTH } from "./types.js";

test("generateRoomCode produces valid 5-char code without ambiguous characters", () => {
  for (let i = 0; i < 50; i++) {
    const code = generateRoomCode();
    assert.equal(code.length, ROOM_CODE_LENGTH);
    assert.equal(isValidRoomCode(code), true);
    assert.equal(/[01OILoil]/.test(code), false);
  }
});

test("normalizeRoomCode trims and converts to uppercase", () => {
  assert.equal(normalizeRoomCode("  ab2c3  "), "AB2C3");
  assert.equal(normalizeRoomCode("h9-kz2"), "H9KZ2");
});

test("isValidRoomCode rejects invalid codes", () => {
  assert.equal(isValidRoomCode(""), false);
  assert.equal(isValidRoomCode("ABCD"), false); // too short
  assert.equal(isValidRoomCode("ABCDEF"), false); // too long
  assert.equal(isValidRoomCode("AB0CD"), false); // contains '0'
  assert.equal(isValidRoomCode("AB1CD"), false); // contains '1'
  assert.equal(isValidRoomCode("ABICD"), false); // contains 'I'
  assert.equal(isValidRoomCode("ABLCD"), false); // contains 'L'
  assert.equal(isValidRoomCode("ABOCD"), false); // contains 'O'
  assert.equal(isValidRoomCode("!@#$%"), false);
});
