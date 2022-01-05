'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ec4455f8bc4c5babd386db7bd15ba61b",
"assets/assets/images/avatar.jpg": "33cbf71cce7b98daeba4451b98181ebc",
"assets/assets/images/facebook.png": "6a433ae81f6983b1edb15c8853a75818",
"assets/assets/images/github.png": "3af6b878bd2d74a43de5d3bd12168786",
"assets/assets/images/instagram.png": "d036f81463b6fe887db33fe6176272b0",
"assets/assets/images/linkedin.png": "7c2ddc7b8b6595f6d71db4534f0bb098",
"assets/assets/images/stackoverflow.png": "7b0fa961b26a841ec6ee9c83303fbfed",
"assets/assets/images/twitter.png": "e6ea55534ef706a2f7807577a8c50801",
"assets/assets/lang/ar.json": "eca17fdf0d04731295aa765ff122b223",
"assets/assets/lang/en.json": "c4e7ebc37fb557c78b2f2abd4bf89a5f",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/avatar.jpg": "33cbf71cce7b98daeba4451b98181ebc",
"assets/images/facebook.png": "6a433ae81f6983b1edb15c8853a75818",
"assets/images/github.png": "3af6b878bd2d74a43de5d3bd12168786",
"assets/images/hand.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/images/instagram.png": "d036f81463b6fe887db33fe6176272b0",
"assets/images/linkedin.png": "7c2ddc7b8b6595f6d71db4534f0bb098",
"assets/images/portfolio.png": "db6f5532c57c1f3b3548b64a348125f4",
"assets/images/stackoverflow.png": "7b0fa961b26a841ec6ee9c83303fbfed",
"assets/images/twitter.png": "e6ea55534ef706a2f7807577a8c50801",
"assets/lang/ar.json": "eca17fdf0d04731295aa765ff122b223",
"assets/lang/en.json": "c4e7ebc37fb557c78b2f2abd4bf89a5f",
"assets/NOTICES": "2397f15ff2fbfa0765678e2f7f8d9e9c",
"favicon.ico": "902ef4a84e64a1874682c99f61b3336d",
"icons/Icon-192.png": "e630dae9b2bfef1a3c14460ee10ac66a",
"icons/Icon-512.png": "ecb03bb4265087047e5b213348efc2c7",
"index.html": "4ba89cfb659d81c5f91dab02709a6f69",
"/": "4ba89cfb659d81c5f91dab02709a6f69",
"LICENSE": "afc5be91e01f7955e64ee5e477832e1b",
"main.dart.js": "63cfc3c4c49ce64f6a578b18c57231d0",
"manifest.json": "60c0ee728c14e621aeab8065e443bc47",
"robots.txt": "388ed88eec82ddeacbf877ee7dc4b225",
"splash/img/dark-1x.png": "6c4a4645a4057995ba8ec5980d004f86",
"splash/img/dark-2x.png": "f683fd2d74a5aad47e8d6cb984ed3279",
"splash/img/dark-3x.png": "ada67b1bdaeb825e55ade725200a5738",
"splash/img/dark-4x.png": "116c50fea1c62a73709d028ef5603532",
"splash/img/light-1x.png": "6c4a4645a4057995ba8ec5980d004f86",
"splash/img/light-2x.png": "f683fd2d74a5aad47e8d6cb984ed3279",
"splash/img/light-3x.png": "ada67b1bdaeb825e55ade725200a5738",
"splash/img/light-4x.png": "116c50fea1c62a73709d028ef5603532",
"splash/style.css": "a5c6dd3b764850232f2e4948926a5a67",
"version.json": "48765e8b5b0e570608d3801b53347034"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
