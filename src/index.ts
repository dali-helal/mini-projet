

const togglePassword = document.getElementById("eye") as HTMLImageElement
const inputPassword = document.getElementById("input-password") as HTMLInputElement

togglePassword.addEventListener("click", (e: Event) => {
    e.preventDefault()
    inputPassword.type = inputPassword.type == "text" ? "password" : "text";
    togglePassword.src = inputPassword.type == "text" ? "./images/showPassword.ico" : "./images/hidden.ico"
})