import { ROOM_CODE_ALPHABET, ROOM_CODE_LENGTH } from "./types.js";

/**
 * Generates an unpredictable 5-character alphanumeric room code.
 * Excludes ambiguous characters (0, O, 1, I, L).
 */
export function generateRoomCode(): string {
  let result = "";
  const alphabetLength = ROOM_CODE_ALPHABET.length;
  for (let i = 0; i < ROOM_CODE_LENGTH; i++) {
    const randomIndex = Math.floor(Math.random() * alphabetLength);
    result += ROOM_CODE_ALPHABET[randomIndex];
  }
  return result;
}

/**
 * Normalizes user input (uppercase, trimmed, strips whitespace).
 */
export function normalizeRoomCode(input: string): string {
  return input.trim().toUpperCase().replace(/[\s-]/g, "");
}

/**
 * Validates whether a room code matches format requirements.
 */
export function isValidRoomCode(input: string): boolean {
  const code = normalizeRoomCode(input);
  if (code.length !== ROOM_CODE_LENGTH) {
    return false;
  }
  for (let i = 0; i < code.length; i++) {
    if (!ROOM_CODE_ALPHABET.includes(code[i])) {
      return false;
    }
  }
  return true;
}
