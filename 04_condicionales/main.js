/*alert ('hola') 
if (condicion) {
serie de indicaciones que le vamos a dar: si esta condicion se cumple, hace lo que sigue 
comandos...
}
else if (condicion2) { if anidado  si la condicion de arriba no se cumple entonces haces esto
    comandos
}
let edad = 18 ;
if (edad === 18) {
    console.log ('eres mayor de edad') ;
} else { console.log ('no eres mayor de edad');} */

/* let numero = prompt ('Escribe un numero') ;
if ( numero % 2 === 0) {
    console.log ('Eres par!')
} else { console.log ('Eres impar!')}  */

/* let edad = prompt ('¿Cuantos años tienes?') ;
if (edad == 16) {console.log('puedes conducir con permiso');} 
else if (edad == 17) {console.log('puedes conducir con permiso');}
else if (edad >= 18) {console.log('puedes conducir con licencia');} 
else if (edad <= 15) {console.log('No puedes conducir');}
else {console.log('Valor no válido');} */

/* let player1 = prompt ('Player1 = piedra, papel o tijera???').toLowerCase() ;
let player2 = prompt ('Player2 = piedra, papel o tijera???').toLowerCase ();
let piedra = "piedra"
let tijera = "tijera"
let papel = "papel"
if (player1 === player2) {console.log('EMPATE');}
else if (player1 === piedra && player2 === papel) {console.log('Gana player2');}
else if (player1 === piedra && player2 === tijera) {console.log('Gana player1');}
else if (player1 === papel && player2 === piedra) {console.log('Gana player1');}
else if (player1 === papel && player2 === tijera) {console.log('Gana player2');}
else if (player1 === tijera && player2 === piedra) {console.log('Gana player2');}
else if (player1 === tijera && player2 === papel) {console.log('Gana player1');}
else {console.log('Valor no válido');}
console.log(player1);
console.log(player2); */

let password = prompt ('Password') ;
let perritosalchicha123= "perritosalchicha123"
if (password === "perritosalchicha123") {console.log('Contraseña válida');}
else {console.error('Contraseña invalida');}