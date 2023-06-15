import { Piece } from "./Piece";

export class Tile {
    constructor(private position: string, public value: Piece | null) {}

    getPosition() {
        return this.position;
    }
}
