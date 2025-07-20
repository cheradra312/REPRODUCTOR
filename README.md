# Lector de Temarios por Bloques

## Descripción General

El **Lector de Temarios por Bloques** es una aplicación web diseñada para facilitar el estudio de temarios extensos mediante la conversión de texto a voz. Permite a los usuarios cargar diferentes bloques temáticos, seleccionar temas y epígrafes específicos, y escucharlos de manera controlada y personalizada. La aplicación está optimizada para ser una Herramienta de Estudio Progresiva (PWA), lo que significa que puede ser "instalada" en dispositivos móviles y de escritorio para un acceso rápido y funcionalidades sin conexión.

---

## Características Principales

- **Selección de Bloques Temáticos:** La pantalla de inicio permite elegir entre diferentes bloques de contenido (Administrativo, Aguas, Costas, etc.).
- **Navegación por Contenido:**
    - Selección de **Temas** dentro de un bloque.
    - Selección múltiple de **Epígrafes** específicos o el tema completo.
    - Desplegable para saltar a cualquier **párrafo** de la selección actual.
- **Controles de Reproducción Avanzados:**
    - **Play/Pausa, Párrafo Anterior/Siguiente:** Controles básicos para una navegación fluida.
    - **Control de Velocidad:** Ajusta la velocidad de la locución desde 0.5x hasta 2.0x.
    - **Control de Repeticiones:** Configura el número de veces que cada párrafo debe repetirse.
    - **Modo Bucle:** Repite la selección actual indefinidamente.
- **Modo Estudio:**
    - Un modo de reproducción especializado que primero lee cada párrafo las veces seleccionadas en "Repetir".
    - Después de terminar con un epígrafe, lo repasa leyéndolo una vez completo antes de pasar al siguiente.
- **Personalización de la Interfaz:**
    - **Selector de Voz:** Elige entre las voces disponibles en español en tu navegador o sistema operativo.
    - **Ajuste de Tamaño de Letra:** Modifica el tamaño del texto para una lectura más cómoda.
    - **Modo Pantalla Completa:** Expande el área de texto para ocupar toda la pantalla y minimizar distracciones.
- **Integración con el Sistema:**
    - **PWA (Progressive Web App):** Ofrece un botón para instalar la aplicación en el dispositivo, permitiendo un acceso similar a una app nativa.
    - **API de Media Session:** Se integra con los controles multimedia del dispositivo (móvil y escritorio), permitiendo controlar la reproducción desde la pantalla de bloqueo o notificaciones.
    - **API Wake Lock:** Evita que la pantalla del dispositivo se apague mientras la aplicación está leyendo en primer plano.

---

## ¿Cómo Empezar?

1.  **Abre el archivo `index.html`** en un navegador web moderno (como Chrome, Firefox, Edge o Safari).
2.  **Selecciona un Bloque Temático** de la pantalla de inicio.
3.  **Configura tu Selección:**
    - Elige un **Tema** del primer menú desplegable.
    - Por defecto, se seleccionará el "Tema Completo". Si deseas estudiar partes específicas, haz clic en el botón de **Epígrafes** y marca los que te interesen.
4.  **Inicia la Reproducción:**
    - Pulsa el botón grande de **Play** para comenzar la lectura.
    - Utiliza los botones de **párrafo anterior/siguiente** o la barra espaciadora para controlar el flujo.
5.  **Personaliza tu Estudio:**
    - Activa el **Modo Estudio** pulsando el icono del cerebro.
    - Ajusta las **repeticiones**, la **velocidad** y la **voz** desde el panel de "Opciones de Reproducción".

---

## Estructura de Archivos

Para que la aplicación funcione correctamente, asegúrate de tener la siguiente estructura de archivos:


/
|-- index.html              # El archivo principal de la aplicación
|-- Temario_Adm.html        # Archivo de contenido para el bloque Administrativo
|-- Temario_Ag.html         # Archivo de contenido para el bloque Aguas
|-- ... (otros archivos de temario)
|-- manifest.json           # Manifiesto para la PWA
|-- sw.js                   # Service Worker (opcional, para offline)
|-- runner.js               # Script para tareas en segundo plano (opcional)
|-- (iconos de la app)      # Iconos referenciados en el manifest.json


**Nota:** Los archivos de temario (`Temario_*.html`) deben contener el texto estructurado con etiquetas HTML como `<section>`, `<h1>`, `<h2>`, `<p>`, etc., para que el lector pueda interpretarlos correctamente.

---

## Tecnologías Utilizadas

- **HTML5**
- **CSS3** con **Tailwind CSS** para un diseño rápido y responsivo.
- **JavaScript (ES6+)** para toda la lógica de la aplicación.
- **Web Speech API (`SpeechSynthesis`):** El motor principal para la conversión de texto a voz.
- **Progressive Web App (PWA):** A través del `manifest.json` y un `Service Worker`.

---

## Posibles Mejoras a Futuro

- **Guardado de Preferencias:** Almacenar la voz, velocidad y otras configuraciones del usuario en `localStorage`.
- **Sincronización de Progreso:** Guardar el último punto de lectura para continuar más tarde.
- **Importación de Archivos:** Permitir a los usuarios cargar sus propios archivos `.txt` o `.html`.
- **Resaltado de Sintaxis Avanzado:** Mejorar el resaltado de palabras durante la lectura.
