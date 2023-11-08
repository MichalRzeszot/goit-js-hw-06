const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const counterValueElement = document.getElementById("value");

let counterValue = 0;

const updateCounterValue = () => {
  counterValueElement.textContent = counterValue;
};

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterValue();
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateCounterValue();
});

updateCounterValue();
