import { Piece } from "./Piece";

export class Tile {
    constructor(private position: string, private piece: Piece) {}

    public getPosition() {
        return this.position;
    }

    public setPosition(position: string) {
        this.position = position;
    }

    public getPiece() {
        return this.piece;
    }

    public setPiece(piece: Piece) {
        this.piece = piece;
    }
}
