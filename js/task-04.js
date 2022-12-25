let counterValue = 0;
const totalValue = document.querySelector("#value");

document
  .querySelector('[data-action="decrement"]')
  .addEventListener("click", () => {
    counterValue -= 1;
    totalValue.textContent = counterValue;
  });

document
  .querySelector('[data-action="increment"]')
  .addEventListener("click", () => {
    counterValue += 1;
    totalValue.textContent = counterValue;
  });