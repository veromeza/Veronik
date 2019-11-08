let name = document.getElementById ('name')
let email = document.getElementById ('email')
let password = document.getElementById ('password')

let enviar = document.getElementById ('enviar')

let valor1 = document.getElementById ('valor1')
let valor2 = document.getElementById ('valor2')
let valor3 = document.getElementById ('valor3')

let validar = document.getElementById ('validar')

let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');


const formulario = () => {

    let valorName = name.value
    let valorEmail = email.value
    let valorPassword = password.value
    
    valor2.innerHTML = valorEmail;
    valor3.innerHTML = valorPassword;

    let nameCorrecto = "Juan";
    let emailCorrecto = "a@a.com";
    let passwordCorrecto = "5555";

    if (valorName === nameCorrecto && valorEmail === emailCorrecto && valorPassword === valorPassword) {
        validar.innerHTML = "Bienvenido!";
    } else {
        validar.innerHTML = "Datos incorrectos";
    }

    if (valorNamesin === nameCorrecto && valorEmail === emailCorrecto && valorPassword === valorPassword) {
        validar.innerHTML = "Bienvenido!";
    } else {
        validar.innerHTML = "Datos incorrectos";
    }
    
}

enviar.addEventListener ('click' , formulario);

const sinPina = () => {
  document.getElementById('img1').classList.remove('d-none');
  document.getElementById('img2').classList.add('d-none');
}

button1.addEventListener('click', sinPina);

const conPina = () => {
  document.getElementById('img2').classList.remove('d-none');
  document.getElementById('img1').classList.add('d-none');
}

button2.addEventListener('click', conPina);