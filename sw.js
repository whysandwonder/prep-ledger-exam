/* Preparation Ledger service worker — offline first, update in the background */
const CACHE = 'ledger-v1';
const ASSETS = ['./','./index.html','./manifest.webmanifest',
  './icon-192.png','./icon-512.png','./icon-maskable-512.png','./apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Serve from cache immediately, then refresh the copy for next time. */
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.open(CACHE).then(async cache => {
      const hit = await cache.match(e.request, { ignoreSearch: true });
      const net = fetch(e.request)
        .then(res => { if (res && res.ok) cache.put(e.request, res.clone()); return res; })
        .catch(() => hit);
      return hit || net;
    })
  );
});
