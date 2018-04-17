importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js'
)

workbox.clientsClaim = true
workbox.skipWaiting = true

workbox.core.setCacheNameDetails({
  prefix: 'rnm-pwa',
  precache: 'app-shell',
  googleAnalytics: 'ga',
})

workbox.routing.registerRoute(
  /.*(?:akx-sp-api)\.now.sh.*$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'api',
  })
)

workbox.precaching.precacheAndRoute([])
