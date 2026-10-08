const colors = ["green", "blue", "red"];

function randomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

const h5Tags = document.querySelectorAll("h5");

h5Tags.forEach(function(h5) {
    h5.addEventListener("click", function() {
        h5.style.color = randomColor();
    });
});