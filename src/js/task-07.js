const inputRef = document.querySelector('#font-size-control')
console.log(inputRef)
const textRef = document.querySelector('#text')
console.log(textRef)

inputRef.addEventListener('input', (e) => { 
    console.log(e.target.value);
    textRef.style.fontSize = e.target.value +'px';
});

