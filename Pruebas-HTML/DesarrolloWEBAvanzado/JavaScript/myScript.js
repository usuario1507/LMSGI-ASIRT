// // let i=0
// //for (i=0;1<10;i++){
// //    console.log(i);
// // }
// // console.log(i);
// // let j="hola"

// // const PI=3.141592;
// // let radio=3;
// // console.log(2*PI*a);

// // const IVA =21;
// // let radioCirculo;
// // let radioPoligonoRectoMayor;
// // let lado_Poligono_recto_mayor;

// // comentarios
// /*
// jbdndkjnewqjn
// dewiondcoewnc
// jnclwcjwncjcc
// */

// //Salida por pantalla/consola
// // console.log("Hola Mundo")
// // document.write("<h1>Texto generado desde Javascript</h1>");
// // alert("Alerta de fallo en JavaScript");
// // window.print();

// // //Entrada por teclado
// // let numero =prompt("Introduce un número");

// //Código Switch
// /*let expr='Manzanas';
// switch (expr) {
//     case 'Naranjas':
//     console.log('El kilogramo de naranjas cuesta $0.59.');
//     break;
//     case 'Manzanas':
//     case 'Platanos':
//     console.log('El kilogramo cuesta $0.48.');
//     break;
//     default:
//     console.log('Lo lamentamos, no disponemos de ' + expr + '.');
// }
// */
// /*
// let edad;
// edad = Number((prompt("Introduce tu edad: ")));
// if (isNaN(edad)){
//     console.log("Lo que has introducido no es un número");
// }
// else if (edad < 18) {
// console.log("Tienes menos de 18 años.");
// } else if (edad >= 18 && edad <= 21) {
// console.log("Tenes entre 18 y 21 años de edad.");
// } else {
// console.log("Tiene más de 21 años.");
// }
// */

// //Operador Elvis
// /*let valor=5;
// if(valor >=5){
//     console.log("Estás aprobado");
// }
// else{
//     console.log("Estás suspenso");
// } 

// let resultado= valor>=5
// */
// // Bucles
// // let v=[9.98, 7.86, 4.53,8.91, 5.76, 2.31];
// // Bucle while
// /*
// let i=0;
// while(i<6){
//     console.log(v[i]);
//     i=i+1;
// }
// */
// // Bucle for
// /*
// for(let j=0;j<6;j++){
//     console.log(v[j]);
// }
// */
// // Bucle do while 
// /*
// console.log("salida bucle do.while")
// let k=0;
// do{
//     console.log(v[k]);
//     k++;
// }while(k<6)
// */
// // // Ejemplo dispositiva
// // /* Coge cada elemento */
// // /*
// // for (let i=0; i<v.length; i++){
// //     /* Y se compara con todos los demas*/
// // /*    for (let j=0; j<v.length; j++) {
// //         if (v[j]>v[i]) {
// //             let aux<v[i];
// //             v[i]=v[j];
// //             v[j]=aux;
// //         } /* Fin del if*/
// //     } /* Fin del for interno*/
// // } /* fin del for externo*/
// // /* Se imprime el contenido*/
// // /*for (let i=0; i<v.length; i++){
// //     console.log("Pos "+i+ ":"+v[i]);
// // }
// // */
// // // console.log(v);

// let numero=prompt("Introduce un número");
// let salida='';
//for (let i=0;i<numero;i++){
//    for (let j=0;j<i+1;j++){
//        salida+='*';
//    }
//    console.log(salida);
// }

//Calcular la media de un array
/* let v=[9.98, 7.86, 4.53,8.91, 5.76, 2.31];
let suma=0;
for(let i=0;i<v.length;i++){
    suma=suma+v[i];
}
let resultado=suma/v.length;
console.log(resultado);
*/
/*
//Simular la entrada de datos hasta recibir -1
let dato;
do{
    dato=promp("Introduce un número o -1 para salir")
}while(dato=-1);
*/

//Uso de funciones
// function ejemplo( nombre, apellidos="López") {
//    console.log("Hola "+ nombre + " "+apellidos);
// }

// ejemplo("Domingo","Oller");
    
// function ejemplo(param1, param2, ...restParams){
//    console.log(restParams);
//    }
// ejemplo('a', 'b', 'c', 'd', 'e', 'f');
 //en restParams está el array ["c", "d", "e", "f"] que es el contenido de la lista separada por comas.
// diferenciar función de procedimiento
// function sum(x, y, z) {
//    return x + y + z;
//    }
// function sum2(x, y, z) {
//    console.log(x + y + z);
// }    
// const numbers = [1, 2, 3];

//    console.log(sum(...numbers)+3);
//    console.log(sum2(...numbers)+3);

/*function ejemplo( nombre, apellidos) {
    if (apellidos != undefined){
    console.log("Hola "+ nombre + " "+
    apellidos);
    } else{
    console.log("Hola "+ nombre);
    }
    }
    ejemplo("Manuel");
    ejemplo("Pepito", "Grillo");
*/

// Varias formas de hacer una función//
function multiplicar(a,b){
    return a * b;
}
console.log(multiplicar(5,23));

let multiplicar2 = function(a,b) { 
    return a * b; 
}
console.log(multiplicar2(5,23));

let multiplicar3 = (a,b) => a * b; // FUNCIÓN FLECHA
console.log(multiplicar3(2 , 23 )); 