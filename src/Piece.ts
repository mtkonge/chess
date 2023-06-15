export class Piece {
    private iconPath: string = "";
    constructor(
        private color: "white" | "black",
        private variant:
            | "Pawn"
            | "Rook"
            | "Knight"
            | "Bishop"
            | "Queen"
            | "King"
    ) {
        this.iconPath = "/" + color + variant + ".svg";
    }
    public getIconPath() {
        return this.iconPath;
    }
}
