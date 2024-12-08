//MENU BUTTON

// GET ICON & MENU
const menuToggle = document.getElementById('icono');
const menu = document.getElementById('hmenu');

// Añadir evento de clic al icono
menuToggle.addEventListener('click', () => {
  // Alternar la clase 'show' en el menú
  if (menu.style.display == "block") {
    menu.style.display = "none"
  } else {
    menu.style.display = "block"
  }
});


//FORMULARY

//FORMULARY BUTTON
function listenForValidation() {
  const PERSONAL_DATA_FORM = document.getElementById("personal-data-form");
  PERSONAL_DATA_FORM.addEventListener("submit", validatePersonalDataForm);
}

//VALIDATION
function validatePersonalDataForm(e) {

  const FEELING = e.target.feeling.value;
  const HAT = e.target.hat.value;
  const GLASSES = e.target.glasses.value;
  const BACK = e.target.back.value;

  let valid = true;

  if (!FEELING) {
    document.getElementById("form-feeling").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-feeling").style.visibility = "hidden";

  if (!HAT) {
    document.getElementById("form-hat").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-hat").style.visibility = "hidden";

  if (!BACK) {
    document.getElementById("form-glasses").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-glasses").style.visibility = "hidden";

  if (!BACK) {
    document.getElementById("form-back").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-back").style.visibility = "hidden";


  if (!valid) {
    e.preventDefault();
  } else {
    saveData(FEELING, HAT, GLASSES, BACK);
  }
}

//SAVE DATA IN LOCAL HOST
function saveData(feeling, hat, glasses, back) {
  localStorage.setItem("feeling", feeling);
  localStorage.setItem("hat", hat);
  localStorage.setItem("glasses", glasses);
  localStorage.setItem("back", back);
}

//NAME FUNCTION (LISTEN ACTION "SEND")
listenForValidation();


//LIKES LIST BUTTON
function listenToClickToCursor() {
  const OPEN_BUTTON = document.getElementById("open-likes-list-button");
  const CLOSE_BUTTON = document.getElementById("close-likes-list-button");
  OPEN_BUTTON.addEventListener("click", moveSideMenu);
  CLOSE_BUTTON.addEventListener("click", moveSideMenu);
  
}

function moveSideMenu() {
  const SIDE_MENU = document.getElementById("likes-list");
  SIDE_MENU.classList.toggle("likes-list-opened");

}

listenToClickToCursor();