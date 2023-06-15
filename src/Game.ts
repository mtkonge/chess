import { Board } from "./Board";
import { BoardGraphic } from "./BoardGraphic";

export class Game {
    private boardLogic = new Board();
    private boardGraphic: BoardGraphic;
    constructor() {
        this.boardGraphic = new BoardGraphic(this.boardLogic.getTiles());
    }
}
