"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/slides-vr-crash-course/index.html","13c83827fbb02d07b5e9b47d67555aff"],["/slides-vr-crash-course/static/css/main.be98e88b.css","a32715b9800e0500bdeddeda0d88821b"],["/slides-vr-crash-course/static/js/main.961ba2f3.js","c6bc37885c8285897e543e0f7ba4b2ab"],["/slides-vr-crash-course/static/media/a-frame-scene-example.ba0c6fc9.jpg","ba0c6fc916e67b67f266ab86370d406f"],["/slides-vr-crash-course/static/media/chernivtsijs-logo.8edb0dba.png","8edb0dba39a1ff12c0007715eae44e2c"],["/slides-vr-crash-course/static/media/github-profile.79b8c80e.png","79b8c80e095874c181c6528cd6ddfae9"],["/slides-vr-crash-course/static/media/google-cardboard.6c124c0c.png","6c124c0c42b1368dc5a10efe03d916bb"],["/slides-vr-crash-course/static/media/lambdabooks.2deb024e.png","2deb024e600088d6085a1a7396832f57"],["/slides-vr-crash-course/static/media/mi-vr.4ccba0dd.png","4ccba0ddcdff18e07ea9ee8d14fc59c4"],["/slides-vr-crash-course/static/media/people-senses.409a3849.png","409a38493fe859f8d2aacf0904b9da59"],["/slides-vr-crash-course/static/media/street-view-logo.5ecbda91.png","5ecbda915d54b235761c52bbabffe163"],["/slides-vr-crash-course/static/media/vr-headsets-table.3bb8b80e.png","3bb8b80e6fe84f097006e0ed954723b3"],["/slides-vr-crash-course/static/media/vr-kits-bg.08fbd73f.gif","08fbd73f070b2434e57ba6c1286ace04"],["/slides-vr-crash-course/static/media/webvr-support-chrome.e02ba33b.png","e02ba33be7e65d2b08df91ad890d799e"],["/slides-vr-crash-course/static/media/webvr-support-chromium.8739ef58.png","8739ef5802b78df74b131ea05f915f59"],["/slides-vr-crash-course/static/media/webvr-support-edge.298ca76f.png","298ca76f621077679a74113de3956ea7"],["/slides-vr-crash-course/static/media/webvr-support-firefox.88b6f3d6.png","88b6f3d674951b8e7a73e450d4a7d989"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,r){var s=new URL(e);return"/"===s.pathname.slice(-1)&&(s.pathname+=r),s.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(r){return new Response(r,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,r,s,t){var a=new URL(e);return t&&a.pathname.match(t)||(a.search+=(a.search?"&":"")+encodeURIComponent(r)+"="+encodeURIComponent(s)),a.toString()},isPathWhitelisted=function(e,r){if(0===e.length)return!0;var s=new URL(r).pathname;return e.some(function(e){return s.match(e)})},stripIgnoredUrlParameters=function(e,r){var s=new URL(e);return s.hash="",s.search=s.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return r.every(function(r){return!r.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),s.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var r=e[0],s=e[1],t=new URL(r,self.location),a=createCacheKey(t,hashParamName,s,/\.\w{8}\./);return[t.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(r){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(s){if(!r.has(s)){var t=new Request(s,{credentials:"same-origin"});return fetch(t).then(function(r){if(!r.ok)throw new Error("Request for "+s+" returned a response with status "+r.status);return cleanResponse(r).then(function(r){return e.put(s,r)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var r=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(s){return Promise.all(s.map(function(s){if(!r.has(s.url))return e.delete(s)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var r,s=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(r=urlsToCacheKeys.has(s))||(s=addDirectoryIndex(s,"index.html"),r=urlsToCacheKeys.has(s));!r&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(s=new URL("/slides-vr-crash-course/index.html",self.location).toString(),r=urlsToCacheKeys.has(s)),r&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(s)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(r){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,r),fetch(e.request)}))}});