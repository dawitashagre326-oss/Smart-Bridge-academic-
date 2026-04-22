const CACHE_NAME = 'smart-bridge-v1';
const urlsToCache = [
  '/',
  '/index.html', // የፋይልህ ስም index.html ከሆነ
  'https://telegram.org/js/telegram-web-app.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
