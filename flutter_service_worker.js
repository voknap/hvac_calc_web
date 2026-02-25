'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c5b3b957591970a424b54171c7c7e356",
"assets/AssetManifest.bin.json": "4b1321de708ca78d0c220f4ec9835260",
"assets/AssetManifest.json": "99a3c6838220e47d4e8f1a386dd23742",
"assets/assets/icons/app_store.png": "2896b9fa45ef4ed19021b4465eda245c",
"assets/assets/icons/app_store_ru.png": "1a64a3c5472794abc733dab18226edcd",
"assets/assets/icons/arrow_cooling.png": "2daa29463d78590eaa564ee2df648460",
"assets/assets/icons/arrow_grey.png": "e350d67ff5458f93775247404cbee9cb",
"assets/assets/icons/arrow_heating.png": "8f254678541502393a115f49474e0d4a",
"assets/assets/icons/drops.png": "87511058af82499bfa0b4e2f71d82aec",
"assets/assets/icons/drop_blue.png": "3cc0b4af4e817338e7213de85db2f945",
"assets/assets/icons/duct_blue.png": "289b677e0c0c9180dee60c9fd9b83f2d",
"assets/assets/icons/google_play.png": "ea1a3f4fdc1f65b4c26478cdaabe3e2e",
"assets/assets/icons/google_play_ru.png": "b71ca4549b720c428b9676a8a08df0e2",
"assets/assets/icons/hvac-calc-icon-win.png": "d7eb8f621a48b77305ff0ce5ed26df35",
"assets/assets/icons/hvac-calc-icon.png": "be2fb6500e7760bf19f3b5e44531828d",
"assets/assets/icons/info_blue.png": "2b7c7a0029792630b849efda73069ba4",
"assets/assets/icons/microsoft_store.png": "968e2712e506900d6446ae979ad0559a",
"assets/assets/icons/microsoft_store_ru.png": "105ed9deddbb42cacc5a19010d272d2d",
"assets/assets/icons/pipe_blue.png": "79c32f9b3960f965f29eac2ad8972955",
"assets/assets/icons/spray.png": "ae413d6b1b5eeb4a9e95504816f33299",
"assets/assets/icons/triple_tap.png": "e3ca01e3d3e2c6972e014400552895b4",
"assets/assets/icons/youtube2.png": "b2219deb0c5c2ece94621aa4db5a1f10",
"assets/assets/images/duct_ru/picture_01_ru.png": "c9f329188e536457fd46e0085d4ce7bc",
"assets/assets/images/duct_ru/picture_02_ru.png": "f43c93a4a82bf5e974e735d45a5a169a",
"assets/assets/images/duct_ru/picture_03_ru.png": "bb490aa6714c3e93707b98982fe02d3e",
"assets/assets/images/duct_ru/picture_04_add_ru.png": "a2717cda07ecd9f87a97ffdca6d0b176",
"assets/assets/images/duct_ru/picture_05_ru.png": "f43c93a4a82bf5e974e735d45a5a169a",
"assets/assets/images/duct_ru/picture_06_ru.png": "bb490aa6714c3e93707b98982fe02d3e",
"assets/assets/images/duct_ru/picture_07_ru.png": "6143872a39637f8c456dff71c7384ebd",
"assets/assets/images/duct_ru/picture_08_ru.png": "bb490aa6714c3e93707b98982fe02d3e",
"assets/assets/images/duct_ru/picture_09_ru.png": "3db1e4deda07efd1caf734b192b985e5",
"assets/assets/images/duct_ru/picture_10_ru.png": "f43c93a4a82bf5e974e735d45a5a169a",
"assets/assets/images/duct_ru/picture_11_ru.png": "6a285344540d1aad3f9abdf9a77a802f",
"assets/assets/images/duct_ru/picture_12_ru.png": "9c859fd09b7c21bffce6e979ad26d8d3",
"assets/assets/images/duct_ru/picture_13_ru.png": "d88aca4c1acd184dbbcbd1f2bc5086f8",
"assets/assets/images/picture_01.png": "1c42a2c13a5c427e41c2a3b149102362",
"assets/assets/images/picture_01_ip.png": "581a1bd8df630fb5e157271a3745b5ac",
"assets/assets/images/picture_02.png": "13474d98614b5842c49b70e4e8c6c028",
"assets/assets/images/picture_03.png": "f773fbd79a5c8dac1833d35d3fad9a2f",
"assets/assets/images/picture_04_add.png": "61e3fb187cbaa58ced95b80a8f001b7e",
"assets/assets/images/picture_04_ip_add.png": "6894a22614859a639a3f10fafd523de9",
"assets/assets/images/picture_05.png": "13474d98614b5842c49b70e4e8c6c028",
"assets/assets/images/picture_06.png": "f773fbd79a5c8dac1833d35d3fad9a2f",
"assets/assets/images/picture_07.png": "5e7e237617bed1e75b735972b81e6e78",
"assets/assets/images/picture_07_ip.png": "bfd8121792540fa6df0468d288d6c6f5",
"assets/assets/images/picture_08.png": "f773fbd79a5c8dac1833d35d3fad9a2f",
"assets/assets/images/picture_09.png": "64cbf78f8578ad49a4c236de14df23e8",
"assets/assets/images/picture_09_ip.png": "5d744e6ee916c050d8e544577aa26f7c",
"assets/assets/images/picture_10.png": "13474d98614b5842c49b70e4e8c6c028",
"assets/assets/images/picture_11.png": "262f1200397b95fad81a5981f613089a",
"assets/assets/images/picture_11_ip.png": "036ff0eff3f130a9bb0317d1b620af90",
"assets/assets/images/picture_12.png": "e67a083a95d998195bc6e834edf37041",
"assets/assets/images/picture_12_ip.png": "fa33f73535269ff911873f7d068a2159",
"assets/assets/images/picture_13.png": "4c6c1a12db49c335025f5bebfaa08156",
"assets/assets/images/pipe/ip/pipe_1.1_ip.png": "542affae16b74c0a5c1f73caf133f1e7",
"assets/assets/images/pipe/ip/pipe_1.2_ip.png": "f906569af4fc333d6c8bc4c3f0162403",
"assets/assets/images/pipe/ip/pipe_1.3_ip.png": "8d4917b3ed53bf981757383dd23d6a95",
"assets/assets/images/pipe/ip/pipe_1.4_ip.png": "d942f307d8aaf9aebcf68622a12faadf",
"assets/assets/images/pipe/ip/pipe_2.1_ip.png": "bd911af612759682a91e4340af8c4940",
"assets/assets/images/pipe/ip/pipe_2.2_ip.png": "a88d050b72deff7f09a239aa791c4e85",
"assets/assets/images/pipe/ip/pipe_2.3_ip.png": "c90e022aefaedc9eb49a6d39784dc7ee",
"assets/assets/images/pipe/ip/pipe_2.4_ip.png": "7bb7dee139e25ffd0e40ffac4a3ece12",
"assets/assets/images/pipe/ip/pipe_3.1_ip.png": "f18cbc9a9a35dc7ed303ddcdb665529d",
"assets/assets/images/pipe/ip/pipe_3.2_ip.png": "21fe42be7db19d4efb12e72c6b15e8d3",
"assets/assets/images/pipe/ip/pipe_3.3_ip.png": "a13f52c38bb2682b5a8b9d8ae541d1bd",
"assets/assets/images/pipe/ip/pipe_3.4_ip.png": "8b13c6e3b302c7c7c06fbb44bf144b22",
"assets/assets/images/pipe/pipe_1.1.png": "61fe92a0fb267407497325eaeeed1297",
"assets/assets/images/pipe/pipe_1.2.png": "0cfd8f742f2eb9cfb59910f417034aa1",
"assets/assets/images/pipe/pipe_1.3.png": "300b1f9ce479de0656656cde378ca797",
"assets/assets/images/pipe/pipe_1.4.png": "c64f00e29314a98516c0effcc468c081",
"assets/assets/images/pipe/pipe_2.1.png": "4852e6f9a98f938c09f6ebc90cb48f81",
"assets/assets/images/pipe/pipe_2.2.png": "0b999eec905d6b23a404cbfc4f88dc92",
"assets/assets/images/pipe/pipe_2.3.png": "f7d4d1bb1e9f8820efbb7f3aa2815909",
"assets/assets/images/pipe/pipe_2.4.png": "5d5368e95e90e06c8ce93a2060f78eda",
"assets/assets/images/pipe/pipe_3.1.png": "cb223c720d5c72357802867c8206ce1e",
"assets/assets/images/pipe/pipe_3.2.png": "2c221ebe262c772b255c72919effeb04",
"assets/assets/images/pipe/pipe_3.3.png": "d27050f8aff34f49873307e7f11da1fa",
"assets/assets/images/pipe/pipe_3.4.png": "b01dcc983db8cb12d72575e228d63d42",
"assets/assets/images/pipe/ru/pipe_1.1_ru.png": "5ce876e47f7af54737eaf8ce154aad57",
"assets/assets/images/pipe/ru/pipe_1.2_ru.png": "231d30c5c1b4c2db67281c5c26c118fb",
"assets/assets/images/pipe/ru/pipe_1.3_ru.png": "22a6fc703dc8853e7973991565a7e112",
"assets/assets/images/pipe/ru/pipe_1.4_ru.png": "b6ca1d8209a1e69b165abfb2d95d7c6e",
"assets/assets/images/pipe/ru/pipe_2.1_ru.png": "21e211bcb481098ac63c50e3940e1c46",
"assets/assets/images/pipe/ru/pipe_2.2_ru.png": "1d29604b8317039c63e3174928be5219",
"assets/assets/images/pipe/ru/pipe_2.3_ru.png": "3e683a3d49ef127d95f182b3e0aed614",
"assets/assets/images/pipe/ru/pipe_2.4_ru.png": "1b6189c2fa6a9f10f6cc8844bdf3ca8e",
"assets/assets/images/pipe/ru/pipe_3.1_ru.png": "069cdce6b459938e5e9bcda0fa5fc25e",
"assets/assets/images/pipe/ru/pipe_3.2_ru.png": "113e338ddf351ba78cd4c6a87d2142c1",
"assets/assets/images/pipe/ru/pipe_3.3_ru.png": "896e910b4477fd92e29f8d306b86e15b",
"assets/assets/images/pipe/ru/pipe_3.4_ru.png": "790b96239f921de7d4e9e11683bff60b",
"assets/assets/images/screenshot_assist_01.png": "74cc72bbb4a3072b292510fa5546b857",
"assets/assets/images/screenshot_assist_01_ru.png": "8d0014f73ae1a2f6c18ee25b229d0970",
"assets/assets/images/screenshot_assist_02.png": "704471db6bc59f8cc4c7ac678a938707",
"assets/assets/images/screenshot_assist_02_ru.png": "6fb91335d2d7d6469db011b71d470145",
"assets/assets/images/screenshot_assist_03.png": "d5e304298be8d7d5d903455f4123dd83",
"assets/assets/images/screenshot_assist_03_ru.png": "de3da7fbe68ca7645cc5ecc297a7c44d",
"assets/assets/images/spin_2.gif": "be43efafd5a0d1143f1d96e1df2a460b",
"assets/assets/images/table_ovals_ip.png": "7b12e34ad2929e2bf255bd162c1737d3",
"assets/FontManifest.json": "63f6a9870309d3ef3cf23c4949f86e7a",
"assets/fonts/MaterialIcons-Regular.otf": "a772d416192ca06b4d9fb382266a670a",
"assets/fonts/MyFlutterApp.ttf": "ad8cd47c143e8c5037159f7938237992",
"assets/fonts/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/fonts/RobotoMono-VariableFont_wght.ttf": "bba1be3e14d89a5d7f2c22bd719f8284",
"assets/NOTICES": "eb782371eff054023d6f41c8959da11d",
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
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "e76dd4179c3a8cbc23fc865bc9b2dacc",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "af6b34130eae9fd7f1d4b945239fe276",
"icons/Icon-192.png": "278c94e0963d61c360daaab11a655b0d",
"icons/Icon-512.png": "f2a068c4ae3ea6de6d9762d06e093917",
"icons/Icon-maskable-192.png": "278c94e0963d61c360daaab11a655b0d",
"icons/Icon-maskable-512.png": "f2a068c4ae3ea6de6d9762d06e093917",
"index.html": "02edd0390d576911fcdd42514fa0cbbf",
"/": "02edd0390d576911fcdd42514fa0cbbf",
"main.dart.js": "78a07b3d8051a2fe6b4fceeba4a46be4",
"manifest.json": "05990057ca180414a04928d5302ce1d8",
"splash/img/dark-1x.gif": "64f24bacaf98fac994ed48ac8a71e956",
"splash/img/dark-2x.gif": "bea099acae1cd99aae1db3673a003a2b",
"splash/img/dark-3x.gif": "2e579f64b9a3784c6a2047d736b2e3ca",
"splash/img/dark-4x.gif": "a452629cc11d6e90bdaa597e25d6db75",
"splash/img/light-1x.gif": "64f24bacaf98fac994ed48ac8a71e956",
"splash/img/light-2x.gif": "bea099acae1cd99aae1db3673a003a2b",
"splash/img/light-3x.gif": "2e579f64b9a3784c6a2047d736b2e3ca",
"splash/img/light-4x.gif": "a452629cc11d6e90bdaa597e25d6db75",
"version.json": "f2dc7aa3e16658a9e9e9e7a136adafee"};
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
