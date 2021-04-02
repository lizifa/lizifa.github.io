importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');
workbox.routing.registerRoute(/\.(?:js|css|html)$/, workbox.strategies.networkFirst());
workbox.routing.registerRoute(location.href, workbox.strategies.networkFirst());
