const button = document.querySelector("#btnSize");
const container = document.querySelector(".content");

container.style.display = "flex";
container.style.flexDirection = "column";
container.style.gap = "10px";
container.style.alignItems = "center";
// button.style.flex = 0;
button.style.width = "100px";

const gameContainer = document.querySelector("#gameContainer");

gameContainer.style.display = "flex";
gameContainer.style.flexDirection = "column";
gameContainer.style.alignItems = "center";

let numberRows = 4;
let numberColumns = numberRows;
let maxWidth = 600; //pixels
let maxHeight = 600; //pixels

for (let i = 0; i < numberRows; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    row.style.display = "flex";
    gameContainer.appendChild(row);
    for (let j = 0; j < numberColumns; j++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.minHeight = maxHeight/numberColumns + "px";
        square.style.minWidth = maxWidth/numberColumns + "px";
        square.style.border = "solid black 2px"
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "pink";
        })
        row.appendChild(square);
    }
}