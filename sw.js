/* OD CRM App：只为了可以「安装」成 App。不存任何缓存，资料照样每次从网上拿（不会看到旧资料） */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* 不拦截，全部照常走网络 */ });
