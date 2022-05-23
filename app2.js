/* Queremos implementar un botón que nos diga cuantas letras hemos escrito en la caja de texto.

Recuerda que para obtener el valor de un input no podemos usar la propiedad .textConent; necesitamos acceder a otra. */


// 1. voy a seleccionar el objeto del DOM donde asociare el evento click

let btnCalculador = document.querySelector("#btn");


// 2. acceder a la propiedad del input asociada al length del string, que sera el string que escriba en la pantalla de la app
btnCalculador.addEventListener("click", function () {
let letras = document.querySelector("#str").value;
// 3. en output asociar ese valor del length , para que se visualice en la pantalla

let numeroLetras = letras.length;
let numeroOutput = document.querySelector("#output");
numeroOutput.innerHTML = numeroLetras;
  
});





