function getSize() {
    let input = prompt("Enter a number (1-100) for number of squares in a" +
        " row/column:");
    if ((input < 1 )||(input > 100)) {
        alert("Number outside of range, defaulting to 5.")
        input = 5;
        return input;
    } else {
        return input;
    }
}

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
                if (square.style.backgroundColor === ""){
                    square.style.backgroundColor = "rgb(" + getRand255() + "," +
                getRand255() + "," + getRand255() + ")";
                square.style.opacity = "0.1";
                } else {
                    let currentOpacity = 0;
                    currentOpacity = parseFloat(square.style.opacity);
                    if (currentOpacity != 1.0) {
                        square.style.opacity = currentOpacity + 0.1;
                    }
                }
            })
            row.appendChild(square);
        }
    }
    document.querySelector("#sizeText").textContent = "Size: " + inputRows +
    " x " + inputRows; 
}

function getRand255() {
    let randColor = 255 * Math.random();
    return randColor;
}

let maxWidth = 700; //pixels
let maxHeight = 700; //pixels

const button = document.querySelector("#btnSize");
const container = document.querySelector(".content");

container.style.display = "flex";
container.style.flexDirection = "column";
container.style.gap = "10px";
container.style.alignItems = "center";

document.querySelector(".instructions").style.width = maxWidth + "px";

button.style.width = "100px";
button.addEventListener("click", () => {
    gridSize = getSize();
    makeGrid(gridSize);
})

const gameContainer = document.querySelector("#gameContainer");

gameContainer.style.display = "flex";
gameContainer.style.flexDirection = "column";
gameContainer.style.alignItems = "center";
gameContainer.style.border = "solid black 1px";

let gridSize = 5; // Initial size

makeGrid(gridSize);