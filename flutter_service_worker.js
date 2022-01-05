'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "3514a4c5c98942cb98960da551b0f760",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "37717a216634198a2da2083ea386f680",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c48067a2d47a875d196bff82da9766bf",
".git/logs/refs/heads/main": "415c30e18a64c2d13b7d66d220c4a1c8",
".git/logs/refs/remotes/origin/main": "d1ab22a23cd9773a880efb753d99f8c8",
".git/objects/00/f90d08fd12e3b4404d3aab938e5944b7955e17": "416b5ec624ea4602fbbe56bc0122ed4c",
".git/objects/13/af0242863edcfb61df684c71551949c35ca1a8": "3c1acf6983a2bef6f9e16957502a6613",
".git/objects/1b/6b28d43b7af574b77913a7f421a1707b3ac397": "7ea25e7a52a481a0ee1538ec7658b2db",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/2c/ccae78281cd2afb8671edae1efc09ff30bec99": "41ec5883c9b422da06bdab6ee5074f96",
".git/objects/30/0d5bfdc9eeba24b37a2c7a7a512f5b96387163": "17aeae49f869aa624561b797fc15f320",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/b9181070d235fc0a5e09ae2f484a79ee37a68d": "86c5d706d165029a4358035c9a30d70e",
".git/objects/36/34633fa5e87312c46a1f1b4dbb3c0a9d5a8fab": "88081f6677acae26b0bc36856a7b126d",
".git/objects/3a/8022ccf31092f700fbf0751cc62489338cf38b": "18c2580e9e992cb93f0ec5f66840c609",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3d/88580abf589ea132a0f7fbdb8996bfe061b872": "7a165fdaab10739f6dabbae2e02be3b4",
".git/objects/3f/9199b51626b2a0d1f328ab8ab665d14ab1e748": "d7451ac6885770c98f3b3813454ed04d",
".git/objects/40/9fe97051016c3a23132c96708da4768af3fb57": "ba8d01178cee195b373227ce22a95b8b",
".git/objects/4a/86eee0cd925b0bbe6a4b63c04e5626863fd9aa": "d07bab9fe6e4506e0a2741720382057e",
".git/objects/54/d82efd2eb90bdcdd21794614f659ba4b87ed21": "040cedc8b4048d988df58d340f584d44",
".git/objects/6b/b2ef7ce4d5e9d5221ed9f1187e78a30397ba47": "073672fb2bec4454e07a6638a2e8b874",
".git/objects/6f/27bb66a3469f5c7b71b7abe8b47636dc0fcefb": "8b04a9e6f221fc61d889716529535afd",
".git/objects/78/0fbcd7b36a349aa261161b4d9604d767202f0a": "37a0afa21f20c4680b87d4a0c8186577",
".git/objects/8d/1610241dca3fc98898f21bcd09994b5a5ccf57": "a3c8e8592b99ecd40356b370091ea1b7",
".git/objects/8e/5a6c7a7c3751d62c050b9af34b80eadfeabedc": "df667372ac1cd18d3611a328d6550f05",
".git/objects/93/70535ad4bb8639f8498fabd778307133842820": "650c2cc6774a0fe47ff7c97078da5a0a",
".git/objects/94/c9a0a2dec52e67ab43d55f530f58784a42a7e2": "abdd8e6928393607604dfe52ec7ea7e8",
".git/objects/98/a2324f19bd8efd35d2b6414b8647e22f2155c8": "be6dd5bb39feae79e45f4040e2e1ec85",
".git/objects/9b/b56a0e24b842f1c2b09bbfa23e450ec42b92c8": "469b3c89aa65dc699e84d0c679d72671",
".git/objects/9e/8989dc5fd4387212ff4e35b6e6d18d17ef8a32": "c94c7a274845a7349a032000e78643bc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/efda0f5c0b6d7d5550e15c3e2f02c9b2068438": "148aecf31fb484248a8c47058b44e342",
".git/objects/cf/ec173f0ee35f93e0d2b9f5fbdcb8b09b4bef45": "aa00765338d8d54d765062c3b9ce3142",
".git/objects/d0/9c7b911c9e1bdea32c97ebce37142130cfd6e9": "8ee3b7b5283b68977f070521827d44ae",
".git/objects/d7/0cb8e2ea7365f6b882826c391cd3bd14b5c98e": "44470cf72c9a5cfa713937554790ef85",
".git/objects/de/e30c4f323ea5b7d8a11b7b31be61e30deb2d77": "f4a4745332f446ac473c1c293bf7a78d",
".git/objects/de/f87b321e53f1a87ae665c4464f7fff1afd6e4a": "9e23b99bafc6a7971bc96143d98154bc",
".git/objects/ea/591d8d699740c8957be9336431cf5aeee9f0ba": "f2b41b31071e84a5aa67acef1076927f",
".git/objects/eb/e85660a74eed7c8117b17a0889b2b4d528eb5f": "1c040acc7935973f9504df2a0688cb49",
".git/objects/f5/0c0d5f88e9a09a8971316059fcf4a14ad0da7c": "55a35c23f0c31246908548ab3a6aa04a",
".git/objects/f6/1afa65b1e6c53814325e1c694c35de7a75b67f": "5a90e3636b2f01818a034b550b6fa981",
".git/objects/fa/b497f75f63cc304fbc5ed7011635015af63cbc": "309525b96146417a256e3b179d5f6967",
".git/objects/fd/7f1c180d57f239da21d3b048ad1b400fab02e4": "867edc6975f9a9c53888d59ea6b5c141",
".git/objects/fe/c3dff25570368cedec0017f0fb16257840cecf": "fede3e4e6f6616b28559bba5187b5684",
".git/refs/heads/main": "71da6e4e5e24c22a5ae5f82ff3f1fb59",
".git/refs/remotes/origin/main": "71da6e4e5e24c22a5ae5f82ff3f1fb59",
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
"index.html": "759d1e37ffd029a6fe7050184fd6042a",
"/": "759d1e37ffd029a6fe7050184fd6042a",
"LICENSE": "afc5be91e01f7955e64ee5e477832e1b",
"main.dart.js": "9dc96517cf7b9515c1b60fc4eb467abf",
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
