const input = document.querySelector('#name-input');
const text = document.querySelector('#name-output');
// console.log(input.value);

input.addEventListener('input', (event) => {
console.log(event.target.value);
// text.textContent = event.target.value;
if (event.target.value) 
text.textContent = event.target.value;
else text.textContent = "Anonymous";
});





