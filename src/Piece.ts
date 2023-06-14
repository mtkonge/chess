export class Piece {
    protected position: Coordinate;
    protected color: "w" | "b";
    protected iconPath: string = "./public/";
    constructor(position: Coordinate, color: "w" | "b") {
        this.color = color;
        this.position = position;
    }
}
