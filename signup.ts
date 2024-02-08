// validate  for Nom , prenom mot de passe  for signup.html 
const btnSignup = document.querySelector('.engistrer-btn') as HTMLButtonElement;
btnSignup.addEventListener('click', (e: Event) => {
  e.preventDefault()
  const nom: HTMLInputElement | null = document.getElementById("nom") as HTMLInputElement;
  const prenom: HTMLInputElement | null = document.getElementById("prenom") as HTMLInputElement;
  const password: HTMLInputElement | null = document.getElementById("input-password") as HTMLInputElement;
  const validation: HTMLElement | null = document.getElementById("validation") as HTMLElement;


  if (!nom.value || !prenom.value || !password.value) {
    alert("Veuillez saisir dans la liste votre nom, votre prénom et votre mot de passe");
    return false;
  }

  if (password.value.length < 8) {
    0
    validation.textContent = "Le mot de passe doit contenir au moins 8 caractères"
    return false;
  }
  window.location.href = "index.html";
})


function toggleMobileNav(): void {
  const mobileNav = document.querySelector(".mobile-nav") as HTMLElement;
  const bars = document.querySelector(".bars") as HTMLElement;
  const blurScreen = document.querySelector(".blur-screen") as HTMLElement;

  mobileNav.classList.toggle("open");
  bars.classList.toggle("clicked");
  blurScreen.classList.toggle("change");
}