const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueData = document.querySelector('#value');
let counterValue = 0;

decrementBtn.addEventListener('click', onDecrementBtnClick);

function onDecrementBtnClick() {
  counterValue -= 1;
valueData.textContent = counterValue;
}

incrementBtn.addEventListener('click', onIncrementBtnClick);

function onIncrementBtnClick() {
  counterValue += 1;
valueData.textContent = counterValue;
}
