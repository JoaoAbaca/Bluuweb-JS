const inputColor = document.querySelector("#inputColor");
const boton = document.querySelector("#boton");
const textoHexa = document.querySelector("#textoHexa");
const cardColor = document.querySelector("#cardColor");

console.log(inputColor.value);

boton.addEventListener("click", () => {
    console.log(inputColor.value);
    textoHexa.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;
});
