let gamePad = document.querySelector(".game_pad");

const colorBtns = document.querySelectorAll(".game_color");
const eraser = document.querySelector(".eraser");
const clear = document.querySelector(".clear");
const grid = document.querySelector(".game_grid-btn");
const modal = document.querySelector(".game_modal");
const alertBox = document.querySelector(".alert");
const alertBtn = document.querySelector(".alert_btn");
const input = document.querySelector("input");
const modal_btn = document.querySelector(".modal_btn");
const overlay = document.querySelector(".overlay");
let color = "";
let gridCells = 0;
let click = false;

//Event Listeners

grid.addEventListener("click", () => {
  modal.classList.add("modal_active");
  overlay.classList.add("overlay_active");
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    gridCells = event.target.value * 1;
    validate(gridCells);
    populateBoard(gridCells);
  }
});

modal_btn.addEventListener("click", () => {
  let inputNumber = document.getElementById("number").value * 1;
  validate(inputNumber);
});

eraser.addEventListener("click", () => {
  color = "";
});

alertBtn.addEventListener("click", () => {
  alertBox.classList.remove("alert_active");
});

gamePad.addEventListener("click", () => {
  click = !click;
});
function validate(gridCells) {
  if (gridCells < 16 || gridCells > 100) {
    alertBox.classList.add("alert_active");
  } else {
    modal.classList.remove("modal_active");
    overlay.classList.remove("overlay_active");
    document.getElementById("number").value = "";
  }
}

function populateBoard(gridCells) {
  gamePad.style.gridTemplateColumns = `repeat(${gridCells}, 1fr)`;
  gamePad.style.gridTemplateRows = `repeat(${gridCells}, 1fr)`;

  let boardSquares = gridCells * gridCells;
  for (let i = 0; i < boardSquares; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "white";
    clear.addEventListener("click", () => {
      square.style.backgroundColor = "white";
    });
    square.addEventListener("mousemove", setColor);
    gamePad.insertAdjacentElement("beforeend", square);
  }
}

function setColor() {
  if (click === true) {
    colorBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        color = e.target.id;
      });
    });

    if (color === "rainbow") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = `${color}`;
    }
  }
}
