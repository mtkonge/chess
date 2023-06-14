import { Piece } from "./Piece";

export class Queen extends Piece {
    constructor(position: Coordinate, color: "w" | "b") {
        super(position, color);
        this.iconPath += color + "Q.svg";
    }
}
