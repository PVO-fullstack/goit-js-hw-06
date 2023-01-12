const bgColor = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const body = document.body;

changeColorBtn.addEventListener('click', changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
const color = getRandomHexColor();  
  body.style.backgroundColor = color;
  bgColor.textContent = `${color}`;
}


