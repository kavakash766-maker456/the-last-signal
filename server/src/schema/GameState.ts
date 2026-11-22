import { Schema, type, MapSchema, ArraySchema } from "@colyseus/schema";
import { PlayerState } from "./PlayerState.js";
import { EnemyState } from "./EnemyState.js";
import { ObjectiveState } from "./ObjectiveState.js";

export class GameState extends Schema {
  @type("string") roomCode: string = "";
  @type("string") phase: string = "LOBBY"; // LOBBY, BRIEFING, PLAYING, CLIMAX, COMPLETED, FAILED

  @type({ map: PlayerState }) players = new MapSchema<PlayerState>();
  @type(EnemyState) enemy = new EnemyState();
  @type([ObjectiveState]) objectives = new ArraySchema<ObjectiveState>();
  @type("number") currentObjectiveIndex: number = 0;

  // Authoritative puzzle & quest flags
  @type("boolean") hasGateKey: boolean = false;
  @type("boolean") gateOpened: boolean = false;
  @type("boolean") hasClinicFuse: boolean = false;
  @type("number") fusesInserted: number = 0;
  @type("boolean") powerRestored: boolean = false;
  @type("boolean") hasAudioRecorder: boolean = false;
  @type("boolean") symbolPuzzleSolved: boolean = false;
  @type("boolean") radioTransmitted: boolean = false;
  @type("boolean") roofDoorUnlocked: boolean = false;
  @type("number") survivorsEscaped: number = 0;

  constructor(roomCode: string = "") {
    super();
    this.roomCode = roomCode;
    this.initDefaultObjectives();
  }

  initDefaultObjectives() {
    this.objectives.push(
      new ObjectiveState(
        1,
        "ප්‍රධාන ගේට්ටුවේ යතුර සොයන්න",
        "මුර කුටිය (Security Post) අසල ඇති ප්‍රධාන ගේට්ටුවේ යතුර (Gate Key) සොයාගෙන ගේට්ටුව විවෘත කරන්න."
      ),
      new ObjectiveState(
        2,
        "විදුලි ජනකය (Generator) ක්‍රියාත්මක කරන්න",
        "නඩත්තු කාමරයෙන් ෆියුස් (Clinic Fuse) සොයා විදුලි ජනකය පණගන්වා සායනයට විදුලිය ලබා දෙන්න."
      ),
      new ObjectiveState(
        3,
        "සංකේත අගුල (Symbol Lock) විසඳන්න",
        "වෛද්‍ය කාමරයේ ඇති සංකේත අගුල (කේතය: 739) විසඳා ශ්‍රව්‍ය පටිගත කිරීම (Audio Recorder) ලබාගන්න."
      ),
      new ObjectiveState(
        4,
        "ගුවන්විදුලි සම්ප්‍රේෂණය (Radio SOS)",
        "වහලය (Roof) මත ඇති සම්ප්‍රේෂකය වෙත ගොස් බේරාගැනීමේ සංඥාව (The Last Signal) විකාශනය කරන්න."
      ),
      new ObjectiveState(
        5,
        "බේරාගැනීමේ හෙලිකොප්ටරය වෙත පලා යන්න",
        "රාක්ෂයාගේ අවසාන ප්‍රහාරයෙන් බේරී පලායෑමේ කලාපය (Extraction Zone) වෙත ළඟා වන්න."
      )
    );
  }
}
