// 优化的Service Worker - 游戏网站缓存策略
const CACHE_NAME = 'game-studio-v2';
const STATIC_CACHE = 'static-v2';
const DYNAMIC_CACHE = 'dynamic-v2';

// 需要缓存的静态资源
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/games.html',
    '/Browser.html',
    '/company-ranking.html',
    '/rubiks-cube.html',
    '/performance-optimizer.js',
    '/sw.js'
];

// 需要缓存的第三方资源
const EXTERNAL_RESOURCES = [
    'https://www.googletagmanager.com/gtag/js?id=G-F9DEFKMPM5',
    'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8794607118520437'
];

// 游戏资源缓存策略
const GAME_DOMAINS = [
    'html5.gamedistribution.com',
    'scratch.mit.edu',
    'games.crazygames.com',
    'www.crazygames.com',
    'play.famobi.com',
    'www.twoplayergames.org',
    '19584.cache.armorgames.com'
];

// 安装事件 - 缓存静态资源
self.addEventListener('install', event => {
    console.log('Service Worker installing...');
    
    event.waitUntil(
        Promise.all([
            // 缓存静态资源
            caches.open(STATIC_CACHE).then(cache => {
                console.log('Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            }),
            
            // 预缓存关键资源
            caches.open(DYNAMIC_CACHE).then(cache => {
                console.log('Caching external resources');
                return cache.addAll(EXTERNAL_RESOURCES);
            })
        ]).then(() => {
            console.log('Service Worker installed successfully');
            return self.skipWaiting();
        })
    );
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', event => {
    console.log('Service Worker activating...');
    
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    // 删除旧版本的缓存
                    if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE && cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('Service Worker activated');
            return self.clients.claim();
        })
    );
});

// 获取事件 - 智能缓存策略
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);
    
    // 跳过非GET请求
    if (request.method !== 'GET') {
        return;
    }
    
    // 跳过chrome扩展等
    if (url.protocol === 'chrome-extension:') {
        return;
    }
    
    event.respondWith(
        handleRequest(request, url)
    );
});

// 处理请求的智能策略
async function handleRequest(request, url) {
    const isStaticAsset = STATIC_ASSETS.includes(url.pathname);
    const isExternalResource = EXTERNAL_RESOURCES.includes(request.url);
    const isGameResource = GAME_DOMAINS.some(domain => url.hostname.includes(domain));
    
    try {
        // 静态资源：缓存优先策略
        if (isStaticAsset) {
            return await cacheFirst(request, STATIC_CACHE);
        }
        
        // 外部资源：网络优先，失败时使用缓存
        if (isExternalResource) {
            return await networkFirst(request, DYNAMIC_CACHE);
        }
        
        // 游戏资源：网络优先，但缓存时间较短
        if (isGameResource) {
            return await networkFirst(request, DYNAMIC_CACHE, 5 * 60 * 1000); // 5分钟缓存
        }
        
        // 其他资源：网络优先
        return await networkFirst(request, DYNAMIC_CACHE);
        
    } catch (error) {
        console.error('Fetch failed:', error);
        
        // 如果是HTML页面，返回离线页面
        if (request.headers.get('accept').includes('text/html')) {
            return caches.match('/index.html');
        }
        
        // 其他资源返回默认响应
        return new Response('Network error', { status: 503 });
    }
}

// 缓存优先策略
async function cacheFirst(request, cacheName) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
        return cachedResponse;
    }
    
    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(cacheName);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        throw error;
    }
}

// 网络优先策略
async function networkFirst(request, cacheName, maxAge = 24 * 60 * 60 * 1000) { // 默认24小时
    try {
        const networkResponse = await fetch(request);
        
        if (networkResponse.ok) {
            const cache = await caches.open(cacheName);
            cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        // 网络失败，尝试从缓存获取
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            // 检查缓存是否过期
            const cacheTime = new Date(cachedResponse.headers.get('sw-cache-time'));
            if (Date.now() - cacheTime.getTime() < maxAge) {
                return cachedResponse;
            }
        }
        throw error;
    }
}

// 后台同步 - 预缓存游戏资源
self.addEventListener('sync', event => {
    if (event.tag === 'precache-games') {
        event.waitUntil(precacheGameResources());
    }
});

// 预缓存游戏资源
async function precacheGameResources() {
    const gameUrls = [
        'https://html5.gamedistribution.com/e1e32230bdf040d69f4e367015e1c527/',
        'https://html5.gamedistribution.com/b375b05ea29b40abaaf3606a2ff215ad/',
        'https://html5.gamedistribution.com/14e87fab0cbf44b6b3e57ddb77af5941/'
    ];
    
    const cache = await caches.open(DYNAMIC_CACHE);
    
    for (const url of gameUrls) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                await cache.put(url, response);
            }
        } catch (error) {
            console.log('Failed to precache:', url, error);
        }
    }
}

// 消息处理 - 用于与主线程通信
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'CACHE_GAME') {
        event.waitUntil(cacheGame(event.data.url));
    }
});

// 缓存特定游戏
async function cacheGame(url) {
    try {
        const cache = await caches.open(DYNAMIC_CACHE);
        const response = await fetch(url);
        if (response.ok) {
            await cache.put(url, response);
            console.log('Game cached:', url);
        }
    } catch (error) {
        console.error('Failed to cache game:', url, error);
    }
}

