import { Piece } from "./Piece";

export class Knight extends Piece {
    constructor(position: Coordinate, color: "w" | "b") {
        super(position, color);
        this.iconPath += color + "N.svg";
    }
}
