

const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const span = document.querySelector('#value');
let counterValue = 0;

decrement.addEventListener('click', (e) => {
    counterValue -=1;
span.textContent = counterValue;
});

increment.addEventListener('click', (e) => {
    counterValue +=1;
span.textContent = counterValue;
    });

