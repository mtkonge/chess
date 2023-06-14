import { Piece } from "./Piece";

export class Pawn extends Piece {
    constructor(position: Coordinate, color: "w" | "b") {
        super(position, color);
        this.iconPath += color + "P.svg";
    }
}
