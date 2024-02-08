

// toggle show password
const togglePassword = document.getElementById("eye") as HTMLImageElement
const inputPassword = document.getElementById("input-password") as HTMLInputElement

togglePassword.addEventListener("click", (e: Event) => {
    e.preventDefault()
    inputPassword.type = inputPassword.type == "text" ? "password" : "text";
    togglePassword.src = inputPassword.type == "text" ? "./images/showPassword.ico" : "./images/hidden.ico"
})



// validate email and password for index.html 
const btnConnecter = document.querySelector('.btn-connecter') as HTMLButtonElement
btnConnecter.addEventListener('click', (e: Event) => {
    e.preventDefault()

    const emailInput: HTMLInputElement | null = document.getElementById("input-email") as HTMLInputElement;
    const passwordInput: HTMLInputElement | null = document.getElementById("input-password") as HTMLInputElement;

    if (!emailInput.value || !passwordInput.value) {
        alert("Veuillez saisir une adresse e-mail et un mot de passe");
        return false;
    } else {
        const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
})

