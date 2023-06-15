import { Piece } from "./Piece";

export class Knight extends Piece {
    constructor(color: "w" | "b") {
        super(color);
        this.iconPath += color + "N.svg";
    }
}
