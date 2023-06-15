import { Piece } from "./Piece";

export class Pawn extends Piece {
    constructor(color: "w" | "b") {
        super(color);
        this.iconPath += color + "P.svg";
    }
}
