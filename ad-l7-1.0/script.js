// Task 2: Create and display a dismissible Bootstrap alert when "The Button" is clicked.
const alertButton = document.querySelector("#alertButton");
const alertContainer = document.querySelector("#alertContainer");

if (alertButton && alertContainer) {
  alertButton.addEventListener("click", () => {
    alertContainer.innerHTML = `
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        Alert, someone pushed the button
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
  });
}
