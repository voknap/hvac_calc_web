'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1b41154615c1ae0b4b5bfd40a8c33c04",
"assets/AssetManifest.bin.json": "c0e29be0bb257fa58783d7eda91306d8",
"assets/AssetManifest.json": "c0ea5c21efc0242c8d03816cb2878f82",
"assets/assets/icons/app_store.png": "2896b9fa45ef4ed19021b4465eda245c",
"assets/assets/icons/arrow_cooling.png": "2daa29463d78590eaa564ee2df648460",
"assets/assets/icons/arrow_grey.png": "e350d67ff5458f93775247404cbee9cb",
"assets/assets/icons/arrow_heating.png": "8f254678541502393a115f49474e0d4a",
"assets/assets/icons/drops.png": "87511058af82499bfa0b4e2f71d82aec",
"assets/assets/icons/drop_blue.png": "3cc0b4af4e817338e7213de85db2f945",
"assets/assets/icons/duct_blue.png": "289b677e0c0c9180dee60c9fd9b83f2d",
"assets/assets/icons/google_play.png": "ea1a3f4fdc1f65b4c26478cdaabe3e2e",
"assets/assets/icons/hvac-calc-icon-win.png": "d7eb8f621a48b77305ff0ce5ed26df35",
"assets/assets/icons/hvac-calc-icon.png": "be2fb6500e7760bf19f3b5e44531828d",
"assets/assets/icons/info_blue.png": "2b7c7a0029792630b849efda73069ba4",
"assets/assets/icons/microsoft_store.png": "968e2712e506900d6446ae979ad0559a",
"assets/assets/icons/pipe_blue.png": "79c32f9b3960f965f29eac2ad8972955",
"assets/assets/icons/spray.png": "ae413d6b1b5eeb4a9e95504816f33299",
"assets/assets/icons/triple_tap.png": "e3ca01e3d3e2c6972e014400552895b4",
"assets/assets/icons/youtube2.png": "b2219deb0c5c2ece94621aa4db5a1f10",
"assets/assets/images/picture_01.png": "8b43522c0f8bf1175c70852b7fe66a05",
"assets/assets/images/picture_01_ip.png": "04933edc3abc51ca3966fb3a39f318f8",
"assets/assets/images/picture_02.png": "f690baf193a01f03e13764d58ac2124f",
"assets/assets/images/picture_03.png": "1bc8c3b45d3c12b1a6752cbc1d1d0d91",
"assets/assets/images/picture_04_add.png": "fd1902982445675609943a07d4523283",
"assets/assets/images/picture_04_ip_add.png": "4c10e1b59d8dd2ea4fa1e5d007dad0c6",
"assets/assets/images/picture_05.png": "f690baf193a01f03e13764d58ac2124f",
"assets/assets/images/picture_06.png": "1bc8c3b45d3c12b1a6752cbc1d1d0d91",
"assets/assets/images/picture_07.png": "4476233b9c75d56a0c59bcf3d3d69c19",
"assets/assets/images/picture_07_ip.png": "bdf45239d88270b3e0f81be59f461292",
"assets/assets/images/picture_08.png": "1bc8c3b45d3c12b1a6752cbc1d1d0d91",
"assets/assets/images/picture_09.png": "8e7926f4a9069f7d36e90488783b73a1",
"assets/assets/images/picture_09_ip.png": "929fa045d88edb56220320077ceaa3a9",
"assets/assets/images/picture_10.png": "f690baf193a01f03e13764d58ac2124f",
"assets/assets/images/picture_11.png": "8603a857cd9deb4a730457549ed843b4",
"assets/assets/images/picture_11_ip.png": "ea9f8a8ffa06ca3240aea5c9cc075926",
"assets/assets/images/picture_12.png": "b31d34a8f277322ceef1e320589915b3",
"assets/assets/images/picture_12_ip.png": "36bbaef0768b3f12ce5a0ff8fa0ac87c",
"assets/assets/images/picture_13.png": "1a288939b0c4341fb150563ac04fc489",
"assets/assets/images/spin_2.gif": "be43efafd5a0d1143f1d96e1df2a460b",
"assets/assets/images/table_ovals_ip.png": "7b12e34ad2929e2bf255bd162c1737d3",
"assets/FontManifest.json": "bc916675c6aef3a6d2acdf8a530e2cac",
"assets/fonts/MaterialIcons-Regular.otf": "de7b3c3b603b4aca65b1c18cb1b3feb8",
"assets/fonts/MyFlutterApp.ttf": "ad8cd47c143e8c5037159f7938237992",
"assets/fonts/RobotoMono-VariableFont_wght.ttf": "bba1be3e14d89a5d7f2c22bd719f8284",
"assets/NOTICES": "db105feaeb6d171205170808a29ad019",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "bd5e4893eb135530b5515520efd1f7ab",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "7456eda14980ca669e8010821f1335b7",
"icons/Icon-192.png": "e178a454ae4a641c5ecd15a8bd3a2480",
"icons/Icon-512.png": "d93b28dfcb8303c122b6a2d16f67c7fc",
"icons/Icon-maskable-192.png": "e178a454ae4a641c5ecd15a8bd3a2480",
"icons/Icon-maskable-512.png": "d93b28dfcb8303c122b6a2d16f67c7fc",
"index.html": "a17588dd7d74737c704e84a572c592a2",
"/": "a17588dd7d74737c704e84a572c592a2",
"main.dart.js": "f1053e160f96673fc1b27253d1bda9c4",
"manifest.json": "6c266ebd8f176da5fa1a14f0f654843b",
"splash/img/dark-1x.gif": "64f24bacaf98fac994ed48ac8a71e956",
"splash/img/dark-2x.gif": "bea099acae1cd99aae1db3673a003a2b",
"splash/img/dark-3x.gif": "2e579f64b9a3784c6a2047d736b2e3ca",
"splash/img/dark-4x.gif": "a452629cc11d6e90bdaa597e25d6db75",
"splash/img/light-1x.gif": "64f24bacaf98fac994ed48ac8a71e956",
"splash/img/light-2x.gif": "bea099acae1cd99aae1db3673a003a2b",
"splash/img/light-3x.gif": "2e579f64b9a3784c6a2047d736b2e3ca",
"splash/img/light-4x.gif": "a452629cc11d6e90bdaa597e25d6db75",
"version.json": "7c87d9508e07ff14ccbc8ff93b7a07db"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
