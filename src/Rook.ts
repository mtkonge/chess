import { Piece } from "./Piece";

export class Rook extends Piece {
    constructor(position: Coordinate, color: "w" | "b") {
        super(position, color);
        this.iconPath += color + "R.svg";
    }
}
