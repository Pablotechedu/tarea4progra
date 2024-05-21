//Para resolver este problema deberás utilizar if-else para crear un
//código que obtenga a través de un prompt un número y muestre un
//alert:
//● 0, si el número ingresado es igual a cero.
//● 1, si el número ingresado es mayor que cero.
//● -1, si el valor es menor a cero.
//Asumimos que siempre el usuario introduce un número.
 
let ingresousuario = prompt("Ingrese un numero");
let numero = parseFloat(ingresousuario);

if (!isNaN(numero) && ingresousuario.trim() !== ""){
    if (numero===0){
        alert("El numero ingresado es 0")
       } else if (numero>1){
        alert("El numero ingresado es mayor a 1")
       }else if (numero<-1){
        alert("El numero ingresado es menor a -1")
       }
} else
alert("Ha ingresado un numero incorrecto");