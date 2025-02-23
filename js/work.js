const amountElement = document.querySelector("input");
const buttonRender = document.querySelector("[data-action='render']");
const buttonDestroy = document.querySelector("[data-action='destroy']");
const containerElement = document.querySelector("#boxes");

buttonRender.addEventListener("click", (event) => {
  const amount = amountElement.value;
  createBoxes(amount);
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const divElement = document.createElement("div");
    divElement.style.width = "50px";
    divElement.style.height = "50px";
    divElement.style.background = `rgb(${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random() * 255})`;
    containerElement.append(divElement);
  }
}

console.log(containerElement);

const firstElement = document.querySelectorAll("img");
let total = 0;
firstElement[total].style.display = "block";
window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight") {
    firstElement[total].style.display = "none";
    total += 1;
    if (total >= firstElement.length) {
      total = 0;
    }
    firstElement[total].style.display = "block";
  }
});
console.log(total);
