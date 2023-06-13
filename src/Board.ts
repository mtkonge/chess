export class Board {
    constructor() {
        this.setupBoard();
    }

    setupBoard() {
        const boardElement = document.querySelector<HTMLDivElement>(
            "#inside-chess-board"
        )!;
        const gridChars = "abcdefgh";
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
        this.coordinates();
    }

    coordinates() {
        const chars = "ABCDEFGH";
        const coords = [
            document.querySelector<HTMLDivElement>("#top")!,
            document.querySelector<HTMLDivElement>("#bottom")!,
            document.querySelector<HTMLDivElement>("#left")!,
            document.querySelector<HTMLDivElement>("#right")!,
        ];
        for (let i = 1; i < 9; i++) {
            const coordsContent = [
                document.createElement("h3"),
                document.createElement("h3"),
                document.createElement("h3"),
                document.createElement("h3"),
            ];
            for (let j = 0; j < coordsContent.length; j++) {
                if (j < 2) {
                    coordsContent[j].className = "coord-value-x";
                    coordsContent[j].append(chars[i - 1]);
                } else {
                    coordsContent[j].className = "coord-value-y";
                    coordsContent[j].append(i.toString());
                }
                coords[j].append(coordsContent[j]);
            }
        }
    }

    createTile(color: string, coordinates: string) {
        const tile = document.createElement("div")!;
        tile.className = "tile-" + color;
        tile.id = coordinates;
        return tile;
    }
}
