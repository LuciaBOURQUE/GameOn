// PARTIE A - Navigation et modal
// Version mobile : Menu burger paramètres
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



///////////////////////////////////////////////////////////////////////////////////////////////
// PARTIE B - Fonctions des évènements inputs
// Prénom
function firstInput () {
  let first = document.forms["myForm"]["first"].value;
  if(first.length <= 1 || first == ""){
    document.querySelector('.first-name').classList.add("error");
    document.querySelector('.first-error').style.opacity = "1";
    return false;
  } else {
    document.querySelector('.first-name').classList.remove("error");
    document.querySelector('.first-error').style.opacity = "0";
    return true;
  }
}



// Nom
function lastInput () {
  let last = document.forms["myForm"]["last"].value;
  if(last.length <= 1 || last.length == ""){
    document.querySelector('.last-name').classList.add("error");
    document.querySelector('.last-error').style.opacity = "1";
    return false;
  } else {
    document.querySelector('.last-name').classList.remove("error");
    document.querySelector('.last-error').style.opacity = "0";
    return true;
  }
}



// E-mail REGEX !!!
function mailInput () {
  let mail = document.forms["myForm"]["email"].value;
  if(!mail){
    document.querySelector('.mail-name').classList.add("error");
    document.querySelector('.mail-error').style.opacity = "1";
    return false;
  } else {
    document.querySelector('.mail-name').classList.remove("error");
    document.querySelector('.mail-error').style.opacity = "0";
    return true;
  }
}



// Date de naissance
function dateInput () {
  let birthday = document.forms["myForm"]["birthdate"].value;
  if(birthday == ""){
    document.querySelector('.birthday-name').classList.add("error");
    document.querySelector('.birthday-error').style.opacity = "1";
    return false;
  } else {
    document.querySelector('.birthday-name').classList.remove("error");
    document.querySelector('.birthday-error').style.opacity = "0";
    return true;
  }
}



// Quantité tournois
function quantityInput() {
  let quantity = document.forms["myForm"]["quantity"].value;
  if (quantity == "" && quantity <= 0 || quantity > 99) {
    document.querySelector('.quantity-name').classList.add("error");
    document.querySelector('.quantity-error').style.opacity = "1";
    return false;
  } else {
    document.querySelector('.quantity-name').classList.remove("error");
    document.querySelector('.quantity-error').style.opacity = "0";
    return true;
  }
}



// Checkbox - 1 choix à sélectionner
function checkboxInput() {
let checkbox = document.querySelectorAll(".checkbox-input");

// Si une des cases est coché (trouver une formule plus optimale)
if(checkbox[0].checked || checkbox[1].checked
  || checkbox[2].checked || checkbox[3].checked
  || checkbox[4].checked || checkbox[5].checked){ 
  document.querySelector('.checkbox-error').style.opacity = "0";
  return true;
} else {
  document.querySelector('.checkbox-error').style.opacity = "1";
  return false;
  }
}



// Checkbox conditions - La case 1 est obligatoire l'autre optionnel
function conditionInput() {
  let checkboxCondition = document.getElementById("checkbox1");
  if(!checkboxCondition.checked) { 
    document.querySelector('.condition-error').style.opacity = "1";
    return false;
  } else {
    document.querySelector('.condition-error').style.opacity = "0";
    return true;
    }
  }


// Action SUBMIT par le Formulaire
function validateForm() {
  firstInput();
  lastInput();
  mailInput();
  dateInput();
  quantityInput();
  checkboxInput();
  conditionInput();
}


let btnSubmit = document.querySelector(".btn-submit")
btnSubmit.addEventListener("click", e => {
  e.preventDefault();
  let valid = validateForm();
  if(!valid)  {
    return;
  } else {
    lauchModalSucess();
  }
})

// PARTIE C - Création du bouton "Submit" (reprendre modal ouverture/fermeture)
const modalSucess = document.getElementsByClassName("bground-check");
function lauchModalSucess() {
  modalSucess.style.display = "block";
}
/*
SI il n'y a pas d'erreurs, L'envoie est réussis
    Et ouvre une nouvelle fenêtre "Merci pour votre inscription"
    Avec une "close" et un bouton "Fermer"
SINON les erreurs sont affichés selon la case en utilisant la fonction précédente
*/