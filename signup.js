"use strict";
// validate  for Nom , prenom mot de passe  for signup.html 
const btnSignup = document.querySelector('.engistrer-btn');
btnSignup.addEventListener('click', (e) => {
    e.preventDefault();
    const nom = document.getElementById("nom");
    const prenom = document.getElementById("prenom");
    const password = document.getElementById("input-password");
    const validation = document.getElementById("validation");
    if (!nom.value || !prenom.value || !password.value) {
        alert("Veuillez saisir dans la liste votre nom, votre prénom et votre mot de passe");
        return false;
    }
    if (password.value.length < 8) {
        0;
        validation.textContent = "Le mot de passe doit contenir au moins 8 caractères";
        return false;
    }
    window.location.href = "index.html";
});
function toggleMobileNav() {
    const mobileNav = document.querySelector(".mobile-nav");
    const bars = document.querySelector(".bars");
    const blurScreen = document.querySelector(".blur-screen");
    mobileNav.classList.toggle("open");
    bars.classList.toggle("clicked");
    blurScreen.classList.toggle("change");
}
