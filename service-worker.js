const VERSION = "vi-pwa-v3";
const ARCHIVOS_CACHE = [
  "./",
  "./index.html",
  "./manifest.json"
];

self.addEventListener("install", (evento) => {
  evento.waitUntil(
    caches.open(VERSION).then((cache) => cache.addAll(ARCHIVOS_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (evento) => {
  evento.waitUntil(
    caches.keys().then((claves) =>
      Promise.all(
        claves
          .filter((clave) => clave !== VERSION)
          .map((clave) => caches.delete(clave))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (evento) => {
  if (evento.request.method !== "GET") {
    return;
  }

  evento.respondWith(
    caches.match(evento.request).then((enCache) => {
      if (enCache) {
        return enCache;
      }

      return fetch(evento.request)
        .then((respuestaRed) => {
          const copia = respuestaRed.clone();
          caches.open(VERSION).then((cache) => cache.put(evento.request, copia));
          return respuestaRed;
        })
        .catch(() => caches.match("./index.html"));
    })
  );
});
