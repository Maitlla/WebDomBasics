const buttonX2 = document.querySelector("button");
console.log(buttonX2);
const inputX2 = document.querySelector("input");
console.log(inputX2);

function duplicaCantidad (event) {
    console.log(event);
    let resultado = inputX2.value * 2;
    console.log(resultado);
    inputX2.value = resultado;
}

buttonX2.addEventListener("click", duplicaCantidad);


