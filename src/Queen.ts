import { Piece } from "./Piece";

export class Queen extends Piece {
    constructor(color: "w" | "b") {
        super(color);
        this.iconPath += color + "Q.svg";
    }
}
