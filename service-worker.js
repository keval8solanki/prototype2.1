"use strict";var precacheConfig=[["/prototype2.1/index.html","952ee53419913d17f5bf7f171be26c8f"],["/prototype2.1/static/css/main.0bf9b21e.css","e5aa2571ea5c929d14f731ab5edc44b9"],["/prototype2.1/static/js/main.8fbc6e94.js","21c52f18d4b60a332dfeab9f68aa1ada"],["/prototype2.1/static/media/aicte-logo.32821a38.png","32821a38e1690cc9b483d1e3bac93cdb"],["/prototype2.1/static/media/contract-staff.99dad004.jpg","99dad004b88542c00fb1f59535415021"],["/prototype2.1/static/media/ddu-logo.e038c3fd.png","e038c3fde88027983958187fa70d885d"],["/prototype2.1/static/media/dhl-logo.2ce54c5f.png","2ce54c5f98cdb4b306bc5d4e40ba6394"],["/prototype2.1/static/media/flipkart.7e6b8cb8.png","7e6b8cb8b5c1915103790223b059d068"],["/prototype2.1/static/media/fm-logistic-logo.5c419385.png","5c4193852f9f2c3980d239ccb2bb1e97"],["/prototype2.1/static/media/footerLogo.72780113.png","72780113875614e899e1b296aeb7bc9f"],["/prototype2.1/static/media/main.6bcf5c86.png","6bcf5c865b9456a841e9316d7b6b778c"],["/prototype2.1/static/media/ministry-logo.9fc33ceb.png","9fc33ceb7257c787802f640da8db86f2"],["/prototype2.1/static/media/msbte-logo.812b693e.png","812b693eee960abaa79c18b6c9ce28c3"],["/prototype2.1/static/media/mssds-logo.65f302e8.png","65f302e8f069f4b56ed03894ba5f1a7e"],["/prototype2.1/static/media/nsdc.200c7b49.png","200c7b49f7f20b132f2f1313ceb6bfba"],["/prototype2.1/static/media/pmkvy-logo.866360e3.png","866360e3640106d3117d5d6fecfc0bd4"],["/prototype2.1/static/media/recruit.46932f83.png","46932f83650e3024dfa6f4d1b4ec8a91"],["/prototype2.1/static/media/recruit.5c728a80.jpg","5c728a80407f0d7b88538b5a5a04a184"],["/prototype2.1/static/media/sk-logo.d7afb303.png","d7afb3032287db0a8c8b59f01c33e962"],["/prototype2.1/static/media/thirdparty.3b48dc84.png","3b48dc84f259052f531640d16af633d5"],["/prototype2.1/static/media/thirdparty.b78668a4.jpg","b78668a48837f5f87e2eff332a312224"],["/prototype2.1/static/media/training.b8504a49.jpg","b8504a490474ee3eb18ee3aa295838cc"],["/prototype2.1/static/media/training.cce5595b.png","cce5595b7f73c9b34bb8391c15636508"],["/prototype2.1/static/media/triangles1.fb1193e6.png","fb1193e6c20303b8cd350991b570457a"],["/prototype2.1/static/media/triangles2.62a3368c.png","62a3368cf76ccde5ce7eacad21190ced"],["/prototype2.1/static/media/triangles3.44b9635c.png","44b9635c3a2ebf3fb389cd1ce0e15098"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/prototype2.1/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});