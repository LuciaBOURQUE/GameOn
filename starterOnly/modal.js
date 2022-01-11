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


/*
// Création fonction du bouton Valider : Bien prendre en compte tout les éléments nécessaire
// - SI le formulaire n'a pas d'erreur, le bouton peut être activé
// - SINON on affiche les messages d'erreurs dans les cases dédiés
function disableSubmit(disabled) {
  if (disabled) {
    document
    .querySelector("btn-submit")
    .setAttribute("disabled",true);
  } else {
    document
    .querySelector("btn-submit")
    .setAttribute("disabled");
  }
}*/

// 1-2) Champ prénom : Bien prendre ne compte tout les éléments nécessaire
// Le champ du prénom a un minimum de 2 caractères et ne doit pas être vide
// - (if/else) SI la valeur est inférieur à 2 caractères (minlength) 
      // ALORS on affiche l'erreur "Veuillez entrez 2 caractères ou plus (data-error-visible)"
// - (if else) SINON on ne met rien ("return" de type break)

// IDEM POUR "NOM" !!!
let error = document.querySelector(".error");
document
.getElementById("first")
.addEventListener("input", function(e) {
  if (/minlength/.test(e.target.value)) {
    error.innerHTML="Veuillez entrez 2 caractères ou plus";
  }
}, false);

// 3) Champ adresse électronique :
// Directement dans le HTML !
let email = document.getElementById("email");

email.addEventListener("input", function (e) {
  if (email.validity.valid) {
    error.innerHTML="";
    error.className="error"
  }
}, false);


// 4) Champ date de naissance :
// - SI aucune date n'est mise
    // ALORS on affiche l'erreur "Vous devez entrer votre date de naissance"
// SINON on ne met rien ("return" de type break)

// 5) Champ nombre tournoi :
// SI aucune valeur numérique n'est sélectionné (0 étant une valeur)
    // ALORS on affiche l'erreur "Veuillez saisir un nombre, si 0 mettez 0"
// SINON on ne met rien ("return" de type break)
function numberQuantity() {
  let quantity = document.getElementById("quantity").value;
  let text;
  if (isNaN(quantity) || quantity<1 || quantity>99) {
    text = "Veuillez entrer un nombre" // sinon mettre "return false;"
  } else {
    text = "OK !"
  }
  document.getElementById("error-quantity").innerHTML = text;
}
/*
quantity.addEventListener("input", function (e) {
  if (quantity == " ") {
    error.innerHTML="Veuillez entrer un nombre";
    return false;
  }
}) */


// 6)L'ensemble du formulaire :
// Fonction : Validation réussie et message de confirmation "Merci pour votre inscription"
function validate() {
  let data = document.forms["reserve"] ["first"].value;
  if (data.validity.valid) {

    return false;
  }
}