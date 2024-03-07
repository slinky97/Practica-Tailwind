document.addEventListener("DOMContentLoaded", function () {
  const toggleMenuButton = document.getElementById("toggleMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");

  toggleMenuButton.addEventListener("click", function () {
    // Toggle para mostrar u ocultar el menú móvil
    mobileMenu.classList.toggle("hidden");
  });
});

// Función para cambiar entre el modo claro y oscuro
function toggleDarkMode() {
  // Obtén una referencia al elemento HTML
  const htmlElement = document.querySelector("html");
  // Cambia la clase "dark" del elemento HTML
  htmlElement.classList.toggle("dark");
}

// Obtén una referencia al botón para cambiar el modo
const darkModeButton = document.getElementById("darkModeButton");

// Agrega un evento de clic al botón para activar el modo oscuro
darkModeButton.addEventListener("click", toggleDarkMode);
