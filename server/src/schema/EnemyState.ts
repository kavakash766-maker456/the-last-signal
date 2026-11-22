import { Schema, type } from "@colyseus/schema";

export type EnemyAIStateType =
  | "PATROL"
  | "INVESTIGATE"
  | "SEARCH"
  | "CHASE"
  | "ATTACK"
  | "COOLDOWN";

export class EnemyState extends Schema {
  @type("string") state: string = "PATROL";
  @type("number") x: number = 0;
  @type("number") y: number = 0;
  @type("number") z: number = 0;
  @type("number") rotationY: number = 0;
  @type("string") targetPlayerId: string = "";
  @type("number") alertLevel: number = 0; // 0 - 100
  @type("number") speed: number = 2.2;
  @type("number") attackCooldown: number = 0;

  // Transient investigation target coordinates
  investigateX: number = 0;
  investigateZ: number = 0;
  searchTimer: number = 0;
  chaseMemoryTimer: number = 0;
  stateTimer: number = 0;
}
