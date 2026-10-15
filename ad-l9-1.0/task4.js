/* 1. Select the section with a container id */
const container = document.querySelector("#container");

/* 2. Select all the list items with a class of "second" */
const seconds = document.querySelectorAll(".second");

/* 3. Select the list item with a class of third,
      but only inside the ol tag */
const third = document.querySelector("ol .third");

/* 4. Give the text "Hello!" to the section with a container id */
container.textContent = "Hello!";

/* 5. Add the main class to the div with a footer class */
const footer = document.querySelector(".footer");
footer.classList.add("main");

/* 6. Remove the main class from the div with a footer class */
footer.classList.remove("main");

/* 7. Create a new li element */
const newLi = document.createElement("li");

/* 8. Give the li the text "four" */
newLi.textContent = "four";

/* 9. Append the li to the ul element */
const ul = document.querySelector("ul");
ul.appendChild(newLi);