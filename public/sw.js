if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,a,r)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return n;case"module":return i;default:return e(s)}}))).then((e=>{const s=r(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/IDEhaBUw3PV8jMERjjw7m/_buildManifest.js",revision:"IDEhaBUw3PV8jMERjjw7m"},{url:"/_next/static/IDEhaBUw3PV8jMERjjw7m/_ssgManifest.js",revision:"IDEhaBUw3PV8jMERjjw7m"},{url:"/_next/static/chunks/218-dc2b10f75ec2c1dbd8ab.js",revision:"IDEhaBUw3PV8jMERjjw7m"},{url:"/_next/static/chunks/29107295-62449f6ab50432c0efef.js",revision:"IDEhaBUw3PV8jMERjjw7m"},{url:"/_next/static/chunks/427-4ba1dfd4c3945f7f971a.js",revision:"IDEhaBUw3PV8jMERjjw7m"},{url:"/_next/static/chunks/641-a81eb88af26298dbc932.js",revision:"IDEhaBUw3PV8jMERjjw7m"},{url:"/_next/static/chunks/98f61148-27ad6c160049d8471945.js",revision:"IDEhaBUw3PV8jMERjjw7m"},{url:"/_next/static/chunks/framework-2f612445bd50b211f15a.js",revision:"IDEhaBUw3PV8jMERjjw7m"},{url:"/_next/static/chunks/main-6faba60a17f550d1e5f1.js",revision:"IDEhaBUw3PV8jMERjjw7m"},{url:"/_next/static/chunks/pages/_app-38ceb6b75ef5082b556e.js",revision:"IDEhaBUw3PV8jMERjjw7m"},{url:"/_next/static/chunks/pages/_error-70375524866f704e88d0.js",revision:"IDEhaBUw3PV8jMERjjw7m"},{url:"/_next/static/chunks/pages/index-622d48707252832fe5cb.js",revision:"IDEhaBUw3PV8jMERjjw7m"},{url:"/_next/static/chunks/pages/schedule-08da0b28385ce9ce3fc4.js",revision:"IDEhaBUw3PV8jMERjjw7m"},{url:"/_next/static/chunks/polyfills-e7a279300235e161e32a.js",revision:"IDEhaBUw3PV8jMERjjw7m"},{url:"/_next/static/chunks/webpack-9fc9ab40a062a7008df3.js",revision:"IDEhaBUw3PV8jMERjjw7m"},{url:"/_next/static/css/2ae7f06b2ee4b28f5be4.css",revision:"IDEhaBUw3PV8jMERjjw7m"},{url:"/_next/static/css/c767bcd3b94891fb2fbc.css",revision:"IDEhaBUw3PV8jMERjjw7m"},{url:"/_next/static/css/deae7cff027706a25698.css",revision:"IDEhaBUw3PV8jMERjjw7m"},{url:"/favicon3.ico",revision:"d17c789342723069e6566fd5dc249795"},{url:"/flags-icons/bg.png",revision:"fb609b10721a073fb3b6478ed4680ee1"},{url:"/flags-icons/de.png",revision:"cc23f204eaadf5d54d2e131228fec9c0"},{url:"/flags-icons/en.png",revision:"86c43986e6fb957c00a70dc6367a4272"},{url:"/flags-icons/es.png",revision:"1e3cc0d182d13d96609aa15fed6e8e08"},{url:"/flags-icons/et.png",revision:"77640171cf2fcf947a2ab6ab8d9301b6"},{url:"/flags-icons/fr.png",revision:"d5c12041f2ddd200c2c881e5be833179"},{url:"/flags-icons/hu.png",revision:"f60200af2e87ba881f2ab88063307dc3"},{url:"/flags-icons/lt.png",revision:"dbaeb9d60e08c4e4754dbfeac3c57ec0"},{url:"/flags-icons/ro.png",revision:"a994210a55bda88e991283e3d59f2802"},{url:"/flags-icons/ru.png",revision:"b36b3e38b06f82612ae94d26c3679795"},{url:"/icons/icon-192x192.png",revision:"e6c1fb0912e33d3629cc2fbd9af95ff4"},{url:"/icons/icon-256x256.png",revision:"0199b198ea0294df5f71984164c7fb87"},{url:"/icons/icon-384x384.png",revision:"8d57fc656303b01d04a13f027b9d7908"},{url:"/icons/icon-512x512.png",revision:"a23af58811b983ff897978ba24c22344"},{url:"/logo-JW.png",revision:"a6c0e736fc7a4e8b79c4b4ead35f8480"},{url:"/manifest.json",revision:"bda794e400083494c18acfea0fcd5406"},{url:"/manifest.webmanifest",revision:"620da4a54a973bd82a72a0ee9fe212a0"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600,purgeOnQuotaError:!0})]}),"GET")}));
