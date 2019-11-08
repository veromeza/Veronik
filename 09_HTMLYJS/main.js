let titulo = document.getElementById('titulo');
let cambiarTexto = document.getElementById('changeJS')
let textChange = document.getElementById ('textChange')
let button = document.getElementById ('button')

let nombre = document.getElementById ('nombre')
let email = document.getElementById ('email')
let password = document.getElementById ('password')

let enviar = document.getElementById ('enviar')

let valor1 = document.getElementById ('valor1')
let valor2 = document.getElementById ('valor2')
let valor3 = document.getElementById ('valor3')

let validar = document.getElementById ('validar')



/* console.log(titulo); */

titulo.innerHTML = "Hola, desde JS"
cambiarTexto.innerHTML = "texto cambiado"

const nuevoTexto = () => {
    textChange.innerHTML = "texto cambiado"
} 

button.addEventListener('click', nuevoTexto);

const formulario = () => {

    let valorNombre = nombre.value
    let valorEmail = email.value
    let valorPassword = password.value


    valor2.innerHTML = valorEmail;
    valor3.innerHTML = valorPassword;

    let nombreCorrecto = "Juan";
    let emailCorrecto = "a@a.com";
    let passwordCorrecto = "5555";

    if (valorNombre === nombreCorrecto && valorEmail === emailCorrecto && valorPassword === valorPassword) {
        validar.innerHTML = "Bienvenido!";
    } else {
        validar.innerHTML = "Datos incorrectos";
    }
    
}

enviar.addEventListener ('click' , formulario);