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
 */


////////////////////////////////////////////////////////////////////////////////////////////////
// PARTIE C - Fonctions des évènements inputs

// const errorData = document.querySelectorAll('.formData[data-error] .text-control');
// On doit avoir une fonction différente pour chaque erreurs
  // 1-2) Champ prénom : 
  // 3) Champ adresse électronique :
  // 4) Champ date de naissance :
  // 5) Champ nombre tournoi :
  // 6) Champ nombre tournoi :

/*
function setError() {
  document.querySelector('.data-error').style.opacity = "1";
  return false;
}
function setSuccess() { // + Ajout du ".text-control"
  document.querySelector('.data-error').style.opacity = "0";
  return true;
} */

// Prénom
function firstInput () {
  let first = document.forms["myForm"]["first"].value;
  if(first.length <= 1 || first == ""){
    document.querySelectorAll('.data-error')[0]
    .style.opacity = "1";

    document.querySelectorAll('.text-control')[0]
    .style.border = "2px solid #e54858";

    return false;
  } else {
    document.querySelectorAll('.data-error')[0]
    .style.opacity = "0";
    return true;
  }
}



// Nom
function lastInput () {
  let last = document.forms["myForm"]["last"].value;
  if(last.length <= 1 || last.length == ""){
    document.querySelectorAll('.data-error')[1]
    .style.opacity = "1";

    document.querySelectorAll('.text-control')[1]
    .style.border = "2px solid #e54858";

    return false;
  } else {
    document.querySelectorAll('.data-error')[1]
    .style.opacity = "0";
    return true;
  }
}



// E-mail REVOIR CAR Pas valide !
function mailInput () {
  let mail = document.forms["myForm"]["email"].value;
  if(!mail){
    document.querySelectorAll('.data-error')[2]
    .style.opacity = "1";

    document.querySelectorAll('.text-control')[2]
    .style.border = "2px solid #e54858";

    return false;
  } else {
    document.querySelectorAll('.data-error')[2]
    .style.opacity = "0";
    return true;
  }
}



// Date de naissance
function dateInput () {
  let date = document.forms["myForm"]["birthday"].value;
  if(!date){
    document.querySelectorAll('.data-error')[3]
    .style.opacity = "1";

    document.querySelectorAll('.text-control')[3]
    .style.border = "2px solid #e54858";

    return false;
  } else {
    document.querySelectorAll('.data-error')[3]
    .style.opacity = "0";
    return true;
  }
}




// Action SUBMIT par le Formulaire
function validateForm() {
  firstInput();
  lastInput();
  mailInput();
  dateInput();
}

function submitButton()  {
    let valid = validateForm();
    if(!valid)  {
      return;
    }
    let myForm = document.forms["myForm"];
    myForm.submit();
}


/*
const form = document.forms["myForm"];
  form.addEventListener("onsubmit", (e) => {
    e.preventDefault();
    errorFirst();
  });
*/


// Zone de tests


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
/*
function numberQuantity() {
  let quantity = document.getElementById("quantity").value;
  let text;
  if (isNaN(quantity) || quantity<1 || quantity>99) {
    text = "Veuillez entrer un nombre" // sinon mettre "return false;"
  } else {
    return false;
  }
}*/
