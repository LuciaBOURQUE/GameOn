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
const btnSubmit = document.querySelector(".btn-submit")
btnSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm(); // Les données du fourmulaire doivent être validé
})


// Action SUBMIT par le Formulaire
function validateForm() {
  if (
  firstInput()&&
  lastInput()&&
  mailInput()&&
  dateInput()&&
  quantityInput()&&
  checkboxInput()&&
  conditionInput() ) {
    alert("GOOD");
    sucessLauchModal();
    return true;
  } else {
    validInput();
    alert("BAD");
    return false;
    }
}

function validInput () {
  firstInput();
  lastInput();
  mailInput();
  dateInput();
  quantityInput();
  checkboxInput();
  conditionInput();
}

// Nouvelle modale pour la partie sucess !
const modalSucess = document.querySelector(".bground-check");
const closeBtnModalCheck = document.querySelector(".btn-close-modal");
// Ouverture/fermeture 
function sucessLauchModal() {
  closeModal ();
  modalSucess.style.display = "block";
}
// Fermeture modale sucess
closeBtnModalCheck.addEventListener("click", closeModalCheck);
closeBtnModal.addEventListener("click", closeModalCheck);
function closeModalCheck () {
  modalSucess.style.display = "none";
}




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