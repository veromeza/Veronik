/* 1 comprobar que esta linkeada
alert('hola'); */

//valor numerico

let numero = 10;

//valor strig o texto

let texto = "Ricardo";
let texto2 = "Ricardo2";

//valor booleano

let verdadero = true
let falso = false;

//objeto

let objeto = {}

//arreglo 

let array = []

//console
let x = 50;
let y = 100;
console.log (x+y);

let suma = x + y;
//pero esto no se ve en la consola porque no esta en la variable console, para que aparezca tiene que decir console.log 

let cambiar = 1500
console.log (cambiar);
cambiar = 10
console.log (cambiar);
cambiar = "texto"
console.log (cambiar);

//variables especiales array y objet

//array
//el texto va entre comillas

let frutas = ["melon" , "sandia" , "fresa"]
console.log (frutas);
console.log (frutas [1])

frutas [3] = "manzana"
console.log (frutas);

frutas.push ("guayaba");
console.log (frutas);

frutas.pop()
console.log (frutas);

frutas.splice(1,2)
console.log (frutas);
//lo que esta entre parentesis, el primer numero indica en donde inicia y hasta donde
//variables es un valor que se guarda en la memoria cache

//OBJECT

let persona = {
    nombre : "Ricardo" ,
    direccion : "Coyoacan" ,
    telefono : "5512245580" ,
    email : "ricardo.dev@gmail.com",
    edad : "21",
    trabajos : ["desarrollador", "maestro", "diseñador"] ,
    mascotas : {
        perro : "salchicha",
        gato : "siames",
        pez : "dorado",
    }
}



console.log (persona);
console.log (persona.telefono);
console.log (persona.mascotas.pez);