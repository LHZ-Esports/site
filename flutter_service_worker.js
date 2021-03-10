'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "db2df7ea7a07686a31ae882f4d944e9d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "effa09c776b17c37270ea6d3eced17f1",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "8f98890f00abdc0c1a084a642b03f314",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c0cf610d6c02cc8da35b9d5ad0f207a6",
".git/logs/refs/heads/master": "c0cf610d6c02cc8da35b9d5ad0f207a6",
".git/logs/refs/remotes/origin/main": "42f0b81daacf71c113154e7edb5f0b00",
".git/logs/refs/remotes/origin/master": "1434bdb6c2e6cd1eedf77a3b9bbc8978",
".git/objects/00/79c7135f5b4d33e503afdd55c8e8bc8534a070": "11e6173b059ce81a4ce0ac227c2412dd",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/14/78033b93a06357c59abfd897f96278199595a5": "76fbc39babdfb81a5f35621dda4ed140",
".git/objects/19/168d8bf65c22907bcf500d41afd367ec5f0021": "c6f2feeee13e4e4a0122404c7aa0b73e",
".git/objects/1f/754d259e7cc1c8e03adbfefa86bd3ce3ba1dfc": "9060a264a640e13ce2dc067cfb8acb8d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/30/5e7d0f6c35b8e0278351e9571c6ce35d04fe54": "856e6c3fb27e194d9ee0e13220bb980e",
".git/objects/35/b178efcb8022383855a4bd1d11334654bce3c9": "b0152e1f60892c59a8206f23ab465cd4",
".git/objects/35/b3f09a2f71bb02d0afc5d7ae687b3cc68b7350": "b61e9afa1642e9bfa2cfdd860a13f153",
".git/objects/45/f8b530fada88b0a60acd85ee852ab1b0e785f7": "f0f83e0cf36699150d3ac7ba597d64cc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/64/cc1973440ca342b01a9081e2955053a5744051": "8df9bad704797ea892cbbf236df28dd0",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/6a/11da007d222fe19158798e5c460f6fca22e37b": "33fcf69c496c39dcea22845bee1a5a32",
".git/objects/76/6e95023210769d114e9458e1253fd5acad1a40": "8e30906d48c41b624834eeae98dc02ff",
".git/objects/79/54f7ca8eabb3e2b517f189346b181225024005": "e145cfd11c0d01b14f85805bb5a9bf9e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/63000cbfe0bdc8a329a9743c0d005153062fa1": "cbd8cf486b1832dabc5e1c8310fade4d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/4cdf6ac9d7b184de788a3e95e594d992ab20fb": "07c1e40f0c6ef3bb1b1907f3eedb6ee6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/e237c135b708f3304a791ea6a3a07bebdd202c": "88f39953ff432db32fa6178cf25e577a",
".git/objects/99/fdcbe82cb22d049146c7618653015b1c63d842": "18536e55fe09f084c577a21a854b1d70",
".git/objects/9f/262a2a3631c812afc885bb90d7d4879e4293ef": "1353d9561e9411e18e1888dbbf9aca15",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/8e876db8a9b31440c30830474057707f12f3a9": "1e1ce619f6ec3487cfd4fdb160ffc102",
".git/objects/b1/f9ba881a972fd5ea23b6536d5cc92d0a34d6ed": "26154bb1a223c95e96f4981364e41235",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/58c90d742bf6a08ed44122f1651801ba7131c0": "471d414314c9ddff6a0165328fdbe0af",
".git/objects/c0/82c83335931128f972c3f05dc6efb4e28482f7": "8d12323e5841a4e0bccef158f20dc87a",
".git/objects/c4/192631f25b34d77a7f159aa0da0e3ae99c4ef4": "546c588f67767790fc70913da1a77878",
".git/objects/c5/a11775ae2e423f968e974a35eeb18ba8dafb96": "026d01845eda38250b9eba2cbe5b7235",
".git/objects/c7/7dc0a62e207a218bc93d962a194bf808795aa6": "9bf9d79fa7caabb6415254ef00ed8e97",
".git/objects/da/3df5f3b09a3d5c4d671ff4f5eb7896aa757f8c": "56047d65e1355a1b6f1b2beb4011ff02",
".git/objects/db/1d9fa5a3058ebd89d1c24295da1ddb5fe2014b": "9e9257d7c7b6fa1c5adb8468ce1c2c33",
".git/objects/de/ae3aba2c7e83c4ce19751ca338ea02d0de6fd4": "0dfd9c64666b5bb998635e5b006f623e",
".git/objects/e0/a98f645a6ae1c1bd7db5e4cdb52f6db7f35dad": "0ab4f8d82137cdf6ae5c4aaf41524559",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ef/b110293e895a48445c8c551c6d368dacbf75ba": "d0c9cb54b22d12bc7828f954a8e4db44",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f5/23476f25742806670814b45e29c14ba1f125d0": "096638b2e3ce7a1f3cf53f7d5f94b04a",
".git/objects/fe/8988cef5771c69cb186fb601466fc21e9fc293": "e50150e5ed08dc6f59aee62f5fe978ed",
".git/ORIG_HEAD": "5bafbc06cd631c6b1d0e284c719137b5",
".git/refs/heads/main": "dadfb9a9319ba65fd2b1fb7ecb12c983",
".git/refs/heads/master": "5bafbc06cd631c6b1d0e284c719137b5",
".git/refs/remotes/origin/main": "2e748b710f7e54041465a5d274a884eb",
".git/refs/remotes/origin/master": "5bafbc06cd631c6b1d0e284c719137b5",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "a8d1d130b9909728d724354dc06becc1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "33f470a2d024b1b3b2e80ecc4e03e11b",
"/": "33f470a2d024b1b3b2e80ecc4e03e11b",
"main.dart.js": "dc6a7515c8234d92233389f7421b2fd3",
"manifest.json": "1ec48dd79b177c7c22441b78c0571b44",
"version.json": "f28bca6014369808504a08fd022d29d6"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
