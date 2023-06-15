import { Tile } from "./Tile";

export class BoardGraphic {
    constructor(boardSetup: Tile[]) {
        this.setupBoardGraphics(boardSetup);
    }

    private setupBoardGraphics(boardSetup: Tile[]) {
        const boardElement = document.querySelector<HTMLDivElement>(
            "#inside-chess-board"
        )!;
        const gridChars = "ABCDEFGH";
        for (let i = 8; i > 0; i--) {
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2) {
                    boardElement.append(
                        this.createTile("black", gridChars[j] + i.toString())
                    );
                } else {
                    boardElement.append(
                        this.createTile("white", gridChars[j] + i.toString())
                    );
                }
            }
        }
        this.coordinatesGraphics();
        this.updateBoard(boardSetup);
    }

    private coordinatesGraphics() {
        const chars = "ABCDEFGH";
        const coords = [
            document.querySelector<HTMLDivElement>("#top")!,
            document.querySelector<HTMLDivElement>("#bottom")!,
            document.querySelector<HTMLDivElement>("#left")!,
            document.querySelector<HTMLDivElement>("#right")!,
        ];
        for (let i = 8; i > 0; i--) {
            const coordsContent = [
                document.createElement("h3"),
                document.createElement("h3"),
                document.createElement("h3"),
                document.createElement("h3"),
            ];
            for (let j = 0; j < coordsContent.length; j++) {
                if (j < 2) {
                    coordsContent[j].className = "coord-value-x";
                    coordsContent[j].append(chars[chars.length - i]);
                } else {
                    coordsContent[j].className = "coord-value-y";
                    coordsContent[j].append(i.toString());
                }
                coords[j].append(coordsContent[j]);
            }
        }
    }

    private createTile(color: string, coordinates: string) {
        const tile = document.createElement("div")!;
        tile.className = "tile-" + color;
        tile.id = coordinates;
        const tileImg = document.createElement("img");
        tile.append(tileImg);
        return tile;
    }

    public updateBoard(updatedBoard: Tile[]) {
        let currentTile: HTMLDivElement;
        console.log(updatedBoard);
        for (let i = 0; i < updatedBoard.length; i++) {
            currentTile = document.querySelector(
                "#" + updatedBoard[i].getPosition()
            )!;
            console.log(i);

            console.log(updatedBoard[i].getPosition());
            currentTile.querySelector("img")!.src = updatedBoard[i]
                .getPiece()
                .getIconPath();
        }
    }
}
