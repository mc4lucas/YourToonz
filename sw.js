// // On install - caching the application shell
// self.addEventListener('install', function(event) {
//   event.waitUntil(
//     caches.open('sw-cache').then(function(cache) {
//       // cache any static files that make up the application shell
//       return cache.add('index.html');
//     })
//   );
// });

// // On network request
// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     // Try the cache
//     caches.match(event.request).then(function(response) {
//       //If response found return it, else fetch again
//       return response || fetch(event.request);
//     })
//   );
// });
"use strict";
importScripts('sw-toolbox.js');
toolbox.precache(["index.html","styles.css", "music.js"]);
toolbox.router.get('/images/*', toolbox.cacheFirst);
toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});