"use strict";
// toggle show password
const togglePassword = document.getElementById("eye");
const inputPassword = document.getElementById("input-password");
togglePassword.addEventListener("click", (e) => {
    e.preventDefault();
    inputPassword.type = inputPassword.type == "text" ? "password" : "text";
    togglePassword.src = inputPassword.type == "text" ? "./images/showPassword.ico" : "./images/hidden.ico";
});
// validate email and password for index.html 
const btnConnecter = document.querySelector('.btn-connecter');
btnConnecter.addEventListener('click', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("input-email");
    const passwordInput = document.getElementById("input-password");
    if (!emailInput.value || !passwordInput.value) {
        alert("Veuillez saisir une adresse e-mail et un mot de passe");
        return false;
    }
    else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            alert("S'il vous plaît, mettez une adresse email valide");
            return false;
        }
        if (passwordInput.value.length < 8) {
            alert("Le mot de passe doit contenir au moins 8 caractères");
            return false;
        }
        window.location.href = "home.html";
    }
});
