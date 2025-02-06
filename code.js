

const gameContainer = document.querySelector("#game-container");

const div11 = document.createElement("div");
const div12 = document.createElement("div");
const div13 = document.createElement("div");
const div14 = document.createElement("div");
const div21 = document.createElement("div");
const div22 = document.createElement("div");
const div23 = document.createElement("div");
const div24 = document.createElement("div");
const div31 = document.createElement("div");
const div32 = document.createElement("div");
const div33 = document.createElement("div");
const div34 = document.createElement("div");
const div41 = document.createElement("div");
const div42 = document.createElement("div");
const div43 = document.createElement("div");
const div44 = document.createElement("div");

const row1 = document.createElement("div");
const row2 = document.createElement("div");
const row3 = document.createElement("div");
const row4 = document.createElement("div");

div11.setAttribute("class","square");
div12.setAttribute("class","square");
div13.setAttribute("class","square");
div14.setAttribute("class","square");
div21.setAttribute("class","square");
div22.setAttribute("class","square");
div23.setAttribute("class","square");
div24.setAttribute("class","square");
div31.setAttribute("class","square");
div32.setAttribute("class","square");
div33.setAttribute("class","square");
div34.setAttribute("class","square");
div41.setAttribute("class","square");
div42.setAttribute("class","square");
div43.setAttribute("class","square");
div44.setAttribute("class","square");

row1.classList.add("row");
row2.classList.add("row");
row3.classList.add("row");
row4.classList.add("row");

gameContainer.appendChild(row1);
gameContainer.appendChild(row2);
gameContainer.appendChild(row3);
gameContainer.appendChild(row4);

gameContainer.style.display = "flex";
gameContainer.style.flexDirection = "column";
gameContainer.style.alignItems = "center";

let descendents = gameContainer.getElementsByTagName("*");
for (let i = 0; i < descendents.length; i++) {
    descendents[i].style.display = "flex"; 
}

row1.appendChild(div11);
row1.appendChild(div12);
row1.appendChild(div13);
row1.appendChild(div14);

row2.appendChild(div21);
row2.appendChild(div22);
row2.appendChild(div23);
row2.appendChild(div24);

row3.appendChild(div31);
row3.appendChild(div32);
row3.appendChild(div33);
row3.appendChild(div34);

row4.appendChild(div41);
row4.appendChild(div42);
row4.appendChild(div43);
row4.appendChild(div44);

const squares = document.querySelectorAll(".square");
squares.forEach((div) => {
    div.style.minHeight = "100px";
    div.style.minWidth = "100px";
    div.style.border = "solid black 2px"
    // div.textContent = "square";
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "pink";
    })
});