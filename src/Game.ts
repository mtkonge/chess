import { BoardGraphic } from "./Board";
import { Pawn } from "./Pawn";
import { Tile } from "./Tile";

class Game {
    private boardLogic: Tile[] = [];
    private boardGraphic: BoardGraphic;
    constructor() {
        this.boardGraphic = new BoardGraphic();
        this.setupBoard();
    }

    private setupBoard() {
        const chars = "ABCDEFGH";
        for (let y = 1; y < 9; y++) {
            for (const x of chars) {
                if (this.tileShouldBePiece(y)) {
                    this.boardLogic.push(
                        new Tile(
                            new Coordinate(x, y.toString()),
                            new Pawn(new Coordinate(x, y.toString()), "w")
                        )
                    );
                }
                this.boardLogic.push(
                    new Tile(new Coordinate(x, y.toString()), null)
                );
            }
        }
    }

    private tileShouldBePiece(y: number) {
        return y > 6 || y < 3;
    }
}
