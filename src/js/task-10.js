function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector('#controls > input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');



createBtn.addEventListener('click', createBoxes);

function createBoxes() {
  for (let i = 0; i < controls.value; i += 1) {
  const divEl = document.createElement('div');
    divEl.style.width = 30 + i * 10 + 'px';
    divEl.style.height = 30 + i * 10 + 'px';
    divEl.style.backgroundColor = getRandomHexColor();
    boxes.append(divEl);
  }
}

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = '';
  controls.value = '';
}
