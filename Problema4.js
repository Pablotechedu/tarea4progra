let login= prompt("Ingrese Usuario")


if (login==="Admin"){
    let password = prompt("Ingrese contraseña")
        if (password=== "Jedi"){
     alert("¡Que la fuerza te acompañe!");
        } else if (password=== "" || password === null){
        alert("Cancelado");
        } else{
        alert("Contraseña Incorrecta");
         }
} else if (login === "" || login === null){ 
    alert("Cancelado");}
    else {
        alert("No te conozco");
    }

;