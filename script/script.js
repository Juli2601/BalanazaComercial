// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar todos los botones con la clase 'boton'
    const buttons = document.querySelectorAll('.boton');
    const departamentosContainer = document.getElementById('departamentos-container'); // Contenedor para departamentos
    var log = 0;

    // Mapeo de colores por departamento
const coloresRegion = {
    'Amazonas': '#D002FF',
    'Antioquia': '#FFFF67',  // Andina
    'Arauca': '#00FFFE',     // Orinoquia
    'Atlántico': '#FF6600',   // Caribe
    'Bolívar': '#FF6600',     // Caribe
    'Boyacá': '#FFFF67',    // Andina
    'Caldas': '#FFFF67',    // Andina
    'Caquetá': '#D002FF',    // Amazonica
    'Casanare': '#00FFFE',   // Orinoquia
    'Cauca': '#35CB36',      // Pacífica
    'Cesar': '#FF6600',      // Caribe
    'Chocó': '#35CB36',      // Pacífica
    'Córdoba': '#FF6600',    // Caribe
    'Cundinamarca': '#FFFF67', // Andina
    'Guainía': '#D002FF',     // Amazonica
    'Guaviare': '#D002FF',    // Amazonica
    'Huila': '#FFFF67',       // Andina
    'La Guajira': '#FF6600',  // Caribe
    'Magdalena': '#FF6600',   // Caribe
    'Meta': '#00FFFE',        // Orinoquia
    'Nariño': '#35CB36',      // Pacífica
    'N. de Santander': '#FFFF67', // Andina
    'Putumayo': '#D002FF',    // Amazonica
    'Quindío': '#FFFF67',    // Andina
    'Risaralda': '#FFFF67',  // Andina
    'San Andrés': '#3399FE',  // Insular
    'Santander': '#FFFF67',  // Andina
    'Sucre': '#FF6600',      // Caribe
    'Tolima': '#FFFF67',     // Andina
    'Valle del Cauca': '#35CB36', // Pacífica
    'Vaupés': '#D002FF',     // Amazonica
    'Vichada': '#00FFFE',    // Orinoquia
    'Providencias': '#3399FE' // Insular
};

    // Lista de departamentos de Colombia
    const departamentos = [
        'Amazonas', 'Antioquia', 'Arauca', 'Atlántico', 'Bolívar', 'Boyacá', 
        'Caldas', 'Caquetá', 'Casanare', 'Cauca', 'Cesar', 'Chocó', 
        'Córdoba', 'Cundinamarca', 'Guainía', 'Guaviare', 'Huila', 
        'La Guajira', 'Magdalena', 'Meta', 'Nariño', 'N. de Santander', 
        'Putumayo', 'Quindío', 'Risaralda', 'San Andrés', 'Santander', 
        'Sucre', 'Tolima', 'Valle del Cauca', 'Vaupés', 'Vichada', 
        'Providencias' // Separado de San Andrés
    ];

     const conclusionButton = Array.from(buttons).find(btn => btn.textContent === 'Conclusión');
     const resetConclusionButton = () => {
        if (conclusionButton) {
            conclusionButton.classList.remove('active'); // Quitar clase activa
            conclusionButton.style.backgroundColor = ''; // Restaurar color original
        }
    };

    // Añadir un event listener para el clic en cada botón
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Quitar la clase 'active' de todos los botones
            buttons.forEach(btn => btn.classList.remove('active'));

            // Agregar la clase 'active' al botón que fue clicado
            button.classList.add('active');

            // Limpiar el contenedor de departamentos
            departamentosContainer.innerHTML = '';

            // Obtener el contenedor de regiones
const regionesContainer = document.getElementById('regiones-container'); // Contenedor para regiones

