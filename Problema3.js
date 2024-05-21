//A continuación se presenta un código de JavaScript, reescribelo
//utilizando operadores ternarios múltiples ‘?’

//let message;

//if (login == 'Trabajador') {
//message = 'Hola';
//} else if (login == 'Dueño') {
//message = 'Felicidades';
//} else if (login == '') {
//message = 'Sin sesión';
//} else {
//message = ('');}
let login = prompt("Ingrese su usuario");

(login == 'Trabajador') ? console.log("Hola") :
(login == 'Dueño') ? console.log("Felicidades") :
(login == '') ? console.log("Sin Sesion") :
console.log("Usuario Invalido");