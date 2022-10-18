const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener("submit", formSubmit) 

function formSubmit(e) {
    e.preventDefault();


    const formElements = e.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (!email || !password) {
        alert('запоните поля');
        return
    };

    const formDate = {
        email, password
    };

    console.log(formDate);
  
    form.reset();
    

};

