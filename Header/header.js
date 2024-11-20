
document.addEventListener("DOMContentLoaded", () => {
const headerContainer = document.getElementById("header-container");

// Cargar el header desde header.html
fetch("../Header/header.html") // Si estás en una subcarpeta como Subpages.
    .then((response) => response.text())
    .then((headerHTML) => {
    headerContainer.innerHTML = headerHTML;

    // Identificar y marcar la sección activa
    const currentSection = document.body.getAttribute("data-section");
    if (currentSection) {
        const activeLink = document.querySelector(`.nav-link[data-section="${currentSection}"]`);
        if (activeLink) {
        activeLink.classList.add("active");
        }
    }
    })
    .catch((error) => console.error("Error al cargar el header:", error));
});