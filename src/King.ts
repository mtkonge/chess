import { Piece } from "./Piece";

export class King extends Piece {
    constructor(position: Coordinate, color: "w" | "b") {
        super(position, color);
        this.iconPath += color + "K.svg";
    }
}
