import { Piece } from "./Piece";

export class King extends Piece {
    constructor(color: "w" | "b") {
        super(color);
        this.iconPath += color + "K.svg";
    }
}
