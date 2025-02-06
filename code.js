

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

// div11.setAttribute("id","div11");

row1.classList.add("row1");
row2.classList.add("row2");
row3.classList.add("row3");
row4.classList.add("row4");

gameContainer.appendChild(row1);
gameContainer.appendChild(row2);
gameContainer.appendChild(row3);
gameContainer.appendChild(row4);

let descendents = gameContainer.getElementsByTagName("*");
for (let i = 0; i < descendents.length; i++) {
    descendents[i].setAttribute("display", "flex");
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