if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return s[e]||(n=new Promise((async n=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=n}else importScripts(e),n()}))),n.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},n=(n,s)=>{Promise.all(n.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(n)};self.define=(n,a,r)=>{s[n]||(s[n]=Promise.resolve().then((()=>{let s={};const t={uri:location.origin+n.slice(1)};return Promise.all(a.map((n=>{switch(n){case"exports":return s;case"module":return t;default:return e(n)}}))).then((e=>{const n=r(...e);return s.default||(s.default=n),s}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/5eoQFtxbN4DI8n2BR7Dn-/_buildManifest.js",revision:"5eoQFtxbN4DI8n2BR7Dn-"},{url:"/_next/static/5eoQFtxbN4DI8n2BR7Dn-/_ssgManifest.js",revision:"5eoQFtxbN4DI8n2BR7Dn-"},{url:"/_next/static/chunks/218-9d55246a43e1922815e1.js",revision:"5eoQFtxbN4DI8n2BR7Dn-"},{url:"/_next/static/chunks/29107295-2648cb5e919f7c78c7cc.js",revision:"5eoQFtxbN4DI8n2BR7Dn-"},{url:"/_next/static/chunks/477-0c932cd91e8fb8fc5eeb.js",revision:"5eoQFtxbN4DI8n2BR7Dn-"},{url:"/_next/static/chunks/784-d5b9295c3617ec697d1e.js",revision:"5eoQFtxbN4DI8n2BR7Dn-"},{url:"/_next/static/chunks/98f61148-2f17d936ecdb8968eb76.js",revision:"5eoQFtxbN4DI8n2BR7Dn-"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"5eoQFtxbN4DI8n2BR7Dn-"},{url:"/_next/static/chunks/main-bb36d9d1b77a0899baba.js",revision:"5eoQFtxbN4DI8n2BR7Dn-"},{url:"/_next/static/chunks/pages/_app-b5a85bc0a52f446f43a2.js",revision:"5eoQFtxbN4DI8n2BR7Dn-"},{url:"/_next/static/chunks/pages/_error-82a806cd39f8ab3dc3ac.js",revision:"5eoQFtxbN4DI8n2BR7Dn-"},{url:"/_next/static/chunks/pages/index-6036850e963c5a5a61c6.js",revision:"5eoQFtxbN4DI8n2BR7Dn-"},{url:"/_next/static/chunks/pages/schedule-ac50941eac74e6967d46.js",revision:"5eoQFtxbN4DI8n2BR7Dn-"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"5eoQFtxbN4DI8n2BR7Dn-"},{url:"/_next/static/chunks/webpack-9fc9ab40a062a7008df3.js",revision:"5eoQFtxbN4DI8n2BR7Dn-"},{url:"/_next/static/css/deae7cff027706a25698.css",revision:"5eoQFtxbN4DI8n2BR7Dn-"},{url:"/_next/static/css/fdd3a144173d46f371b0.css",revision:"5eoQFtxbN4DI8n2BR7Dn-"},{url:"/favicon.ico",revision:"d17c789342723069e6566fd5dc249795"},{url:"/flags-icons/bg.png",revision:"fb609b10721a073fb3b6478ed4680ee1"},{url:"/flags-icons/de_DE.png",revision:"cc23f204eaadf5d54d2e131228fec9c0"},{url:"/flags-icons/en.png",revision:"86c43986e6fb957c00a70dc6367a4272"},{url:"/flags-icons/es_ES.png",revision:"1e3cc0d182d13d96609aa15fed6e8e08"},{url:"/flags-icons/et_EE.png",revision:"77640171cf2fcf947a2ab6ab8d9301b6"},{url:"/flags-icons/fr.png",revision:"d5c12041f2ddd200c2c881e5be833179"},{url:"/flags-icons/hu.png",revision:"f60200af2e87ba881f2ab88063307dc3"},{url:"/flags-icons/lt.png",revision:"dbaeb9d60e08c4e4754dbfeac3c57ec0"},{url:"/flags-icons/ro.png",revision:"a994210a55bda88e991283e3d59f2802"},{url:"/flags-icons/ru_RU.png",revision:"b36b3e38b06f82612ae94d26c3679795"},{url:"/icons/icon-192x192.png",revision:"e6c1fb0912e33d3629cc2fbd9af95ff4"},{url:"/icons/icon-256x256.png",revision:"0199b198ea0294df5f71984164c7fb87"},{url:"/icons/icon-384x384.png",revision:"8d57fc656303b01d04a13f027b9d7908"},{url:"/icons/icon-512x512.png",revision:"a23af58811b983ff897978ba24c22344"},{url:"/logo-JW.png",revision:"a6c0e736fc7a4e8b79c4b4ead35f8480"},{url:"/manifest.json",revision:"3dd6db1ec76516f5a7af227c67b1fa63"},{url:"/manifest.webmanifest",revision:"620da4a54a973bd82a72a0ee9fe212a0"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:a})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600,purgeOnQuotaError:!0})]}),"GET")}));