import { BoardRenderer } from "./Board";
import { Tile } from "./Tile";

export class Graphic implements BoardRenderer {
    public renderBoard(boardSetup: Tile[]) {
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

    private dragEnter(event: DragEvent) {
        event.preventDefault();
    }

    private dragOver(event: DragEvent) {
        event.preventDefault();
    }

    private dropTile(event: DragEvent) {
        event.preventDefault();

        const draggedId = event.dataTransfer!.getData("text/plain");
        const draggedElement = document.getElementById(draggedId)!;
        const target = event.target as HTMLDivElement;
        target.appendChild(draggedElement);
    }
    private dragStart(event: DragEvent) {
        const target = event.target as HTMLImageElement;
        event.dataTransfer!.setData("Text", target.id); //check datatransfer for null?
    }

    private createTile(color: string, coordinates: string) {
        const tile = document.createElement("div")!;
        tile.className = "tile-" + color;
        tile.id = coordinates;
        const tileImg = document.createElement("img");
        tileImg.draggable = true;
        tileImg.id = color + coordinates;
        tile.addEventListener("dragenter", (ev: DragEvent) =>
            this.dragEnter(ev)
        );
        tile.addEventListener("dragover", (ev: DragEvent) => this.dragOver(ev));
        tile.addEventListener("drop", (ev: DragEvent) => this.dropTile(ev));
        tileImg.addEventListener("dragstart", (ev: DragEvent) =>
            this.dragStart(ev)
        );
        tile.append(tileImg);
        return tile;
    }

    public updateBoard(board: Tile[]) {
        for (let i = 0; i < board.length; i++) {
            const currentPiece = board[i].value;
            if (!currentPiece) {
                continue;
            }
            const currentTile = document.querySelector(
                "#" + board[i].getPosition()
            )!;
            currentTile.querySelector("img")!.src = currentPiece.getIconPath();
        }
    }
}
