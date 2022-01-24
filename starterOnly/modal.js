// PARTIE A - Navigation et modal

// Version mobile : Menu burger paramètres
// Animation : Par défaut la barre de navigation à une class "topnav"
// Mais dès lors qu'on click "onclick" sur l'icon de la barre de navigation
// La barre de navigation change de class dans laquel on lui rajoute "topnav responsive"
// Pour affiche l'interface responsive
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// Ouverture et fermeture de la modale
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtnModal = document.querySelector(".close");
// Ouverture :
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
  modalbg.style.display = "block";
}
// Fermeture :
closeBtnModal.addEventListener("click", closeModal);
function closeModal () {
  modalbg.style.display = "none";
}


////////////////////////////////////////////////////////////////////////////////////////////////
// PARTIE B - Création du bouton "Submit" (reprendre modal ouverture/fermeture)
const modalSucess = document.getElementsByClassName("bground-check");
function lauchModalSucess() { // + Ajout du ".text-control"
  modalSucess.style.display = "block";
}

/* SI il n'y a pas d'erreurs, L'envoie est réussis
    Et ouvre une nouvelle fenêtre "Merci pour votre inscription"
    Avec une "close" et un bouton "Fermer"
  SINON les erreurs sont affichés selon la case en utilisant la fonction précédente
const form = document.forms["reserve"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  errorFirst();
})
console.log(form); */



////////////////////////////////////////////////////////////////////////////////////////////////
// PARTIE C - Fonctions des évènements inputs

// Fonction de l'attribut
// const errorData = document.querySelectorAll('.formData[data-error]');
//console.log(errorData);

// Fonction style erreurs
function setError() {
  const errorData = document.querySelector('.data-error');
  errorData.style.display = "block";
}
function setSuccess() { // + Ajout du ".text-control"
  errorData.style.display = "none";
}

// const errorData = document.querySelectorAll('.formData[data-error] .text-control');
// On doit avoir une fonction différente pour chaque erreurs
  // 1-2) Champ prénom : 
  // 3) Champ adresse électronique :
  // 4) Champ date de naissance :
  // 5) Champ nombre tournoi :
  // 6) Champ nombre tournoi :

// Fonction Prénom/nom:
const first = document.getElementById("first");
function errorFirst() {
  let firstCheckValue = first.value.trim(); 
    if (firstCheckValue.length <= 0 ) {
      setError();
    } else {
      setSuccess();
    }
}

const form = document.forms["reserve"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  errorFirst();
})

















// Zone de tests

function errorMessage() {
  var error = document.getElementById("error")
  if (isNaN(document.getElementById("number").value)) 
  {
        
      // Changing content and color of content
      error.textContent = "Please enter a valid number"
      error.style.color = "red"
  } else {
      error.textContent = ""
  }
}



// 1-2) Champ prénom : Bien prendre en compte tous les éléments nécessaire
// Le champ du prénom a un minimum de 2 caractères et ne doit pas être vide
// - (if/else) SI la valeur est inférieur à 2 caractères (minlength) 
      // ALORS on affiche l'erreur "Veuillez entrez 2 caractères ou plus (data-error-visible)"
// - (if else) SINON on ne met rien ("return" de type break)


// 3) Champ adresse électronique :
// Directement dans le HTML !


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
    return false;
  }
}
