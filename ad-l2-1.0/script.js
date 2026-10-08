// 1. Alert

function burgerTime() {
    alert("ITS BURGERTIME!!");
}

// 2. Console.log
const burgerTowns = document.getElementsByClassName("burgerTown");

for (let i = 0; i < burgerTowns.length; i++) {
    burgerTowns[i].addEventListener("click", function() {
        console.log("Someone click on BURGER TOWN!");
    });
}

// 4. Turning the headline’s text “A Picture of a BURGER” red
const rice = document.getElementsByClassName("rice");
const burgerPicture = document.getElementById("burgerPicture");

for (let i = 0; i < rice.length; i++) {
    rice[i].addEventListener("click", function() {
        burgerPicture.style.color = "red";
    });
}