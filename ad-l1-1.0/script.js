// Cambiar el primer Hello World!
document.querySelector("h1").textContent = "GoodBye";

// Cambiar un header a naranja
document.querySelector("h5").style.color = "orange";

// Cambiar el color al hacer clic
document.querySelector("#click-header").onclick = function() {
    this.style.color = "brown";
};