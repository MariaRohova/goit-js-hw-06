function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btndestroy = document.querySelector('button[data-destroy]');

function createBoxes(amount) {
  let divElem = '';

  let size = 30;
  const step = 10;

  for (let i = 0; i < amount; i += 1) {
    divElem += `
    <div class="elem" style="background-color:${getRandomHexColor()}; width:${size}px; height:${size}px">   </div>
    `;
    size += step;
  };

  return divElem;

};
let value;
    
input.addEventListener('input', (e) => {

  value = e.target.value;
  // console.log(value);

});

btnCreate.addEventListener('click', (e) => {
  if (document.querySelector(".elem")) {
  boxes.innerHTML = '';
  };
    boxes.insertAdjacentHTML('beforeend', createBoxes(value));
  input.value = "";
});

btndestroy.addEventListener('click', (e) => {
  boxes.innerHTML = "";
 
});
