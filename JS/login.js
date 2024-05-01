const formOpenBtn = document.querySelector("#form-open"),
    home = document.querySelector(".home"),
    formContainer = document.querySelector(".form_container"),
    formCloseBtn = document.querySelector(".form_close"),
    signupBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShowHide = document.querySelector(".pw_hide");

const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const emailLog = document.getElementById("emailLog");
const passwordLog = document.getElementById("passwordLog");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");


formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active")
})
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active")
})

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(emailInput.nodeValue.length <0){
        warnings += `el email es requerido`
        entrar = true
    }
        
    if(!regexEmail.test(emailInput.value)){
        warnings += `el email no es válido`
        entrar = true
    }
    if(passwordInput.value.length < 0){
        warnings += `la contraseña es requerida`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
})