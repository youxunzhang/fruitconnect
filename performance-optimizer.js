// 性能优化器 - 游戏网站加载优化
class GamePerformanceOptimizer {
    constructor() {
        this.gameData = {
            popular: [
                { title: "Snow Rush 3D", src: "https://html5.gamedistribution.com/e1e32230bdf040d69f4e367015e1c527/?gd_sdk_referrer_url=https://crazycattle3d.com/games/snow-rush-3d&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1" },
                { title: "Tower Crash 3D", src: "https://html5.gamedistribution.com/b375b05ea29b40abaaf3606a2ff215ad/?gd_sdk_referrer_url=https://crazycattle3d.com/games/tower-crash-3d&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1" },
                { title: "Tunnel Road", src: "https://html5.gamedistribution.com/14e87fab0cbf44b6b3e57ddb77af5941/?gd_sdk_referrer_url=https://crazycattle3d.com/games/tunnel-road&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1" },
                { title: "Merge Flowers", src: "https://html5.gamedistribution.com/2e5863b7cc10444a88f72c81e74502f1/?gd_sdk_referrer_url=https://crazycattle3d.com/games/merge-flowers&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1" },
                { title: "Obby On a Bike", src: "https://html5.gamedistribution.com/bc2f52c2d9d04e41aee48bef01075d22/?gd_sdk_referrer_url=https://crazycattle3d.com/games/obby-on-a-bike&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1" },
                { title: "Cat Chaos Simulator", src: "https://html5.gamedistribution.com/427f3a980dfc48e69e4329acdb5b9d8b/?gd_sdk_referrer_url=https://crazycattle3d.com/games/cat-chaos-simulator&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1" },
                { title: "Memoji", src: "https://html5.gamedistribution.com/50c56858d355416ba84e18c68321a69b/?gd_sdk_referrer_url=https://gamedistribution.com/games/memoji/&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1" },
                { title: "Cityquest", src: "https://html5.gamedistribution.com/31068f4a88af4d3da31feeeddaeb44c8/?gd_sdk_referrer_url=https://gamedistribution.com/games/cityquest/&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1" },
                { title: "10K", src: "https://html5.gamedistribution.com/3acc054600054896b62bda751eaef869/?gd_sdk_referrer_url=https://www.example.com/games/10k&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1" },
                { title: "Phrasle Master", src: "https://html5.gamedistribution.com/1adf969783854409b65b5ccb0873ea8a/?gd_sdk_referrer_url=https://www.example.com/games/phrasle-master" }
            ],
            featured: [
                { title: "Scratch Game", src: "https://scratch.mit.edu/projects/1102118868/embed" },
                { title: "Bloxdhop IO", src: "https://games.crazygames.com/en_US/bloxdhop-io/index.html" },
                { title: "Fortzone Battle Royale", src: "https://www.crazygames.com/embed/fortzone-battle-royale-xkd" },
                { title: "Famobi Game", src: "https://play.famobi.com/" },
                { title: "Two Player Boxing", src: "https://www.twoplayergames.org/gameframe/boxing-random" },
                { title: "Tortoise Truck", src: "https://19584.cache.armorgames.com/files/games/tortoise-truck-19584/index.html?v=1749056973" }
            ],
            brainTeasers: [
                { title: "Memoji", src: "https://html5.gamedistribution.com/50c56858d355416ba84e18c68321a69b/?gd_sdk_referrer_url=https://youxistudio.online/#homes/memoji/" },
                { title: "Cityquest", src: "https://html5.gamedistribution.com/31068f4a88af4d3da31feeeddaeb44c8/?gd_sdk_referrer_url=https://youxistudio.online/#homes/cityquest/" },
                { title: "10K", src: "https://html5.gamedistribution.com/3acc054600054896b62bda751eaef869/?gd_sdk_referrer_url=https://youxistudio.online/#homes/10k/" },
                { title: "Phrasle Master", src: "https://html5.gamedistribution.com/1adf969783854409b65b5ccb0873ea8a/?gd_sdk_referrer_url=https://youxistudio.online/#homes/phrasle-master/" },
                { title: "Word Search", src: "https://html5.gamedistribution.com/c13ee9c06edc4f0a8d7f6f291a7c13d8/?gd_sdk_referrer_url=https://youxistudio.online/#homes/word-search/" },
                { title: "Kitty Scramble", src: "https://html5.gamedistribution.com/944186abe50e452dac7f0e8d3e0a8814/?gd_sdk_referrer_url=https://youxistudio.online/#homes/kitty-scramble/" }
            ]
        };
        
        this.loadedGames = new Set();
        this.intersectionObserver = null;
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.renderGameGrids();
        this.setupSearch();
        this.setupMobileMenu();
        this.hideLoadingScreen();
    }

