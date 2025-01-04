// Obtenemos el enlace de "Work" y el menú desplegable
const workLink = document.getElementById('work-link');
const workDropdown = document.getElementById('work-dropdown');

// Añadimos un evento para mostrar u ocultar el menú al hacer clic
workLink.addEventListener('click', (e) => {
    e.preventDefault(); // Evitamos que el enlace se siga
    workDropdown.classList.toggle('show-dropdown'); // Mostramos o escondemos el menú
});

// Si haces clic fuera del menú, lo cerramos
document.addEventListener('click', (e) => {
    if (!workLink.contains(e.target) && !workDropdown.contains(e.target)) {
        workDropdown.classList.remove('show-dropdown'); // Ocultamos el menú si clicamos fuera
    }
});

