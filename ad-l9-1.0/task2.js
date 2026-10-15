const form = document.getElementById("form1");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const firstName = formData.get("fname");
  const lastName = formData.get("lname");

  console.log(firstName);
  console.log(lastName);
});