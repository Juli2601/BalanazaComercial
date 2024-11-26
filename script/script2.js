document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar el botón Conclusión
    const conclusionButton = Array.from(document.querySelectorAll('.boton')).find(btn => btn.textContent === 'Conclusión');
    const departamentosButton = Array.from(document.querySelectorAll('.boton')).find(btn => btn.textContent === 'Departamentos');
    const regionesButton = Array.from(document.querySelectorAll('.boton')).find(btn => btn.textContent === 'Regiones');

    // Contenedores relevantes
    const departamentosContainer = document.getElementById('departamentos-container');
    const regionesContainer = document.getElementById('regiones-container');
    const imagenContainer = document.getElementById('imagen-departamento');

    // Función para manejar el clic en el botón Conclusión
    conclusionButton.addEventListener('click', () => {
        // Restaurar colores originales de los botones Departamentos y Regiones
        if (departamentosButton) departamentosButton.style.backgroundColor = '';
        if (regionesButton) regionesButton.style.backgroundColor = '';

        // Destacar el botón Conclusión
        conclusionButton.style.backgroundColor = '#5dc1b9';

        // Ocultar otros contenedores
        departamentosContainer.style.display = 'none';
        regionesContainer.style.display = 'none';

        // Limpiar el contenedor de imágenes y agregar la imagen de conclusión
        imagenContainer.innerHTML = '';
        
         // Cargar todas las imágenes de conclusión con un ciclo for
    for (let i = 1; i <= 5; i++) {
        const img = document.createElement('img');
        img.src = `images/CONCLUSION/Conclusion${i}.jpg`; // Ruta de las imágenes
        img.alt = `Conclusión ${i}`;
        img.classList.add('imagen') // Guardamos la imagen en el arreglo
        imagenContainer.appendChild(img); // Añadimos la imagen al contenedor
    }

        // Desplazar la vista al contenedor de imágenes
        setTimeout(() => {
            imagenContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    });
});
