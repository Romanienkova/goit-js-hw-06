function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const bgColorSpan = document.querySelector(".color");
const bgBody = document.body;

function getChangeColor() {
	bgBody.style.backgroundColor = getRandomHexColor();
	bgColorSpan.textContent = getRandomHexColor();
}

changeColorBtn.addEventListener("click", getChangeColor);