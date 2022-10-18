function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const textColor = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', (e) => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  textColor.textContent = randomColor;
}) 