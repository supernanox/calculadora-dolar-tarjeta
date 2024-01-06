let cantidad = 5;
let username = "Mariano";



function consultarDolar(cant){

    paraMult = cant;
    
    fetch("https://dolarapi.com/v1/dolares/tarjeta")
  .then(response => response.json())
  .then(data => {
    console.log("El total a pagar es: " + (data.venta * paraMult))
  }
  );
    

}

function hola(nombre){
    console.log("Hola, " + nombre);
}

console.log(consultarDolar(cantidad));
hola(username);