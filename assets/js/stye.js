// selecting login up button
const login_btn = document.querySelector(".login");

const form_element = document.querySelector(".form-container");

const sign_btn = document.querySelector(".sign-Up");

const sign_in_form_element = document.querySelector('.form-form');

// as soon as user clicks the signIn button
login_btn.addEventListener('click',()=>{
    form_element.style.display = "inline";
})

// as soon as user clicks the login button
sign_btn.addEventListener('click',()=>{
    sign_in_form_element.style.display = "inline";
})
