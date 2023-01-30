import '../assets/styles/style.scss';


// Constantes de la forma
const cardholder = document.getElementById('cardholder');
const cardnumber = document.getElementById('cardnumber');
const expm = document.getElementById('expm');
const expy = document.getElementById('expy');
const cvc = document.getElementById('cvc');
const error = document.getElementById('error-card');
const number = document.getElementById('error-numero');
const expnum = document.getElementById('error-exp');
const errorcvc = document.getElementById('error-cvc');
const form = document.getElementById('forma');

// Constantes de la Card
const numbercard = document.querySelector('.card__first__number');
const cardname = document.querySelector('.card__first__nombre');
const monthexp = document.querySelector('.card__first__month');
const yearexp = document.querySelector('.card__first__exp');
const cardcvc = document.querySelector('.card__back__cvc');
const gracias = document.querySelector('.thanks');

// Constante errores
const wrongs = document.querySelectorAll('.wrong');


// Evento de escucha para la tarjeta
form.addEventListener('submit', function(e) {
  //Prevenir la accion por defecto
  e.preventDefault();

  // Añadir clase error para nombre
  if(cardholder.value == ''){
    cardholder.classList.add("error");
    error.textContent = "Can't be blank";
  }
  // Removedor de clases
  else{
    cardholder.classList.remove("error");
    error.textContent = "";
  }

  // Añadir clase para numero de la tarjeta
  if(cardnumber.value == '') {
    cardnumber.classList.add("error");
    number.textContent = "Can't be blank";
  }
  else if (!onlyNumbers(cardnumber.value)){
    cardnumber.classList.add("error");
    number.textContent = "Wrong format, numbers only";
  }
  
  // Remover clase
  else{
    cardnumber.classList.remove("error");
    number.textContent = "";
  }


  // Añadir clase error para cvc
  if (cvc.value == '') {
    cvc.classList.add("error");
    errorcvc.textContent = "Can't be blank";

  }
  else if(!onlyNumbers(cvc.value) ) {
    cvc.classList.add("error");
    errorcvc.textContent = "Wrong format, numbers only";
  }
  // Remover clase error para cvc
  else {
    cvc.classList.remove("error");
    errorcvc.textContent = "";
  }

  if(expm.value == '') {
    expm.classList.add("error");
    expnum.textContent = "Can't be blank";
  }
  else if (!onlyNumbers(expm.value) ) {
    expm.classList.add ("error");
    expnum.textContent = "Wrong format, numbers only";
  }
  else {
    expm.classList.remove("error");
    expnum.textContent = "";
  }

  if (expy.value == '') {
    expy.classList.add("error");
    expnum.textContent = "Can't be blank";
  }
  else if(!onlyNumbers(expy.value) ) {
    expy.classList.add("error");
    expnum.textContent = "Wrong format, numbers only";
  }
  else{
    expy.classList.remove("error");
    expnum.textContent = "";
  }

});

// Evento de escucha para la forma

form.addEventListener('submit', function(e){
  e.preventDefault();

  if(iferrors(wrongs)){
    form.classList.add('hide');
    gracias.style.display = "block";
  }
});

// Funcion errores
function iferrors(wrongs) {
  let error = true;
  wrongs.forEach(function(element){
    if (!element.textContent == "") {
      error = false;
    }
  });

  return error;
}

function onlyNumbers(str){
  return /^[\d ]*$/.test(str);
}

function inputcardholder(){
  let cardholdervalue = cardholder.value;

  cardname.innerHTML = cardholdervalue;
}

function inputcardnumber(){
  if (cardnumber.value.length > 0) {
    if (cardnumber.value.length % 4 == 0) {
      cardnumber.value += "    ";
    }
  }
  numbercard.innerHTML = cardnumber.value;
}

function inputmm(){
  monthexp.innerHTML = expm.value;
}

function inputyy(){
  yearexp.innerHTML = expy.value;
}
 
function inputcvc(){
  cardcvc.innerHTML = cvc.value;
}




