// Anas Tech PWA service worker.
// Intentionally does not cache login requests, session tokens, student data, or API responses.
self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});
