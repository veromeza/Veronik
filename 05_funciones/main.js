/* funciones

alert();
prompt ();
console.log();
Number();
if();
for(); */

/* function declaration */
function suma () {
    console.log( 5 + 5 );
}
suma();

/* variable constante. las variables siempre con const

arrow function */

/* const suma2 = () => {
    console.log( 10 + 2 );
};

suma2 (); */

/* parametros */

/* const suma2 = (a, b) => {
    console.log( a + b );
};

suma2 (10, 50);
suma2 (20, 60); */


const suma2 = ( a=0 , b=0 ) => {
    console.log( a + b );
};

suma2 (10, 50);
suma2 (20, 60);
suma2 ();

const saludar = ( usuario = "invitado" ) => {
    console.log( "Bienvenido: " + usuario );
};

saludar ("Osvaldo");
saludar ();


/* sin parametros es funcion anonima */


/* const ciclo = () => {
    for (let i = 0; i <= 10 ; i++){
        console.log(i);
    }
}

ciclo ();

const ciclo2 = (x=1 , y=10 , z=1) => {
    for (let i = x; i <= y ; i = i + z){
        console.log(i);
    }
}

ciclo2 (5, 50 , 2); */

const tablas = (a, b, c) => {
    for (let i = a; i <= b ; i = i+c){
    for (let j = a; j <= b ; j = j+c){
        console.log(i + "x" + j + "=" + i * j);
    } 
}
}

tablas (5, 20 , 3);

const nuevaSuma = (a ,b) => {
    console.log(a + b);
}

const nuevaResta = (a + b) => {
    console.log(a - b);
}

const multiplicacion = (nuevaSuma , nuevaResta) => {
    console.log(nuevaSuma * nuevaResta);
}


 