console.log("JavaScript cargado correctamente en About");
// Obtener el enlace "Work" y el menú desplegable
const workLink = document.getElementById('work-link');
const workDropdown = document.getElementById('work-dropdown');

// Añadir un evento para mostrar u ocultar el menú al hacer clic en "Work"
workLink.addEventListener('click', (e) => {
    e.preventDefault(); // Evitamos que el enlace se siga
    // Toggle de la clase para mostrar/ocultar el dropdown
    workDropdown.classList.toggle('show-dropdown');
});

// Si haces clic fuera del menú, lo cerramos
document.addEventListener('click', (e) => {
    // Verificamos si el clic es fuera del enlace y el dropdown
    if (!workLink.contains(e.target) && !workDropdown.contains(e.target)) {
        workDropdown.classList.remove('show-dropdown'); // Lo ocultamos
    }
});
