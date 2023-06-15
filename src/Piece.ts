export class Piece {
    protected color: "w" | "b" | "";
    protected iconPath: string = "";
    constructor(color: "w" | "b" | "") {
        this.color = color;
    }
    public getIconPath() {
        return this.iconPath;
    }
}
