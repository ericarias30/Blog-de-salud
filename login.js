// Verificar y aplicar el estado de sesión al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    const userName = localStorage.getItem("userName");

    if (loggedInStatus === "true" && userName) {
        console.log("Estado: Usuario logueado");
        actualizarEstadoSesion();
    } else {
        console.log("Estado: Usuario no logueado");
        actualizarEstadoSesion();
    }
});


// Función para abrir un popup en general (para login y registro)
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'flex';
    }
}

// Abrir el popup de inicio de sesión
function openLoginPopup() {
    openPopup('login-popup');

    // Asignar comportamiento al formulario de login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.onsubmit = (event) => {
            event.preventDefault();
            handleLogin();
        };
    }
}

// Abrir el popup de registro
function openRegisterPopup() {
    openPopup('register-popup');

    // Asignar comportamiento al formulario de registro
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.onsubmit = (event) => {
            event.preventDefault();
            handleRegister();
        };
    }
}

// Cerrar cualquier popup
function closePopup(id) {
    const popup = document.getElementById(id);
    if (popup) popup.style.display = 'none';
}

// Manejar el inicio de sesión
function handleLogin() {
    const loginEmail = document.getElementById("login-email").value;
    const userName = loginEmail.split("@")[0] || "Usuario";

    console.log("Iniciando sesión con usuario:", userName);

    // Guardar estado en localStorage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", userName);

    actualizarEstadoSesion();
    closePopup("login-popup");
}

function handleRegister() {
    const registerEmail = document.getElementById("register-email").value;
    const userName = document.getElementById("register-name").value;

    console.log("Registrando usuario:", userName);

    localStorage.setItem("userEmail", registerEmail);
    localStorage.setItem("userName", userName);

    alert("Registro exitoso! Ahora puedes iniciar sesión.");
    closePopup("register-popup");
    openLoginPopup();
}

function showLoggedInState() {
    const loginContainer = document.getElementById('login-container');
    const optionsContainer = document.getElementById('options-container');
    const userNameElement = document.getElementById('user-name');
    const savedLinkMobile = document.getElementById('saved-link-mobile'); // Enlace "Guardados" móvil

    if (loginContainer) loginContainer.style.display = 'none'; // Ocultar botón de login
    if (optionsContainer) optionsContainer.style.display = 'flex'; // Mostrar menú de opciones
    if (userNameElement) userNameElement.textContent = 'Opciones'; // Mostrar texto "Opciones"
    if (savedLinkMobile) savedLinkMobile.style.display = 'block'; // Mostrar enlace "Guardados" móvil

    console.log('Usuario logueado');
}

function showLoggedOutState() {
    const loginContainer = document.getElementById('login-container');
    const optionsContainer = document.getElementById('options-container');
    const savedLinkMobile = document.getElementById('saved-link-mobile'); // Enlace "Guardados" móvil

    if (loginContainer) loginContainer.style.display = 'flex'; // Mostrar botón de login
    if (optionsContainer) optionsContainer.style.display = 'none'; // Ocultar menú de opciones
    if (savedLinkMobile) savedLinkMobile.style.display = 'none'; // Ocultar enlace "Guardados" móvil

    console.log('Usuario no logueado');
}


// Cerrar sesión
function logout() {
    console.log("Cerrando sesión...");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    actualizarEstadoSesion();
}

function actualizarEstadoSesion() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userName = localStorage.getItem("userName") || "Opciones";

    const loginContainer = document.querySelector("#login-container");
    const optionsContainer = document.querySelector("#options-container");
    const userNameSpan = document.querySelector("#user-name");

    if (isLoggedIn) {
        if (loginContainer) loginContainer.style.display = "none";
        if (optionsContainer) optionsContainer.style.display = "flex";
        if (userNameSpan) userNameSpan.textContent = userName;
    } else {
        if (loginContainer) loginContainer.style.display = "block";
        if (optionsContainer) optionsContainer.style.display = "none";
    }
}

function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "flex";
    }
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) popup.style.display = "none";
}

function toggleDropdown() {
    const dropdownMenu = document.getElementById("dropdown-menu");
    const arrow = document.getElementById("dropdown-arrow");

    if (dropdownMenu) {
        const isVisible = dropdownMenu.style.display === "block";
        dropdownMenu.style.display = isVisible ? "none" : "block";

        if (arrow) arrow.classList.toggle("open", !isVisible);
    }
}


