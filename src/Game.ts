import { BoardGraphic } from "./BoardGraphic";
import { coordinate } from "./Coordinate";
import { Piece } from "./Piece";
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
            this.boardLogic.push(new Tile(coordinate(x, y), null));
        }
    }
    private setupPiece(x: string, y: number) {
        if (y === 2) {
            return new Tile(coordinate(x, y), new Piece("white", "Pawn"));
        } else if (y === 7) {
            return new Tile(coordinate(x, y), new Piece("black", "Pawn"));
        } else if (x == "A" || x == "H") {
            if (y == 8) {
                return new Tile(coordinate(x, y), new Piece("black", "Rook"));
            } else {
                return new Tile(coordinate(x, y), new Piece("white", "Rook"));
            }
        } else if (x == "B" || x == "G") {
            if (y == 8) {
                return new Tile(coordinate(x, y), new Piece("black", "Knight"));
            } else {
                return new Tile(coordinate(x, y), new Piece("white", "Knight"));
            }
        } else if (x == "C" || x == "F") {
            if (y == 8) {
                return new Tile(coordinate(x, y), new Piece("black", "Bishop"));
            } else {
                return new Tile(coordinate(x, y), new Piece("white", "Bishop"));
            }
        } else if (x == "D") {
            if (y == 8) {
                return new Tile(coordinate(x, y), new Piece("black", "Queen"));
            } else {
                return new Tile(coordinate(x, y), new Piece("white", "Queen"));
            }
        } else if (x == "E") {
            if (y == 8) {
                return new Tile(coordinate(x, y), new Piece("black", "King"));
            } else {
                return new Tile(coordinate(x, y), new Piece("white", "King"));
            }
        }
        return new Tile(coordinate(x, y), null);
    }
}
