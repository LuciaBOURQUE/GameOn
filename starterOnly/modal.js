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
// + Créer une constante pour ouverture "validation réussie"

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form > ouverture de la modal
function launchModal() {
  modalbg.style.display = "block";
}

// Fonction : ouverture et fermeture de la modal
// Fonction : Données des éléments (formulaire) avec formData
// Fonction : Validation réussie et message de confirmation "Merci pour votre inscription"




// Le champ du prénom a un minimum de 2 caractères et ne doit pas être vide
// "Veuillez entrez 2 caractères ou plus"

function getErrorFirst() {
  return document.getElementById("data-error");
}

// Création fonction du bouton non-envoie si formulaire pas remplit avec les messages d'erreurs
function disableSubmit(disabled) {
  if (disabled) {
    document
    .getElementsByClassName("btn-submit")
    .setAttribute("disabled",true);
  } else {
    document
    .getElementsByClassName("btn-submit")
    .setAttribute("disabled");
  }
}

// - (if/else) Si il n'y a pas 2 caractères alors on affiche l'erreur "data-error"
// - (if else) Sinon on ne met rien
document
.getElementById("first")
.addEventListener("input", function(e) {
  if (/minlength/.test(e.target.value)) {
    getErrorFirst().innerText="Veuillez entrez 2 caractères ou plus";
    disableSubmit(false);
  } else {
    disableSubmit(true);
  }
})