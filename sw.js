const cacheName = 'weather-app-cache';
const filesToCache = [
'index.html',
'styles.css',
'main.js',
'offline.html',
'image/logo192.png',
'image/logo144.png',
'image/back.png',
'image/good.png',
'image/tranfer.png',
'image/clear.jpg',
'image/sent.jpg',
'image/user.jpg',
'sw.js',
'manifest.json',


];

// Install service worker
self.addEventListener('install', event => {
event.waitUntil(
caches.open(cacheName)
.then(cache => {
return cache.addAll(filesToCache);
})
);
});

// Fetch event handler
self.addEventListener('fetch', event => {
event.respondWith(
caches.match(event.request)
.then(response => {
return response || fetch(event.request);
})
.catch(() => {
return caches.match('offline.html'); // Return cached offline page
})
);
});

// Activate event handler
self.addEventListener('activate', event => {
event.waitUntil(
caches.keys().then(cacheNames => {
return Promise.all(
cacheNames.map(cacheName => {
if (cacheName !== cacheName) {
return caches.delete(cacheName);
}
})
);
})
);
});
