import { coordinate } from "./Coordinate";
import { Piece } from "./Piece";
import { Tile } from "./Tile";

export class Board {
    private tiles: Tile[] = [];

    constructor() {
        this.setupTiles();
        this.reset();
    }

    public getTiles() {
        // for testing, delete later
        return this.tiles;
    }

    setupTiles() {
        const chars = "ABCDEFGH";
        for (let y = 1; y < 9; y++) {
            for (const x of chars) {
                this.setupTile(x, y);
            }
        }
        console.log(this.tiles);
    }

    public render(renderer: BoardRenderer) {}

    public reset() {}

    private tileShouldBePiece(y: number) {
        return y > 6 || y < 3;
    }

    private setupTile(x: string, y: number) {
        if (this.tileShouldBePiece(y)) {
            this.tiles.push(this.setupPiece(x, y));
        } else {
            this.tiles.push(new Tile(coordinate(x, y), null));
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

interface BoardRenderer {
    (board: (Piece | null)[]): void;
}
