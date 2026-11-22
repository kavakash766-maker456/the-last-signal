export const MAX_PLAYERS_PER_ROOM = 4;
export const ROOM_CODE_LENGTH = 5;
// Character set avoids easily confused characters: 0/O, 1/I/L
export const ROOM_CODE_ALPHABET = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";

export type GamePhase =
  | "LOBBY"
  | "BRIEFING"
  | "PLAYING"
  | "CLIMAX"
  | "COMPLETED"
  | "FAILED";

export type EnemyAIState =
  | "PATROL"
  | "INVESTIGATE"
  | "SEARCH"
  | "CHASE"
  | "ATTACK"
  | "COOLDOWN";

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface PlayerData {
  id: string;
  name: string;
  position: Vec3;
  rotationY: number;
  pitch: number;
  isSprinting: boolean;
  isCrouching: boolean;
  flashlightOn: boolean;
  flashlightBattery: number; // 0 - 100
  isHost: boolean;
  isReady: boolean;
  connected: boolean;
}

export interface EnemyData {
  state: EnemyAIState;
  position: Vec3;
  rotationY: number;
  targetPlayerId: string | null;
  alertLevel: number; // 0 - 100
}

export interface ChapterObjective {
  id: number;
  titleSi: string;
  descriptionSi: string;
  completed: boolean;
}

export interface GameRoomState {
  roomCode: string;
  phase: GamePhase;
  players: Record<string, PlayerData>;
  enemy: EnemyData;
  objectives: ChapterObjective[];
  currentObjectiveIndex: number;
  hasGateKey: boolean;
  gateOpened: boolean;
  hasClinicFuse: boolean;
  powerRestored: boolean;
  hasAudioRecorder: boolean;
  symbolPuzzleSolved: boolean;
  radioTransmitted: boolean;
}

export interface ClientInputPayload {
  x: number;
  z: number;
  rotationY: number;
  pitch: number;
  isSprinting: boolean;
  isCrouching: boolean;
  flashlightOn: boolean;
}

export interface PlayerInteractPayload {
  targetId: string;
  action: "PICKUP_KEY" | "PICKUP_FUSE" | "ACTIVATE_GENERATOR" | "PICKUP_RECORDER" | "SOLVE_PUZZLE" | "TRANSMIT_RADIO";
  puzzleCode?: string;
}
