function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const divCreateBoxesEl = document.querySelector("#boxes");

const createBoxes = (amount) => {
  let divsBoxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = 30 + i * 10 + "px";
    box.style.height = 30 + i * 10 + "px";
    box.style.backgroundColor = getRandomHexColor();
    // const boxSize = 30 + i * 10;
    // box.style = `width:${boxSize}px; height:${boxSize}px; background-color:getRandomHexColor()`;
    divsBoxes.push(box);
  }
  divCreateBoxesEl.append(...divsBoxes);
};

const destroyBoxes = () => {
  divCreateBoxesEl.innerHTML = "";
};

btnCreate.addEventListener("click", () => createBoxes(inputEl.value));
btnDestroy.addEventListener("click", destroyBoxes);
