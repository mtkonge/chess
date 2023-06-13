export class Board {
    constructor() {
        this.setupBoard();
    }

    setupBoard() {
        const boardElement =
            document.querySelector<HTMLDivElement>("#chess-board")!;
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
    }
    createTile(color: string, coordinates: string) {
        const tile = document.createElement("div")!;
        tile.className = "tile-" + color;
        tile.id = coordinates;
        return tile;
    }
}
