/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/02/1的含义/index.html","37d063e1f3e08871f1fed553a75cbeda"],["/2023/01/05/flex布局/index.html","e79d315d228be5dbf644091efa4cbec9"],["/2023/01/28/递归的原理与实际开发运用-递归函数求斐波那契数列-递归实现深拷贝/index.html","206ddb7b40fa2913c5dd85222daf73ee"],["/2023/02/20/防抖/index.html","d112aafbe32aea3d084f865177d066d1"],["/2023/03/02/盒子居中的几种方法/index.html","383022c2962e0374314a1a150b77d1d2"],["/2023/03/18/Vue3的pinia使用及持久化存储/index.html","7ab5bde9cdbf60586efc48fa22e4d45d"],["/2023/04/18/Vue数据双向绑定的原理/index.html","698c9e0f5906267bbe0dd79648c087ea"],["/2023/04/30/vue2下载excel表格数据/index.html","9cc5f65d94b9e6c28c9b07e95eee01d4"],["/2023/04/30/什么是虚拟DOM与真实DOM，他们的区别/index.html","87c09d89e46b5d1a43e20892b83c1d39"],["/2023/05/04/小程序登录流程/index.html","07a0788092b1bc619f6c4c591c038c41"],["/2023/05/04/小程序项目初始化配置/index.html","7d135929408529f2e4b06e8de61f7b3b"],["/2023/05/04/微信小程序生命周期钩子/index.html","9df3af652e4c5b7657de12f5d7a2c0e3"],["/2023/06/02/微前端技术/index.html","fab1aadc6d4ff649e47cd9fa6ab26bfa"],["/2023/06/04/vite打包的时候使用/index.html","0fede1bff409758885d319944bfa71d2"],["/404.html","4518c7d592bd329054ab22f250ea8f20"],["/archives/2023/01/index.html","97433ffedab1365754617936bb3ec841"],["/archives/2023/02/index.html","fa04221e9eedee42f60c71b6b919eae7"],["/archives/2023/03/index.html","77379ee42c7e0af261bd2960bfe48efb"],["/archives/2023/04/index.html","5908870e3fc1b8cf7f2a2b4a35e58b6c"],["/archives/2023/05/index.html","0e879c3540b498d2d2953163307f64b6"],["/archives/2023/06/index.html","bfe964d322d2b9d57067931225a32fb5"],["/archives/2023/index.html","7dd0a5fef58185a30915f478b224975d"],["/archives/2023/page/2/index.html","00cea083875d3c41688f6fdbe140bc18"],["/archives/index.html","dda13883a87681c0bab9440f531b5ab5"],["/archives/page/2/index.html","99522e32e15faaf741d705d3ab67c420"],["/assets/odometer-theme-minimal.css","d50a198c326f1767cdaecdb7c67b392d"],["/categories/JavaScript/index.html","c15fc676eb8ae8b0148bc98700771d75"],["/categories/index.html","f0cd91abf2c6235789ce85d35daa5f83"],["/css/common/animated.css","b2aecba9b34c3593d241f2c118a98ae1"],["/css/common/basic.css","f822bf53550213e600961b954f7e031f"],["/css/common/codeblock/code-block.css","641572522f017055b703ba651693e89b"],["/css/common/codeblock/code-theme.css","446c962c8b262fe507cee6def82bcea5"],["/css/common/codeblock/highlight.css","d0c26b42c921167a5e2320bf08a949dc"],["/css/common/markdown.css","289a403ba4d3292bb2d99c5cff4dc432"],["/css/common/redefine-theme.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/variables.css","c4f3b752e58bd89ff4b97a72f5dd94d9"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","a3dde0721499dd057015c348293a636a"],["/css/layout/category-content.css","68640380365fa391f898448883787f26"],["/css/layout/category-list.css","bf56d89cdfa46a49e138a9648e8ab6a9"],["/css/layout/home-content.css","332d59e6b11a15bfac81d5059524cfbd"],["/css/layout/home-sidebar.css","aefe0c3e7b4d149d91e9dcad515e9a2b"],["/css/layout/page.css","68266728f6834843a829da09fcc86964"],["/css/layout/tag-content.css","436d0d0cdb4ad94dec2a3a727daf8912"],["/css/style.css","6322de02399b9dbc1ae49924899e4b60"],["/fontawesome/all.min.css","9ec513d705ed7f4deb2b50bb05914817"],["/fontawesome/brands.min.css","40960f6969b87896c9889de920787ae8"],["/fontawesome/duotone.min.css","6d17219d846a2851c2ed490a62dd38cb"],["/fontawesome/fontawesome.min.css","7f252c83010f3cada47ee6a6f71d1ee8"],["/fontawesome/light.min.css","99d663cdb4567e9c0c000fc52c670fb8"],["/fontawesome/regular.min.css","020abce5e17082f0f18f92aed092c0b0"],["/fontawesome/sharp-solid.min.css","20abfb823fecc8a6a73458c5edd394f9"],["/fontawesome/solid.min.css","f484f18056587df321165f744e9ba571"],["/fontawesome/svg-with-js.min.css","c40530bda390deaaed914c49f34d9e1e"],["/fontawesome/thin.min.css","f44cae780bf8a7287221c340cbe4d815"],["/fontawesome/v4-font-face.min.css","52325430f1fa7f983a32f712ebb59b3a"],["/fontawesome/v4-shims.min.css","4d764578be067a44af663d56be333195"],["/fontawesome/v5-font-face.min.css","1cb7f16555da63aecd2828d3d3130d85"],["/fonts/Chillax/Chillax-Variable.eot","f8ea7af333c768147f674ba526612248"],["/fonts/Chillax/Chillax-Variable.ttf","5f13274ffe3e1ee77b67324cb1a9cf7c"],["/fonts/Chillax/Chillax-Variable.woff","16fee1e0f2e5db01ad15ce4535ad39e2"],["/fonts/Chillax/Chillax-Variable.woff2","5940855d51d43257fe1bbd7b0dc6710d"],["/fonts/Chillax/chillax.css","0d2090517a2cb42f32bd86454b2bb1e0"],["/fonts/Satoshi/Satoshi-Variable.eot","f953920d265c265d55029a0044a7b122"],["/fonts/Satoshi/Satoshi-Variable.ttf","bc0207192e408b721fa14151690c6a66"],["/fonts/Satoshi/Satoshi-Variable.woff","bd7cac4b844318aa2b2f168b57b45c22"],["/fonts/Satoshi/Satoshi-Variable.woff2","70880e42f07b0386e261974cd14820a1"],["/fonts/Satoshi/Satoshi-VariableItalic.eot","9888965098b0fe3121439e5293e5f63d"],["/fonts/Satoshi/Satoshi-VariableItalic.ttf","db98db5c0d84369d2586aaf5eedc3376"],["/fonts/Satoshi/Satoshi-VariableItalic.woff","aa09c255fd899a8d89fc4636c0c9db4d"],["/fonts/Satoshi/Satoshi-VariableItalic.woff2","ed39abb752ab5d8f7d19f0a8d9523c7b"],["/fonts/Satoshi/satoshi.css","1baa156aca1baa1b570089def9ee55ec"],["/fonts/fonts.css","c96283423d2ff104322986b7338b3eba"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff","3575965a87411920b48f5bd97b38810d"],["/fonts/noto-sans-sc-v26-chinese-simplified-700.woff2","d368363f7f4991eba59db4889aa5b8d1"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff","0ed89b72b63509b506025450c77bfe43"],["/fonts/noto-sans-sc-v26-chinese-simplified-regular.woff2","180f3c1052432d84ad10dad4521cbac0"],["/fonts/ubuntu-mono-v15-latin-regular.woff","86bd37776667f31cd9c6d0a2a9fa7ef5"],["/fonts/ubuntu-mono-v15-latin-regular.woff2","8d1b929856b2ef150dc86f2f38a5dc5b"],["/images/03.png","ed510554aa91b4673db1714ba947cb03"],["/images/Snipaste_2023-07-30_17-36-23.png","9330a8093ce427b768cb1fa3fa829de0"],["/images/avatar.jpg","b276a5766c978de9639edeb28e7e588c"],["/images/loading.svg","e1de41eda143447d3b338e77f7ace18f"],["/images/redefine-avatar.jpg","b85cee53ec46407920fdc2703a8c8c02"],["/images/redefine-favicon.svg","badc8db1a4c3d1845db4e4ffec333d9e"],["/images/redefine-logo.svg","80a88fff4a3bb50559543e80477aa571"],["/index.html","de8a4e96204ea68112783c5d45b75eb2"],["/js/layouts/categoryList.js","d8248d57f7eff3f35dd52389e0592544"],["/js/layouts/lazyload.js","df2b9c46bb239ed6ed9b0d3a0ed2a2be"],["/js/layouts/navbarShrink.js","08e872b287269c7f31f0a54dc444e6db"],["/js/layouts/toc.js","2044b79c18b73e72b30c71023cfd9a31"],["/js/libs/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/libs/Typed.min.js","f68641147185cbded4b38b4900a20f40"],["/js/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/libs/mermaid.min.js","07d4a62ba2e5b0e44077bd9b481fd75d"],["/js/libs/minimasonry.min.js","a3b6453136c8edd4fdd374171f022ffa"],["/js/libs/odometer.min.js","519a5777444f5965b6df23e26c69f037"],["/js/libs/pjax.min.js","cdf1c08dca678e919d1a3f3cc891277d"],["/js/main.js","696538cbacd5df5b876b05e38e4418be"],["/js/plugins/aplayer.js","d771daaf295dedb9e89929fda5e13e6a"],["/js/plugins/masonry.js","35eb94db3168ae329652bc632c7f1b56"],["/js/plugins/mermaid.js","86abee6751e0e33e7451d595546cc96a"],["/js/plugins/tabs.js","d58576f7197f89ec762235753e2839ac"],["/js/plugins/typed.js","83e19d386f3651d678cbf1c8485c00a6"],["/js/tools/codeBlock.js","0fc35c216c37ebf89cb1e523cbc6f91e"],["/js/tools/lightDarkSwitch.js","8697f6a2a256ce0a6dcd3542eed8445a"],["/js/tools/localSearch.js","0519150a4474b788c590a3704a96a3b1"],["/js/tools/runtime.js","15847af44cca00e169d25791d793ef5e"],["/js/tools/scrollTopBottom.js","c8d6c80db4401c6ef0e4deb7aef87ab6"],["/js/tools/tocToggle.js","3e749bf9064a43184aca43da7f6e83c9"],["/js/utils.js","24558d06b7d30f9ff0c2a9a697536fa7"],["/page/2/index.html","6ab40d27af6dd038c815624c7b52575b"],["/sw-register.js","09f3172036c805e0ddaae693a0bbd2e7"],["/tags/JavaScript/index.html","bdc37c780ab5ed027ea37b2d008507f2"],["/tags/cdn/index.html","0cd6ca8e2fb7be6abbb35c536f3c5f2d"],["/tags/css/index.html","b5c8ef44eeb82ef0e19b80fe2925c9ea"],["/tags/flex/index.html","38303506ad06b55b20435166529b3b94"],["/tags/index.html","ca7badd22a58fdf4a9400b7d17aadbe5"],["/tags/pinia/index.html","95cb340363babc8af0062949298b6d32"],["/tags/qiankun/index.html","5a468e86bc64f4e216aa510be30f8757"],["/tags/uni-app/index.html","daf12b6217fb39ad2da815d1e4b0be5b"],["/tags/vdom/index.html","265333b202806383791f70c68a875159"],["/tags/vite/index.html","1752749e6374aad657ae77dc3762ce2b"],["/tags/vue/index.html","1ac786f03c244c9789baf480a7f78fab"],["/tags/vue2/index.html","4d83349a4406e9e95acaa816b578acf5"],["/tags/vue3/index.html","c8a3543f90d1901d0e8d38d0c412dce7"],["/tags/双向绑定/index.html","77e660e8177b5e71873f0dd808d96edf"],["/tags/工作业务/index.html","4635e9d04e66d6e72167bc7c84c2c1d8"],["/tags/递归/index.html","d9b7adfbde97ba0507139b754878d688"],["/webfonts/fa-brands-400.ttf","2f73c22e9ab02b8f923c9577fb267e3c"],["/webfonts/fa-brands-400.woff2","a97f5f1605d31e8be772cafaae12d324"],["/webfonts/fa-duotone-900.ttf","5043107ed7dba7b22fea520507ffcbfa"],["/webfonts/fa-duotone-900.woff2","19df7b71c08c158645e908e031b67a59"],["/webfonts/fa-light-300.ttf","56720c95107daf1fc8c4e3efbde50d44"],["/webfonts/fa-light-300.woff2","892267898848cec59a6de9732f272dc4"],["/webfonts/fa-regular-400.ttf","fba93793e177af4a2277e468db6e409f"],["/webfonts/fa-regular-400.woff2","a4e56814c8f188544184d01fdb08efd4"],["/webfonts/fa-sharp-solid-900.ttf","258a4bbc66f0b3e34c28b4026816ec72"],["/webfonts/fa-sharp-solid-900.woff2","c85e3f8b36f91b247af9b9580c6142e5"],["/webfonts/fa-solid-900.ttf","7b93722a98b0178b89cad243a020f45c"],["/webfonts/fa-solid-900.woff2","9966f4967759f0a0e24b33218c42a89b"],["/webfonts/fa-thin-100.ttf","eedf47e45505ceb0798e86e80856a246"],["/webfonts/fa-thin-100.woff2","cbf2c277c8533f0d6b3350e0fd666fdb"],["/webfonts/fa-v4compatibility.ttf","69ecd6a58b5b719735db6f4fbce1d48d"],["/webfonts/fa-v4compatibility.woff2","99d005ad96a9d4f6e015ffac9350ce7a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
