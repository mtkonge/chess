import { Piece } from "./Piece";

export class Rook extends Piece {
    constructor(color: "w" | "b") {
        super(color);
        this.iconPath += color + "R.svg";
    }
}
