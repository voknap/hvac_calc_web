'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3c2d1cd91a372f5e70379c9b79314060",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d051da75e76f09ca78da17e658a7d6a5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "08aef510a85503f34a78181ac2640804",
".git/logs/refs/heads/master": "08aef510a85503f34a78181ac2640804",
".git/objects/02/184d19e3519a8435f551d175be4832e33ad2cf": "43695bfc3ed5969c4c82970b606a64db",
".git/objects/03/d9ea51af1a977689d085bf79f64fe389f1d1b6": "cf29d5eb04126ed860e2b573b3256320",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/534b43693dcb6e9046de97b68d446ca86a90ef": "0203d28ae9dfb7fa310bb6f2f9caa56c",
".git/objects/0c/f6a7c0d6b8f855fa3a0fe2e0379703443a0484": "b046dfd8e0c3e18654f7089d6e3dfc4f",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/12/262df721d2829bf5613bdafc3b6f8bccaf265e": "9de91a26bc27a0f16077e63d824bba03",
".git/objects/13/ecfe9329db080f74bc5c005ed3d94b7b35832a": "69620ae6bee01feadcec1f4852949b4c",
".git/objects/14/a6ac0c79083aa3ec17ccb2f1d5a0a0aa8fb870": "9c67efe266f98da8a68e9e969b0078c9",
".git/objects/19/49491fe9516a8989f036896a3e154583671459": "c597fc5e3d4267aa11ceba8cade49846",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/1d/5371e6bd3294d76a47867c4e56e6487d49d81f": "8fdf00ad409405c86eb31a150080bd56",
".git/objects/1e/727aefc44c39e1197960ea9579a496dc469929": "f822872fb8623c94de480b45c918a3e8",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/163cd4b955630e10a46b19ddfa4cc71ef66ed8": "c7ad81d0c4fbfe688f8166bfdcb65786",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/29/eec958d03a24f0d197f277223916a860bee574": "e63de2ec0a3f6d0bb96eb1455f01407c",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/36/e1c6f66a32467219a45267b42d5e42e8f17314": "86b7f44bd221ace0ba9f692daec63b6c",
".git/objects/37/61b5f8616e27e614acb6e1543d9baeeff66cf4": "151efa31f275ebf26398c67ae8ac5450",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3a/a29c825acbc741aa2ea7daca50b44899fe0bfb": "1ee91e736592d3d77c9659da4927a625",
".git/objects/3a/d247c2eafd1d188a459a46cecf3d3d1fd0c2b8": "a41cfa511c56d1e472945a0ba44b3253",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/42/3deabda904c7dab6c113b3f2a049b80e5cce7d": "74a443081f936516b64dfafcb44b2922",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/52/b8f4edcd552daad699bb6c3dd51a16268302ba": "1a59bb6f149e6e4da08e73bee2e69cec",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5a/3d676afead64f389a163c42600fead17506fe8": "baa9b6723a18332ba64961fc4897df16",
".git/objects/5e/622c2a3cb71b417594e5e637966825d9974337": "3ac34048d6e749002652d0b2d3527843",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/67/2e9e49d2f0c4c8aa44b496beb98f32cb36720e": "8b66be9a4797f8f3922fb5816494c68e",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/6b/cfd57482bb252c4cdba2ec02c097771cbed713": "dd0cf99f1b6fc3d28a330a537c485e4d",
".git/objects/75/7e2e61ba2b24b94e30a2490103a4eb09c60ff5": "c886352518f96786dff2e89754449a45",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/86/f9ce3b3acae1480fe4207e1e1e115f5fb23483": "4ba8099a6f502aa7fb13153a1036bdc6",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/92/1b2e550f90e2526b68c953187cdff5cf6bca90": "01de038a5bcb4b045f17cde5ba53ee43",
".git/objects/93/6c240b6d9d9c547932022f58819c856281797e": "492180477b58ae4ecbfb5ec7107478e8",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/94/b5a816fb3facecb1c28a7b0a466aa70c7e3e88": "fec75f85770c6e51f1f678704f54b578",
".git/objects/9b/328592486d0c922abad0386659e529a4d61641": "0b91d6c9d5539013cfe860cce3970b9a",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9c/efbd06402ddd4b213da49057d356c29a61a1f3": "8dbbe64f2ffda84dc98a02c652e5e828",
".git/objects/9d/98237d963419f92baeb541ef516f014ae7c970": "b0ff1f0c7a0d5a38f34cfb6f640e52a8",
".git/objects/a9/3c6add649c17b66900f2598c7aa1d391181617": "564d2e1445a8a60f63a3ab66b44e03a6",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/ab/12e89218184c7d43d8bf2f2716495aa8a91317": "61a63512a51c7e5f06ab9243caba551b",
".git/objects/ab/5eea05e8d8aa85636fba7f53504f2adeb02430": "8b12431d7cea77bd09730eeb69405251",
".git/objects/ac/01a4243895dcd05ef5c0bc082dcc45bc24e5f4": "e7ef6912f2c3375d0776a2c33fadc47c",
".git/objects/b7/583eb122dc03de833defa98d41dd30d3f70766": "cdda873d9512cd0056a9cb540ef990c1",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c1/fd1de1a5cc05c60bf166d84dae10a553db0afe": "41a6f3bcee1f47f491d04f49354d7de8",
".git/objects/c3/f45e9f02fdeb5ea082303d48ea8fcc4ba1f120": "1212bbbf94d0dbe021192deb4ad3221e",
".git/objects/c4/f5069b7556c86f48e48e04ddd15c5758a1962a": "5b211b78f78ba1466d8adeb6473e88f1",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c8/cbd715a021cf1b54b9d3f0dad6ac0929a5f88e": "1ddbbfa1d1820f5ad85faff68f3cdd78",
".git/objects/d1/0d0632f96e5fca7dd7096a0c7f177077db88e6": "b2f3c13fd2b1acd31fbc5aca575c8871",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/e573d7ded01485c0d8419730665bb7d5b03079": "d29d493321da32b5da0c71ce9eb1942c",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/6fd592056b7aae5e2440e57b5f147fa046ff7a": "cd163bd92f7964feed9b8d5beb8ba01a",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/ea/27f07adec10f0264a0a5941e530a23d6e1efc9": "454827e6a29f7fa796dc27e98a12a869",
".git/objects/f2/28d4431a1aef7ebc8fc37314ec95871cb8004d": "40e81a393d214bbd8d70758c380aa24e",
".git/objects/fb/b1e69cc043f49254be1bd11bd953785cf272dc": "0571a28b29c147953aabc5581115345e",
".git/objects/fc/7d0d3e7ed1b6e8989640bcbdaf327f07be1b95": "3973a2eea338c19713c55c4e041d1d33",
".git/objects/fc/90aadd1da11feec5304e7863fb25272aa14ee6": "fab70e0cb70bc83eff487b2dc6cdb9a4",
".git/objects/fd/44c9e92581e44f0898eaa69a099af25b46dee3": "838a3b14bd9a109caa075ce2a7165d7c",
".git/refs/heads/master": "20791dc261d6b7cba767e58c7a788785",
"assets/AssetManifest.bin": "34ff1770eec1e17f42b46372226ddaf4",
"assets/AssetManifest.bin.json": "1ad4cd065f227eb9b9adadbcf18ef80b",
"assets/AssetManifest.json": "a327a2d9e05c8a20d69c16b70b99d32a",
"assets/assets/icons/arrow_cooling.png": "2daa29463d78590eaa564ee2df648460",
"assets/assets/icons/arrow_grey.png": "e350d67ff5458f93775247404cbee9cb",
"assets/assets/icons/arrow_heating.png": "8f254678541502393a115f49474e0d4a",
"assets/assets/icons/drops.png": "87511058af82499bfa0b4e2f71d82aec",
"assets/assets/icons/drop_blue.png": "3cc0b4af4e817338e7213de85db2f945",
"assets/assets/icons/duct_blue.png": "289b677e0c0c9180dee60c9fd9b83f2d",
"assets/assets/icons/info_blue.png": "2b7c7a0029792630b849efda73069ba4",
"assets/assets/icons/pipe_blue.png": "79c32f9b3960f965f29eac2ad8972955",
"assets/assets/icons/spray.png": "ae413d6b1b5eeb4a9e95504816f33299",
"assets/assets/images/spin.gif": "74a59b1c6ee81b92337c5ba17f6a39d7",
"assets/FontManifest.json": "bc916675c6aef3a6d2acdf8a530e2cac",
"assets/fonts/MaterialIcons-Regular.otf": "910545890c41db9bd264fd992d9fa6a4",
"assets/fonts/MyFlutterApp.ttf": "ad8cd47c143e8c5037159f7938237992",
"assets/fonts/RobotoMono-VariableFont_wght.ttf": "bba1be3e14d89a5d7f2c22bd719f8284",
"assets/NOTICES": "3e381aa3ca584f2ef7153708617d38e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
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
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "0ea193eb2927da3a102cfdecaa16bf26",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "3c616e75da85de498bad9192c95b9ce8",
"icons/Icon-512.png": "a26926f95a73152404cbb529091491ac",
"icons/Icon-maskable-192.png": "3c616e75da85de498bad9192c95b9ce8",
"icons/Icon-maskable-512.png": "a26926f95a73152404cbb529091491ac",
"index.html": "9d34cffbb81022eaf1f54292c9e9e13c",
"/": "9d34cffbb81022eaf1f54292c9e9e13c",
"main.dart.js": "bef64f95e2527afa12505ca9359a07cd",
"manifest.json": "ebb13b4bae1d7e999fa9c6de38c90a65",
"splash/img/dark-1x.gif": "423be30f6528f79d21dfa33d03b31e1b",
"splash/img/dark-2x.gif": "8ed793575c8213ed1209cfc54083cafd",
"splash/img/dark-3x.gif": "4715e482ca78c3a72271929b27ab7dad",
"splash/img/dark-4x.gif": "480f7ed891339e2fb85e5e3f4af275cd",
"splash/img/light-1x.gif": "423be30f6528f79d21dfa33d03b31e1b",
"splash/img/light-2x.gif": "8ed793575c8213ed1209cfc54083cafd",
"splash/img/light-3x.gif": "4715e482ca78c3a72271929b27ab7dad",
"splash/img/light-4x.gif": "480f7ed891339e2fb85e5e3f4af275cd",
"version.json": "061437d57f71fb6f3d183fb1d8720bcd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