if (button.textContent === 'Departamentos') {
    resetConclusionButton();
    log = 1;
    resetConclusionButton();
    // Asegurarse de que el botón de "Regiones" vuelva a su color original
                const regionesButton = Array.from(buttons).find(btn => btn.textContent === 'Regiones');
                if (regionesButton) {
                    regionesButton.style.backgroundColor = ''; // Restaurar color original
                } 
    button.style.backgroundColor = '#5dc1b9';  
    // Ocultar el contenedor de regiones
    regionesContainer.style.display = 'none';

    // Crear botones para cada departamento
    departamentos.forEach(departamento => {
        const deptButton = document.createElement('button');
        deptButton.classList.add('boton'); // Usa la misma clase para el estilo
        deptButton.textContent = departamento; // Nombre del departamento
        deptButton.style.fontSize = '1vw';
        deptButton.style.padding = '2px 2px';
        deptButton.style.minWidth = '150px';
        deptButton.style.color = "black";
        deptButton.style.border = `3px solid ${coloresRegion[departamento] || 'black'}`;
        deptButton.style.backgroundColor = coloresRegion[departamento];
        deptButton.addEventListener('click', () => {
    const imagenContainer = document.getElementById('imagen-departamento');

    // Crear la primera imagen
    const img1 = document.createElement('img');
    img1.src = `images/DEPARTAMENTOS/${departamento}.png`;

    // Crear la segunda imagen que termina en '1.png'
    const img2 = document.createElement('img');
    img2.src = `images/DEPARTAMENTOS/${departamento}1.png`;

    // Limpiar el contenedor de imagen antes de agregar las nuevas imágenes
    imagenContainer.innerHTML = '';
    imagenContainer.appendChild(img1);
    imagenContainer.appendChild(img2);

    // Activar el botón correspondiente
    activarBotonDepartamento(departamento, true);

    // Mover la vista hacia el contenedor de imágenes
    setTimeout(() => {
        imagenContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
        });

        // Añadir el botón al contenedor de departamentos
        departamentosContainer.appendChild(deptButton);
    });

    departamentosContainer.style.backgroundColor = "white";
    departamentosContainer.style.display = 'flex';
    departamentosContainer.style.justifyContent = "center";
    departamentosContainer.style.alignItems = "center";
    departamentosContainer.style.paddingTop = "20px";
    departamentosContainer.style.paddingBottom = "20px";
    departamentosContainer.style.borderRadius = "20px";

                } else if (button.textContent === 'Regiones') {
                    log = 0;
                    resetConclusionButton();
    // Asegurarse de que el botón de "Departamentos" vuelva a su color original
                const departamentosButton = Array.from(buttons).find(btn => btn.textContent === 'Departamentos');
                if (departamentosButton) {
                    departamentosButton.style.backgroundColor = ''; // Restaurar color original
                }
    // Mostrar el contenedor de regiones y ocultar el de departamentos
    regionesContainer.style.display = 'flex';
    departamentosContainer.style.display = 'none';
    button.style.backgroundColor = '#5dc1b9';
            }
            else if (button.id === 'conclusion') {
                // Aquí puedes agregar la lógica para la sección de "Conclusión"
                const conclusionText = document.createElement('p');
                conclusionText.textContent = "Esta es la conclusión del proyecto. Aquí iría más texto o contenido relacionado.";
                conclusionText.style.textAlign = 'center';
                conclusionText.style.fontSize = '1.5rem';
                imagenContainer.innerHTML = '';
                imagenContainer.appendChild(conclusionText);
                imagenContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });

// Función para activar el botón de departamento correspondiente
    const activarBotonDepartamento = (tituloEnlace, cambiarColor) => {
        const boton = Array.from(departamentosContainer.children).find(btn => btn.textContent === tituloEnlace);
        
        if (boton) {
            // Restaurar el color del botón anterior si existe
            if (botonAnterior) {
                botonAnterior.classList.remove('active');
                botonAnterior.style.backgroundColor = 'white'; // Cambia al color original
            }

            // Agregar la clase 'active' al botón encontrado
            boton.classList.add('active');

            // Cambiar el color de fondo según la fuente del clic
            if (cambiarColor) {
                boton.style.backgroundColor = '#9E9E9E'; // Cambia el color a rojo al hacer clic en el botón
            } else {
                boton.style.backgroundColor = '#c1c1c1'; // Cambia el color a azul al hacer clic en el enlace
            }

            // Mover la vista hacia el botón encontrado
            boton.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Actualizar el botón anterior
            botonAnterior = boton;
        } else {
            console.log(`No se encontró el botón para el departamento: ${tituloEnlace}`);
        }
    };

    // Seleccionar todos los enlaces <a> en el SVG con el atributo xlink:title
    const enlaces = document.querySelectorAll('svg a');
    let botonAnterior = null; // Almacena el botón previamente seleccionado

    // Agregar evento de clic a cada enlace
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (event) => {
            event.preventDefault(); // Evitar el comportamiento predeterminado
            if (log == 1) {  
    // Obtener el valor del atributo xlink:title del enlace
    const tituloEnlace = enlace.getAttribute('xlink:title');

    const imagenContainer = document.getElementById('imagen-departamento');
    // Limpiar el contenedor de imágenes antes de agregar las nuevas
    imagenContainer.innerHTML = ''; 

    // Crear la primera imagen
    const img1 = document.createElement('img');
    img1.src = `images/DEPARTAMENTOS/${tituloEnlace}.png`;
    imagenContainer.appendChild(img1);

    // Crear la segunda imagen que termina en '1.png'
    const img2 = document.createElement('img');
    img2.src = `images/DEPARTAMENTOS/${tituloEnlace}1.png`;
    imagenContainer.appendChild(img2);

    // Activar el botón de departamento correspondiente al clic en el enlace
    activarBotonDepartamento(tituloEnlace, false); // Pasar 'false' para cambiar a azul

    // Mover la vista hacia el contenedor de imágenes
    setTimeout(() => {
        imagenContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

        });
    });
});



// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {

        // Mapeo de colores por departamento
const coloresRegion = {
    'Amazonas': '#D002FF',
    'Antioquia': '#FFFF67',  // Andina
    'Arauca': '#00FFFE',     // Orinoquia
    'Atlántico': '#FF6600',   // Caribe
    'Bolívar': '#FF6600',     // Caribe
    'Boyacá': '#FFFF67',    // Andina
    'Caldas': '#FFFF67',    // Andina
    'Caquetá': '#D002FF',    // Amazonica
    'Casanare': '#00FFFE',   // Orinoquia
    'Cauca': '#35CB36',      // Pacífica
    'Cesar': '#FF6600',      // Caribe
    'Chocó': '#35CB36',      // Pacífica
    'Córdoba': '#FF6600',    // Caribe
    'Cundinamarca': '#FFFF67', // Andina
    'Guainía': '#D002FF',     // Amazonica
    'Guaviare': '#D002FF',    // Amazonica
    'Huila': '#FFFF67',       // Andina
    'La Guajira': '#FF6600',  // Caribe
    'Magdalena': '#FF6600',   // Caribe
    'Meta': '#00FFFE',        // Orinoquia
    'Nariño': '#35CB36',      // Pacífica
    'N. de Santander': '#FFFF67', // Andina
    'Putumayo': '#D002FF',    // Amazonica
    'Quindío': '#FFFF67',    // Andina
    'Risaralda': '#FFFF67',  // Andina
    'San Andrés': '#3399FE',  // Insular
    'Santander': '#FFFF67',  // Andina
    'Sucre': '#FF6600',      // Caribe
    'Tolima': '#FFFF67',     // Andina
    'Valle del Cauca': '#35CB36', // Pacífica
    'Vaupés': '#D002FF',     // Amazonica
    'Vichada': '#00FFFE',    // Orinoquia
    'Providencias': '#3399FE' // Insular
};

    // Seleccionar el botón "Volver" por su ID
    const volverButton = document.getElementById('volver-button');
    const imagenContainer = document.getElementById('imagen-departamento');
    const departamentosContainer = document.getElementById('departamentos-container'); // Contenedor de los botones de departamentos
    const regionesContainer = document.getElementById('regiones-container'); // Contenedor para regiones
    
    const resetButtonColors = () => {
        const allButtons = document.querySelectorAll('.comercio-button');
        allButtons.forEach(button => {
            button.style.backgroundColor = 'white';
            button.style.color = '';
        });
    };

    const resetButtonColors2 = () => {
        Array.from(departamentosContainer.children).forEach(boton => {
            const prueba = boton.textContent;
            boton.classList.remove('active'); // Quitar clase 'active'
            boton.style.backgroundColor = coloresRegion[prueba]; // Restaurar color original
        });
    };


    // Añadir un event listener al botón "Volver"
    volverButton.addEventListener('click', () => {
        // Limpiar el contenido del contenedor de la imagen
        imagenContainer.innerHTML = '';

        resetButtonColors2();

        Array.from(regionesContainer.children).forEach(boton => {
            resetButtonColors();
        });


        // Hacer scroll al div donde están los botones
        document.querySelector('.botones').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
