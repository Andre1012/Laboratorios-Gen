const paragraph = document.getElementById("text");
const styleButton = document.getElementById("jsstyle");

styleButton.addEventListener("click", () => {
  paragraph.style.fontFamily = "Georgia, serif";
  paragraph.style.fontSize = "2rem";
  paragraph.style.color = "#d95f59";
});