"use strict";
const togglePassword = document.getElementById("eye");
const inputPassword = document.getElementById("input-password");
togglePassword.addEventListener("click", (e) => {
    e.preventDefault();
    inputPassword.type = inputPassword.type == "text" ? "password" : "text";
    togglePassword.src = inputPassword.type == "text" ? "./images/showPassword.ico" : "./images/hidden.ico";
});
