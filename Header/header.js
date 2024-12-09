
document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("header-container");

    // Cargar el header desde header.html
    fetch("../Header/header.html") // Si estás en una subcarpeta como Subpages.
        .then((response) => response.text())
        .then((headerHTML) => {
            headerContainer.innerHTML = headerHTML;

            // Identificar y marcar la sección activa en dispositivos grandes
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





// Estado de inicio de sesión
let isLoggedIn = false;

// Función para alternar entre "Iniciar sesión" y "Cerrar sesión"
function toggleLoginLogout() {
    const loginButton = document.querySelector('.login-button');

    if (isLoggedIn) {
        // Cerrar sesión
        isLoggedIn = false;
        loginButton.textContent = 'Iniciar sesión';
        alert('Sesión cerrada');
        // Aquí puedes agregar lógica para cerrar sesión, como limpiar cookies, tokens, etc.
    } else {
        // Abrir el popup de inicio de sesión
        openPopup('login-popup');
        loginButton.textContent = 'Cerrar sesión';
    }
}

// Función para abrir popups
function openPopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.style.display = 'flex';
    }
}

// Función para cerrar popups
function closePopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.style.display = 'none';
    }
}

// Esta función simula el inicio de sesión exitoso
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    isLoggedIn = true; // Cambia el estado a autenticado
    toggleLoginLogout(); // Actualiza el botón
    closePopup('login-popup'); // Cierra el popup
    alert('¡Sesión iniciada!');
});

