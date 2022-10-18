const input = document.querySelector('#validation-input');
// console.log(input);

input.addEventListener("blur", (e) => {
console.log(e.target.value);
const length = e.target.dataset.length;
if(e.target.value.length > length) {
    e.target.classList.add('invalid');
    e.target.classList.remove('valid');

}
else {
e.target.classList.add('valid');
e.target.classList.remove('invalid');
}
});
