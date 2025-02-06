const gameContainer = document.querySelector("#game-container");

gameContainer.style.display = "flex";
gameContainer.style.flexDirection = "column";
gameContainer.style.alignItems = "center";

let numberRows = 4;
let numberColumns = numberRows;

for (let i = 0; i < numberRows; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    row.style.display = "flex";
    gameContainer.appendChild(row);
    for (let j = 0; j < numberColumns; j++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.minHeight = "100px";
        square.style.minWidth = "100px";
        square.style.border = "solid black 2px"
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "pink";
        })
        row.appendChild(square);
    }
}