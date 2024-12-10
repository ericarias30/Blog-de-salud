document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("header-container");

    // Cargar el header desde header.html
    fetch("../Header/header.html")
        .then((response) => response.text())
        .then((headerHTML) => {
            headerContainer.innerHTML = headerHTML;

            // Lógica de navegación activa
            const currentSection = document.body.getAttribute("data-section");
            if (currentSection) {
                const activeLink = document.querySelector(`.nav-link[data-section="${currentSection}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }

            // Inicializar eventos y actualizar el estado de sesión
            inicializarEventosHeader();
            actualizarEstadoSesion(); // Desde login.js
        })
        .catch((error) => console.error("Error al cargar el header:", error));
});

// Inicializar el estado de sesión y asignar eventos
function inicializarEstadoSesion() {
    // Actualizar estado de sesión en la interfaz
    actualizarEstadoSesion();

    // Asignar evento para cerrar sesión
    const logoutButton = document.querySelector("#dropdown-menu a[data-action='logout']");
    if (logoutButton) {
        logoutButton.addEventListener("click", (e) => {
            e.preventDefault();
            logout();
        });
    }

    // Asignar evento para alternar el menú desplegable
    const dropdownToggle = document.getElementById("dropdown-toggle");
    if (dropdownToggle) {
        dropdownToggle.addEventListener("click", toggleDropdown);
    }
}

// Actualizar el estado de inicio de sesión
function actualizarEstadoSesion() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    const loginContainer = document.querySelector("#login-container");
    const optionsContainer = document.querySelector("#options-container");
    const userNameSpan = document.querySelector("#user-name");

    if (isLoggedIn) {
        // Usuario está logueado
        if (loginContainer) loginContainer.style.display = "none";  // Ocultar botón de "Iniciar sesión"
        if (optionsContainer) optionsContainer.style.display = "flex";  // Mostrar el menú de opciones
        if (userNameSpan) userNameSpan.textContent = "Opciones";  // Mostrar "Opciones"
    } else {
        // Usuario no está logueado
        if (loginContainer) loginContainer.style.display = "block";  // Mostrar botón de "Iniciar sesión"
        if (optionsContainer) optionsContainer.style.display = "none";  // Ocultar el menú de opciones
    }
}


// Inicializar eventos del header
function inicializarEventosHeader() {
    // Evento para cerrar sesión
    const logoutButton = document.querySelector("#dropdown-menu a[data-action='logout']");
    if (logoutButton) {
        logoutButton.addEventListener("click", (e) => {
            e.preventDefault();
            logout(); // Función en login.js
        });
    }

    // Evento para alternar el menú desplegable
    const dropdownToggle = document.getElementById("dropdown-toggle");
    if (dropdownToggle) {
        dropdownToggle.addEventListener("click", toggleDropdown);
    }
}


// Función para cerrar sesión
function logout() {
    // Eliminar datos de la sesión
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");

    // Actualizar interfaz
    actualizarEstadoSesion();
    console.log("Sesión cerrada.");
}

// Alternar el menú desplegable
function toggleDropdown() {
    const dropdownMenu = document.getElementById("dropdown-menu");
    const arrow = document.getElementById("dropdown-arrow");

    if (dropdownMenu) {
        const isVisible = dropdownMenu.style.display === "block";
        dropdownMenu.style.display = isVisible ? "none" : "block";

        if (arrow) arrow.classList.toggle("open", !isVisible);
    }
}




function toggleMenu() {
    const navLinks = document.querySelector('.mobile-nav');
    navLinks.classList.toggle('active');
}

// Función para cerrar el menú si se hace clic fuera de él
document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.mobile-nav');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    
    // Si el clic no se realizó ni en el menú ni en el botón de hamburguesa
    if (!navLinks.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        navLinks.classList.remove('active'); // Cierra el menú
    }
});

// Función para cerrar el menú cuando se cambia el tamaño de la pantalla a pantallas grandes
window.addEventListener('resize', function() {
    const navLinks = document.querySelector('.mobile-nav');
    
    // Si el ancho de la pantalla es mayor a 768px, cierra el menú
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
    }
});

