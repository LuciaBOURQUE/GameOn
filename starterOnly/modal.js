// Version mobile : Menu burger paramètres
// Animation : Par défaut la barre de navigation à une class "topnav"
// Mais dès lors qu'on click "onclick" sur l'icon de la barre de navigation
// La barre de navigation change de class dans laquel on lui rajoute "topnav responsive"
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
// + Créer une constante pour fermeture modal

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form > ouverture de la modal
function launchModal() {
  modalbg.style.display = "block";
}

// Fonction : ouverture et fermeture de la modal
// Fonction : Données des éléments (formulaire)