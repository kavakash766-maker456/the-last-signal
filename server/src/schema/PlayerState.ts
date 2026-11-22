import { Schema, type } from "@colyseus/schema";

export class PlayerState extends Schema {
  @type("string") id: string = "";
  @type("string") sessionId: string = "";
  @type("string") name: string = "";
  @type("number") x: number = 0;
  @type("number") y: number = 0;
  @type("number") z: number = 0;
  @type("number") rotationY: number = 0;
  @type("number") pitch: number = 0;
  @type("boolean") isSprinting: boolean = false;
  @type("boolean") isCrouching: boolean = false;
  @type("boolean") flashlightOn: boolean = false;
  @type("number") flashlightBattery: number = 100;
  @type("number") health: number = 100;
  @type("boolean") isAlive: boolean = true;
  @type("boolean") isHost: boolean = false;
  @type("boolean") isReady: boolean = false;
  @type("boolean") connected: boolean = true;

  constructor(sessionId: string = "", name: string = "Survivor", isHost: boolean = false) {
    super();
    this.id = sessionId;
    this.sessionId = sessionId;
    this.name = name;
    this.isHost = isHost;
    this.isReady = isHost; // Host is auto-ready
  }
}
