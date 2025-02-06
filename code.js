const button = document.querySelector("#btnSize");
const container = document.querySelector(".content");

function getSize() {
    let input = prompt("Enter a number (1-100) for number of squares in a" +
        " row/column:");
    if ((input < 0 )||(input > 100)) {
        alert("Number outside of range")
        return "ERROR";
    } else {
        return input;
    }
}

container.style.display = "flex";
container.style.flexDirection = "column";
container.style.gap = "10px";
container.style.alignItems = "center";
button.style.width = "100px";

button.addEventListener("click", () => {
    gridSize = getSize();
    if (gridSize !== "ERROR") {
        makeGrid(gridSize);
    }
})

const gameContainer = document.querySelector("#gameContainer");

gameContainer.style.display = "flex";
gameContainer.style.flexDirection = "column";
gameContainer.style.alignItems = "center";
gameContainer.style.border = "solid black 1px";

let maxWidth = 700; //pixels
let maxHeight = 700; //pixels

function makeGrid(inputRows) {
    while (gameContainer.hasChildNodes()){
        gameContainer.removeChild(gameContainer.firstChild);
    }    
    for (let i = 0; i < inputRows; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.display = "flex";
        gameContainer.appendChild(row);
        for (let j = 0; j < inputRows; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.minHeight = maxHeight/inputRows + "px";
            square.style.minWidth = maxWidth/inputRows + "px";
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "pink";
            })
            row.appendChild(square);
        }
    }
    document.querySelector("#sizeText").textContent = "Size: " + inputRows +
    " x " + inputRows; 
}
let gridSize = 4; // Initial size
makeGrid(gridSize);