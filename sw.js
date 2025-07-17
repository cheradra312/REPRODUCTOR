// Nombre de la caché para nuestra aplicación
const CACHE_NAME = 'lector-temarios-cache-v1';

// Lista de archivos a cachear para que la app funcione sin conexión
// Esto incluye la página principal, los temarios, y los recursos de CDNs.
const urlsToCache = [
  // Archivo principal
  'index.html',

  // Archivos de Temarios
  'Temario_Adm.html',
  'Temario_Ag.html',
  'Temario_Cos.html',
  'Temario_Carr.html',
  'Temario_F.html',
  'Temario_T.html',
  'Temario_MA.html',

  // Recursos de CDNs (CSS, Fuentes, Iconos)
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  
  // Iconos de la App (del manifest.json)
  'https://placehold.co/192x192/3b82f6/white?text=Lector',
  'https://placehold.co/512x512/3b82f6/white?text=Lector'
];

// Evento 'install': Se dispara cuando el Service Worker se instala por primera vez.
// Aquí es donde cacheamos todos nuestros archivos.
self.addEventListener('install', event => {
  console.log('[Service Worker] Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Abriendo caché y guardando archivos');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[Service Worker] Todos los archivos han sido cacheados. ¡Listo para funcionar sin conexión!');
        return self.skipWaiting();
      })
  );
});

// Evento 'activate': Se dispara cuando el Service Worker se activa.
// Aquí limpiamos cachés antiguas si las hubiera.
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activando...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Borrando caché antigua:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
        console.log('[Service Worker] Reclamando clientes...');
        return self.clients.claim();
    })
  );
});


// Evento 'fetch': Se dispara cada vez que la aplicación pide un recurso (una página, un script, una imagen).
// Intentamos servirlo desde la caché primero. Si no está, lo buscamos en la red.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si encontramos el recurso en la caché, lo devolvemos
        if (response) {
          // console.log('[Service Worker] Sirviendo desde caché:', event.request.url);
          return response;
        }
        
        // Si no está en la caché, lo pedimos a la red
        // console.log('[Service Worker] Pidiendo a la red:', event.request.url);
        return fetch(event.request);
      })
  );
});
