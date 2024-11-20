// Datos simulados de resultados de búsqueda (puedes reemplazarlos por datos reales o hacer una llamada a un servidor)
const results = [
    { name: 'Nutrición para principiantes', link: '/Subpages/nutricion.html' },
    { name: 'Ejercicio para todos', link: '/Subpages/ejercicio.html' },
    { name: 'Salud Mental y bienestar', link: '/Subpages/salud_mental.html' },
    { name: 'Alimentos balanceados', link: '/Subpages/blogs/AlimentacionBalanceada.html' },
    
    // Agrega más resultados según sea necesario
];

// Referencias a los elementos
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Función que se ejecuta cuando el usuario escribe en el input
searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase().trim();
    
    if (query.length > 0) {
        // Filtrar resultados que coincidan con la búsqueda
        const filteredResults = results.filter(item => item.name.toLowerCase().includes(query));
        
        // Mostrar resultados si hay coincidencias
        if (filteredResults.length > 0) {
            searchResults.innerHTML = filteredResults.map(item => 
                `<a href="${item.link}">${item.name}</a>`
            ).join('');
            searchResults.style.display = 'block'; // Mostrar resultados
        } else {
            searchResults.innerHTML = '<p>No se encontraron resultados</p>';
            searchResults.style.display = 'block'; // Mostrar mensaje de "sin resultados"
        }
    } else {
        searchResults.style.display = 'none'; // Ocultar resultados si el input está vacío
    }
});
