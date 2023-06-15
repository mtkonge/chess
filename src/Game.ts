import { Bishop } from "./Bishop";
import { BoardGraphic } from "./Board";
import { coordinate } from "./Coordinate";
import { King } from "./King";
import { Knight } from "./Knight";
import { NoPiece } from "./NoPiece";
import { Pawn } from "./Pawn";
import { Queen } from "./Queen";
import { Rook } from "./Rook";
import { Tile } from "./Tile";

export class Game {
    private boardLogic: Tile[] = [];
    private boardGraphic: BoardGraphic;
    constructor() {
        this.setupBoard();
        this.boardGraphic = new BoardGraphic(this.boardLogic);
    }

    private setupBoard() {
        const chars = "ABCDEFGH";
        for (let y = 1; y < 9; y++) {
            for (const x of chars) {
                this.setupTile(x, y);
            }
        }
    }

    private tileShouldBePiece(y: number) {
        return y > 6 || y < 3;
    }

    private setupTile(x: string, y: number) {
        if (this.tileShouldBePiece(y)) {
            this.boardLogic.push(this.setupPiece(x, y));
        } else {
            this.boardLogic.push(new Tile(coordinate(x, y), new NoPiece()));
        }
    }
    private setupPiece(x: string, y: number) {
        if (y === 2) {
            return new Tile(coordinate(x, y), new Pawn("w"));
        } else if (y === 7) {
            return new Tile(coordinate(x, y), new Pawn("b"));
        } else if (x == "A" || x == "H") {
            if (y == 8) {
                return new Tile(coordinate(x, y), new Rook("b"));
            } else {
                return new Tile(coordinate(x, y), new Rook("w"));
            }
        } else if (x == "B" || x == "G") {
            if (y == 8) {
                return new Tile(coordinate(x, y), new Knight("b"));
            } else {
                return new Tile(coordinate(x, y), new Knight("w"));
            }
        } else if (x == "C" || x == "F") {
            if (y == 8) {
                return new Tile(coordinate(x, y), new Bishop("b"));
            } else {
                return new Tile(coordinate(x, y), new Bishop("w"));
            }
        } else if (x == "D") {
            if (y == 8) {
                return new Tile(coordinate(x, y), new Queen("b"));
            } else {
                return new Tile(coordinate(x, y), new Queen("w"));
            }
        } else if (x == "E") {
            if (y == 8) {
                return new Tile(coordinate(x, y), new King("b"));
            } else {
                return new Tile(coordinate(x, y), new King("w"));
            }
        }
        return new Tile(coordinate(x, y), new NoPiece());
    }
}
