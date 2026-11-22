import { Schema, type } from "@colyseus/schema";

export class ObjectiveState extends Schema {
  @type("number") id: number = 1;
  @type("string") titleSi: string = "";
  @type("string") descriptionSi: string = "";
  @type("boolean") completed: boolean = false;

  constructor(id: number = 1, titleSi: string = "", descriptionSi: string = "", completed: boolean = false) {
    super();
    this.id = id;
    this.titleSi = titleSi;
    this.descriptionSi = descriptionSi;
    this.completed = completed;
  }
}
