let cantidad = document.getElementById("text-cantidad");
let boton = document.getElementById("boton-calcular");
let resultado = document.getElementById("resultado");

function consultarDolar(){
    
    fetch("https://dolarapi.com/v1/dolares/tarjeta")
  .then(response => response.json())
  .then(data => {
    console.log("El total a pagar es: " + (data.venta * cantidad.value));
    resultado.innerText = (data.venta * cantidad.value).toFixed(2);
  }
  );
}

function mostrarCantidad(){
  console.log(cantidad.value);
}

boton.addEventListener("click", consultarDolar)