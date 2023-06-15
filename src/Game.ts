import { Board } from "./Board";
import { Graphic } from "./BoardGraphic";

export class Game {
    private playerTurn: "white" | "black" = "white";
    private boardLogic = new Board();
    private boardGraphic = new Graphic();
    constructor() {
        this.boardLogic.render(this.boardGraphic);
    }

    turn() {}
}