    // 设置交叉观察器用于懒加载
    setupIntersectionObserver() {
        this.intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    this.preloadGame(card);
                }
            });
        }, {
            rootMargin: '50px',
            threshold: 0.1
        });
    }

    // 创建游戏卡片
    createGameCard(game) {
        const card = document.createElement('div');
        card.className = 'game-card loading';
        card.setAttribute('data-src', game.src);
        card.setAttribute('data-title', game.title);
        
        card.innerHTML = `
            <div class="game-title">${game.title}</div>
            <div class="game-placeholder" style="width: 100%; height: 200px; background: #e0e0e0; border-radius: 10px; margin-top: 0.5rem; display: flex; align-items: center; justify-content: center; color: #666; cursor: pointer;">
                <span>点击加载游戏</span>
            </div>
        `;
        
        // 添加点击事件
        card.addEventListener('click', () => this.loadGameIframe(card));
        
        // 添加到观察器
        this.intersectionObserver.observe(card);
        
        return card;
    }

    // 预加载游戏
    preloadGame(card) {
        const src = card.getAttribute('data-src');
        if (this.loadedGames.has(src)) return;
        
        // 预加载但不立即显示
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = src;
        document.head.appendChild(link);
        
        this.loadedGames.add(src);
    }

    // 加载游戏iframe
    loadGameIframe(card) {
        if (card.querySelector('iframe')) return;
        
        const src = card.getAttribute('data-src');
        const title = card.getAttribute('data-title');
        
        card.classList.remove('loading');
        
        const iframe = document.createElement('iframe');
        iframe.src = src;
        iframe.style.cssText = 'width: 100%; height: 200px; border: none; border-radius: 10px; margin-top: 0.5rem; background: #e0e0e0;';
        iframe.allowfullscreen = true;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.sandbox = 'allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation';
        iframe.title = title;
        
        const placeholder = card.querySelector('.game-placeholder');
        if (placeholder) {
            placeholder.parentNode.replaceChild(iframe, placeholder);
        }
    }

    // 渲染游戏网格
    renderGameGrids() {
        this.renderGameGrid('gamesGrid', this.gameData.popular, 8);
        this.renderGameGrid('featuredGamesGrid', this.gameData.featured, 4);
        this.renderGameGrid('brainTeasersGrid', this.gameData.brainTeasers, 6);
    }

    renderGameGrid(containerId, games, maxVisible = 6) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = '';
        
        // 显示初始游戏
        games.slice(0, maxVisible).forEach(game => {
            const card = this.createGameCard(game);
            container.appendChild(card);
        });
        
        // 添加加载更多按钮
        if (games.length > maxVisible) {
            this.addLoadMoreButton(container, games, maxVisible);
        }
    }

    addLoadMoreButton(container, games, currentCount) {
        const loadMoreBtn = document.createElement('button');
        loadMoreBtn.textContent = '加载更多游戏';
        loadMoreBtn.style.cssText = 'grid-column: 1 / -1; padding: 1rem; background: #667eea; color: white; border: none; border-radius: 10px; cursor: pointer; margin-top: 1rem; font-weight: bold;';
        
        loadMoreBtn.addEventListener('click', () => {
            this.loadMoreGames(container, games, currentCount);
        });
        
        container.appendChild(loadMoreBtn);
    }

    loadMoreGames(container, games, currentCount) {
        const nextBatch = games.slice(currentCount, currentCount + 6);
        
        nextBatch.forEach(game => {
            const card = this.createGameCard(game);
            container.appendChild(card);
        });
        
        // 更新或移除加载更多按钮
        const loadMoreBtn = container.querySelector('button');
        if (loadMoreBtn) {
            if (currentCount + 6 < games.length) {
                loadMoreBtn.onclick = () => this.loadMoreGames(container, games, currentCount + 6);
            } else {
                loadMoreBtn.remove();
            }
        }
    }

    // 搜索功能
    setupSearch() {
        const searchInput = document.getElementById('searchInput');
        if (!searchInput) return;
        
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const searchTerm = e.target.value.toLowerCase();
                const gameCards = document.querySelectorAll('.game-card');
                
                gameCards.forEach(card => {
                    const title = card.getAttribute('data-title') || '';
                    card.style.display = title.toLowerCase().includes(searchTerm) ? 'block' : 'none';
                });
            }, 300);
        });
    }

    // 移动端菜单
    setupMobileMenu() {
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu) {
            mobileMenu.addEventListener('click', () => {
                const navLinks = document.querySelector('.nav-links');
                if (navLinks) {
                    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
                }
            });
        }
    }

    // 隐藏加载屏幕
    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 800);
        }
    }
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new GamePerformanceOptimizer();
    });
} else {
    new GamePerformanceOptimizer();
}

