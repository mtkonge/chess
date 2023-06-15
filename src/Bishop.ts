import { Piece } from "./Piece";

export class Bishop extends Piece {
    constructor(color: "w" | "b") {
        super(color);
        this.iconPath += color + "B.svg";
    }
}
