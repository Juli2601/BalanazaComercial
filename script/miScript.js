var tip = 0;

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.boton');
    const regionesContainer = document.getElementById('regiones-container'); // Contenedor para regiones
    const imagenDepartamento = document.getElementById('imagen-departamento'); // Contenedor de imágenes
    const regiones = ['Andina', 'Caribe', 'Pacifica', 'Orinoquia', 'Amazonia', 'Insular'];

    const regionColors = {
  'Andina': '#FFFF67',  
  'Caribe': '#FF6600',  
  'Pacifica': '#35CB36', 
  'Orinoquia': '#00FFFE',
  'Amazonia': '#D002FF' ,
  'Insular' : '#3399FE' 
};

    const regionColorsSombreado = {
  'Andina': '#FFFFAF',  
  'Caribe': '#FFB685',  
  'Pacifica': '#A6E8A6', 
  'Orinoquia': '#89FFFF',
  'Amazonia': '#EC9BFF' ,
  'Insular' : '#97CBFF' 
};

    const departamentos = [
        { nombre: 'Amazonas', region: 'Amazonia' },
        { nombre: 'Antioquia', region: 'Andina' },
        { nombre: 'Arauca', region: 'Orinoquia' },
        { nombre: 'Atlántico', region: 'Caribe' },
        { nombre: 'Bolívar', region: 'Caribe' },
        { nombre: 'Boyacá', region: 'Andina' },
        { nombre: 'Caldas', region: 'Andina' },
        { nombre: 'Caquetá', region: 'Amazonia' },
        { nombre: 'Casanare', region: 'Orinoquia' },
        { nombre: 'Cauca', region: 'Pacifica' },
        { nombre: 'Cesar', region: 'Caribe' },
        { nombre: 'Chocó', region: 'Pacifica' },
        { nombre: 'Córdoba', region: 'Caribe' },
        { nombre: 'Cundinamarca', region: 'Andina' },
        { nombre: 'Guainía', region: 'Amazonia' },
        { nombre: 'Guaviare', region: 'Amazonia' },
        { nombre: 'Huila', region: 'Andina' },
        { nombre: 'La Guajira', region: 'Caribe' },
        { nombre: 'Magdalena', region: 'Caribe' },
        { nombre: 'Meta', region: 'Orinoquia' },
        { nombre: 'Nariño', region: 'Pacifica' },
        { nombre: 'Norte de Santander', region: 'Andina' },
        { nombre: 'Putumayo', region: 'Amazonia' },
        { nombre: 'Quindío', region: 'Andina' },
        { nombre: 'Risaralda', region: 'Andina' },
        { nombre: 'San Andrés', region: 'Insular' },
        { nombre: 'Santander', region: 'Andina' },
        { nombre: 'Sucre', region: 'Caribe' },
        { nombre: 'Tolima', region: 'Andina' },
        { nombre: 'Valle del Cauca', region: 'Pacifica' },
        { nombre: 'Vaupés', region: 'Amazonia' },
        { nombre: 'Vichada', region: 'Orinoquia' },
        { nombre: 'Providencias', region: 'Insular' }
    ];

    let balanzaButton = null;
    let exportacionesButton = null;
    let importacionesButton = null;
    let producto1Button = null;
    let producto2Button = null;
    let analisis1Button = null;
    let analisis2Button = null;
    let sectorButton1 = null;
    let sectorButton2 = null;;
    let cifrarValorUSD1Button = null;
    let cifrarValorUSD2Button = null;

    const restablecerBotones = () => {
        Array.from(regionesContainer.children).forEach(btn => {
            btn.style.backgroundColor = '';
        });
    };

 const crearBotonesComercio = (region) => {
    const contenedorExistente = document.querySelector('.contenedor-comercio');
    if (contenedorExistente) {
        contenedorExistente.remove();
    }

    // Eliminar los botones previos
    const botonesPrevios = document.querySelectorAll('.comercio-button');
    botonesPrevios.forEach(btn => btn.remove());

    // Crear el contenedor principal para exportaciones e importaciones
    const contenedorPrincipal = document.createElement('div');
    contenedorPrincipal.classList.add('contenedor-comercio');
    contenedorPrincipal.style.display = 'flex';
    contenedorPrincipal.style.flexDirection = 'column'; // Colocamos los elementos en columna
    contenedorPrincipal.style.alignItems = 'center';
    contenedorPrincipal.style.backgroundColor = regionColorsSombreado[region];
    contenedorPrincipal.style.gap = '10px'; // Espaciado entre el botón y los contenedores

    // Crear y agregar el botón de Balanza Comercial en la parte superior
    const resetButtonColors = () => {
        const allButtons = document.querySelectorAll('.comercio-button');
        allButtons.forEach(button => {
            button.style.backgroundColor = '';
            button.style.color = '';
        });
    };

    const handleButtonClick = (button, colorFondo) => {
        resetButtonColors();
        button.style.backgroundColor = colorFondo;
        button.style.color = 'white';
    };

    const crearBoton = (texto, colorBorde, colorFondo, clickHandler, divDestino, useInnerHTML = false) => {
        const button = document.createElement('button');
        button.classList.add('boton', 'comercio-button');

        if (useInnerHTML) {
            button.innerHTML = texto;
        } else {
            button.textContent = texto;
        }

        button.style.fontSize = '1.2vw';
        button.style.padding = '3px 10px';
        button.style.minWidth = '70px';
        button.style.border = `3px solid ${colorBorde}`;
        button.addEventListener('click', () => {
            clickHandler(button);
            setTimeout(() => {
                imagenDepartamento.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        });

        divDestino.appendChild(button);
    };

    // Crear el botón de "Balanza Comercial" y agregarlo al contenedor principal
    const balanzaButton = crearBoton('Balanza Comercial', '#0F8F3A', '#0F8F3A', (button) => {
        tip = 3;
        handleButtonClick(button, '#0F8F3A');
        mostrarImagenes(region, 'BALANZA');
    }, contenedorPrincipal); // Se agrega al contenedor principal como el primer hijo

    // Crear un subcontenedor para exportaciones e importaciones y alinear en fila
    const contenedorFilas = document.createElement('div');
    contenedorFilas.style.display = 'flex';
    contenedorFilas.style.justifyContent = 'space-around';
    contenedorFilas.style.width = '100%';
    contenedorFilas.style.gap = '20px';

    // Crear los contenedores de exportaciones e importaciones
    let contenedorExportaciones = document.getElementById('exportaciones');
    let contenedorImportaciones = document.getElementById('importaciones');

    if (!contenedorExportaciones) {
        contenedorExportaciones = document.createElement('div');
        contenedorExportaciones.style.flex = '1';
        contenedorExportaciones.style.padding = '10px';
        contenedorExportaciones.style.borderRadius = '10px';
        contenedorExportaciones.style.backgroundColor = regionColorsSombreado[region];

        // Centramos los botones en el contenedor de exportaciones
        contenedorExportaciones.style.display = 'flex';
        contenedorExportaciones.style.flexDirection = 'column'; // Para alinear los botones en columna
        contenedorExportaciones.style.alignItems = 'center'; // Centramos horizontalmente
        contenedorExportaciones.style.gap = '10px'; // Espacio entre los botones

        contenedorFilas.appendChild(contenedorExportaciones);
    }

    if (!contenedorImportaciones) {
        contenedorImportaciones = document.createElement('div');
        contenedorImportaciones.style.flex = '1';
        contenedorImportaciones.style.padding = '10px';
        contenedorImportaciones.style.borderRadius = '10px';
        contenedorImportaciones.style.backgroundColor = regionColorsSombreado[region];
        
        // Centramos los botones en el contenedor de importaciones
        contenedorImportaciones.style.display = 'flex';
        contenedorImportaciones.style.flexDirection = 'column'; // Para alinear los botones en columna
        contenedorImportaciones.style.alignItems = 'center'; // Centramos horizontalmente
        contenedorImportaciones.style.gap = '10px'; // Espacio entre los botones

        contenedorFilas.appendChild(contenedorImportaciones);
    }

    // Crear los botones de Exportaciones e Importaciones
    crearBoton('Exportaciones', '#31BCE7', '#31BCE7', (button) => {
        tip = 0;
        handleButtonClick(button, '#31BCE7');
        mostrarImagen(region, 'EXPORTACIONES');
    }, contenedorExportaciones);

    crearBoton('Importaciones', '#B639CB', '#B639CB', (button) => {
        tip = 1;
        handleButtonClick(button, '#B639CB');
        mostrarImagen(region, 'IMPORTACIONES');
    }, contenedorImportaciones);

    // Agregar botones adicionales a los contenedores de Exportaciones e Importaciones

    crearBoton('Producto', '#31BCE7', '#31BCE7', (button) => {
        tip = 0;
        handleButtonClick(button, '#31BCE7');
        mostrarImagenProducto(region, 'EXPORTACIONES');
    }, contenedorExportaciones);

    crearBoton('Producto', '#B639CB', '#B639CB', (button) => {
        tip = 1;
        handleButtonClick(button, '#B639CB');
        mostrarImagenProducto(region, 'IMPORTACIONES');
    }, contenedorImportaciones);

    crearBoton('Análisis<br>Productos', '#31BCE7', '#31BCE7', (button) => {
        tip = 0;
        handleButtonClick(button, '#31BCE7');
        mostrarImagenAnalisis(region, 'EXPORTACIONES');
    }, contenedorExportaciones, true);

    crearBoton('Análisis<br>Productos', '#B639CB', '#B639CB', (button) => {
        tip = 1;
        handleButtonClick(button, '#B639CB');
        mostrarImagenAnalisis(region, 'IMPORTACIONES');
    }, contenedorImportaciones, true);

    crearBoton('Sector', '#31BCE7', '#31BCE7', (button) => {
        tip = 0;
        handleButtonClick(button, '#31BCE7');
        mostrarImagenSector(region, 'EXPORTACIONES');
    }, contenedorExportaciones);

    crearBoton('Sector', '#B639CB', '#B639CB', (button) => {
        tip = 1;
        handleButtonClick(button, '#B639CB');
        mostrarImagenSector(region, 'IMPORTACIONES');
    }, contenedorImportaciones);

    crearBoton('Paises', '#31BCE7', '#31BCE7', (button) => {
        tip = 0;
        handleButtonClick(button, '#31BCE7');
        mostrarImagenPaises(region, 'EXPORTACIONES');
    }, contenedorExportaciones);

    crearBoton('Paises', '#B639CB', '#B639CB', (button) => {
        tip = 1;
        handleButtonClick(button, '#B639CB');
        mostrarImagenPaises(region, 'IMPORTACIONES');
    }, contenedorImportaciones);



    // Agregar los contenedores de exportaciones e importaciones al contenedor principal
    contenedorPrincipal.appendChild(contenedorFilas);

    // Agregar el contenedor principal al regionesContainer
    regionesContainer.appendChild(contenedorPrincipal);

    setTimeout(() => {
        contenedorExportaciones.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
};

    // Función para mostrar las imágenes en "Balanza Comercial"
    const mostrarImagenes = (region, tipo) => {
        imagenDepartamento.innerHTML = '';
        for (let i = 1; i <= 3; i++) {
            const img = document.createElement('img');
            img.src = `images/${tipo}/${region}${i}.png`;
            img.alt = `${region} ${tipo} ${i}`;
            img.classList.add('imagen');
            imagenDepartamento.appendChild(img);
        }
    };

    // Función para mostrar una imagen específica en "Exportaciones" o "Importaciones"
    const mostrarImagen = (region, tipo) => {
        imagenDepartamento.innerHTML = '';
        const img = document.createElement('img');
        img.src = `images/${tipo}/${region}.png`;
        img.alt = `${region} ${tipo}`;
        img.classList.add('imagen');
        imagenDepartamento.appendChild(img);
    };

    const mostrarImagenProducto = (region, tipo) => {
    imagenDepartamento.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas imágenes

    let imagenesCargadas = false; // Bandera para verificar si al menos una imagen se cargó

    // Intentar cargar imágenes del 1 al 3
    for (let i = 1; i <= 3; i++) {
        const img = document.createElement('img');
        img.src = `images/PRODUCTOS/${tipo}/${region}${i}.png`;
        img.alt = `${region} ${tipo} ${i}`;
        img.classList.add('imagen');

        // Esperar a que la imagen cargue correctamente
        img.onload = () => {
            imagenesCargadas = true; // Al menos una imagen se cargó correctamente
        };

        // Si la imagen no se carga, no agregue al contenedor
        img.onerror = () => {
            img.style.display = 'none'; // No mostrar imágenes que no existen
        };

        // Agregar la imagen al contenedor, sin importar si se carga correctamente o no
        imagenDepartamento.appendChild(img);
    }
};

    const mostrarImagenAnalisis = (region, tipo) => {
    imagenDepartamento.innerHTML = '';
    const img = document.createElement('img');
    img.src = `images/PRODUCTOS/ANALISIS TOTAL/${tipo}/${region}.png`; // Ruta específica del producto
    img.alt = `${region} ${tipo}`;
    img.classList.add('imagen');
    imagenDepartamento.appendChild(img)
};

const mostrarImagenPaises = (region, tipo) => {
    imagenDepartamento.innerHTML = '';
    const img = document.createElement('img');
    img.src = `images/PAISES/${tipo}/${region}.png`; // Ruta específica del producto
    img.alt = `${region} ${tipo}`;
    img.classList.add('imagen');
    imagenDepartamento.appendChild(img)
};

const mostrarImagenSector = (region, tipo) => {
    imagenDepartamento.innerHTML = '';
    const img = document.createElement('img');
    img.src = `images/SECTOR/${tipo}/${region}.png`; // Ruta específica del producto
    img.alt = `${region} ${tipo}`;
    img.classList.add('imagen');
    imagenDepartamento.appendChild(img)
};

    // Evento para cada botón principal
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            regionesContainer.innerHTML = '';

            if (button.textContent === 'Regiones') {
                balanzaButton = null;
                exportacionesButton = null;
                importacionesButton = null;
                producto1Button = null;
                producto2Button = null;
                analisis1Button = null;
                analisis2Button = null;
                sectorButton1 = null;
                sectorButton2 = null;;
                cifrarValorUSD1Button = null;
                cifrarValorUSD2Button = null;

                regiones.forEach(region => {
                    const regionButton = document.createElement('button');
                    regionButton.classList.add('boton');
                    regionButton.style.border = `4px solid ${regionColors[region]}`;
                    regionButton.textContent = region;
                    regionButton.addEventListener('click', () => {
                        restablecerBotones();
                        regionButton.style.backgroundColor = regionColors[region];
                        crearBotonesComercio(region);

                        setTimeout(() => {
                            contenedorBotones.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }, 300);
                    });

                    regionesContainer.appendChild(regionButton);
                });

                regionesContainer.style.display = 'flex';
                regionesContainer.style.backgroundColor = 'white';
                regionesContainer.style.justifyContent = "center";    // Centra los elementos horizontalmente
                regionesContainer.style.alignItems = "center"
                regionesContainer.style.paddingTop = "20px";
                regionesContainer.style.paddingBottom = "20px";
                regionesContainer.style.borderRadius = "20px";
            }
        });
    });

    // Función para activar el botón de región y cambiar su color
    const activarBotonRegion = (region) => {
        const botonRegion = Array.from(regionesContainer.children).find(btn => btn.textContent === region);
        if (botonRegion) {
            restablecerBotones();
            botonRegion.style.backgroundColor = regionColorsSombreado[region];
            botonRegion.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            console.log(`No se encontró el botón para la región: ${region}`);
        }
    };

    const enlaces = document.querySelectorAll('svg a');
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (event) => {
            event.preventDefault();
            const tituloEnlace = enlace.getAttribute('xlink:title');
            const departamento = departamentos.find(dep => dep.nombre === tituloEnlace);
            
            if (departamento) {
                const region = departamento.region;
                
                // Restablecer los botones de región
                restablecerBotones();

                // Activar el botón de región
                const botonRegion = Array.from(regionesContainer.children).find(btn => btn.textContent === region);
                if (botonRegion) {
                    botonRegion.style.backgroundColor = regionColors[region]; // Activar color de la región
                }

                // Crear los botones de comercio para la región seleccionada
                crearBotonesComercio(region);

                // Desplazar la vista hacia los botones de comercio
                setTimeout(() => {
                    contenedorBotones.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            }
        });
    });
});

