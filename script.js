// 游戏数据
const gamesData = [
    {
        id: 1,
        title: "Wacky Flip",
        category: "动作",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=200&fit=crop&crop=center",
        iframe: "https://1games.io/game/wacky-flip",
        description: "刺激的翻转冒险游戏，挑战你的反应能力",
        screenshotUrl: null // 将用于存储截取的封面图
    },
    {
        id: 2,
        title: "Cheese Chompers 3D",
        category: "动作",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop&crop=center",
        iframe: "https://cheesechompers-3d.io/game/165/",
        description: "3D奶酪吞噬者，享受美味的冒险之旅",
        screenshotUrl: null
    },
    {
        id: 3,
        title: "Snow Rush 3D",
        category: "竞速",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1548777123-e216912df7d8?w=300&h=200&fit=crop&crop=center",
        iframe: "https://html5.gamedistribution.com/e1e32230bdf040d69f4e367015e1c527/?gd_sdk_referrer_url=https://crazycattle3d.com/games/snow-rush-3d&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1",
        description: "3D雪地竞速游戏，体验极速滑行的快感",
        screenshotUrl: null
    },
    {
        id: 4,
        title: "Tower Crash 3D",
        category: "动作",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center",
        iframe: "https://html5.gamedistribution.com/b375b05ea29b40abaaf3606a2ff215ad/?gd_sdk_referrer_url=https://crazycattle3d.com/games/tower-crash-3d&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1",
        description: "3D塔楼碰撞游戏，摧毁一切障碍",
        screenshotUrl: null
    },
    {
        id: 5,
        title: "Tunnel Road",
        category: "竞速",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300&h=200&fit=crop&crop=center",
        iframe: "https://html5.gamedistribution.com/14e87fab0cbf44b6b3e57ddb77af5941/?gd_sdk_referrer_url=https://crazycattle3d.com/games/tunnel-road&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1",
        description: "隧道公路竞速，穿越无限延伸的通道",
        screenshotUrl: null
    },
    {
        id: 6,
        title: "Merge Flowers",
        category: "益智",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300&h=200&fit=crop&crop=center",
        iframe: "https://html5.gamedistribution.com/2e5863b7cc10444a88f72c81e74502f1/?gd_sdk_referrer_url=https://crazycattle3d.com/games/merge-flowers&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1",
        description: "合并花朵游戏，创造美丽的花园",
        screenshotUrl: null
    },
    {
        id: 7,
        title: "Obby On a Bike",
        category: "冒险",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&h=200&fit=crop&crop=center",
        iframe: "https://html5.gamedistribution.com/bc2f52c2d9d04e41aee48bef01075d22/?gd_sdk_referrer_url=https://crazycattle3d.com/games/obby-on-a-bike&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1",
        description: "自行车障碍赛，挑战各种高难度关卡",
        screenshotUrl: null
    },
    {
        id: 8,
        title: "Cat Chaos Simulator",
        category: "模拟",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=200&fit=crop&crop=center",
        iframe: "https://html5.gamedistribution.com/427f3a980dfc48e69e4329acdb5b9d8b/?gd_sdk_referrer_url=https://crazycattle3d.com/games/cat-chaos-simulator&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1",
        description: "猫咪混乱模拟器，体验可爱的猫咪世界",
        screenshotUrl: null
    },
    {
        id: 9,
        title: "Crazy Cattle 3D",
        category: "模拟",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1500595046743-cd271d694e30?w=300&h=200&fit=crop&crop=center",
        iframe: "https://yujiandemo.com/",
        description: "疯狂的3D牛群模拟游戏",
        screenshotUrl: null
    },
    {
        id: 10,
        title: "Crazy Cattle 3D 2",
        category: "模拟",
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1500595046743-cd271d694e30?w=300&h=200&fit=crop&crop=center&random=1",
        iframe: "https://yujiandemo.com/",
        description: "疯狂的3D牛群模拟游戏续作",
        screenshotUrl: null
    },
    {
        id: 11,
        title: "Crazy Cattle 3D 3",
        category: "模拟",
        rating: 4.1,
        image: "https://images.unsplash.com/photo-1500595046743-cd271d694e30?w=300&h=200&fit=crop&crop=center&random=2",
        iframe: "https://yujiandemo.com/",
        description: "疯狂的3D牛群模拟游戏第三部",
        screenshotUrl: null
    },
    {
        id: 22,
        title: "赛车竞速",
        category: "竞速",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300&h=200&fit=crop&crop=center",
        iframe: "https://html5.gamedistribution.com/14e87fab0cbf44b6b3e57ddb77af5941/?gd_sdk_referrer_url=https://crazycattle3d.com/games/tunnel-road&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1",
        description: "刺激的赛车竞速游戏"
    },
    {
        id: 23,
        title: "平台跳跃冒险",
        category: "动作",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&h=200&fit=crop&crop=center",
        iframe: "https://html5.gamedistribution.com/bc2f52c2d9d04e41aee48bef01075d22/?gd_sdk_referrer_url=https://crazycattle3d.com/games/obby-on-a-bike&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1",
        description: "经典的平台跳跃游戏"
    },
    {
        id: 24,
        title: "花朵消除",
        category: "益智",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300&h=200&fit=crop&crop=center",
        iframe: "https://html5.gamedistribution.com/2e5863b7cc10444a88f72c81e74502f1/?gd_sdk_referrer_url=https://crazycattle3d.com/games/merge-flowers&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1",
        description: "三消类游戏"
    },
    {
        id: 25,
        title: "塔楼碰撞",
        category: "动作",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center",
        iframe: "https://html5.gamedistribution.com/b375b05ea29b40abaaf3606a2ff215ad/?gd_sdk_referrer_url=https://crazycattle3d.com/games/tower-crash-3d&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1",
        description: "经典的塔防游戏"
    },
    {
        id: 26,
        title: "雪地竞速",
        category: "竞速",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1548777123-e216912df7d8?w=300&h=200&fit=crop&crop=center",
        iframe: "https://html5.gamedistribution.com/e1e32230bdf040d69f4e367015e1c527/?gd_sdk_referrer_url=https://crazycattle3d.com/games/snow-rush-3d&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1",
        description: "角色扮演冒险游戏"
    },
    {
        id: 27,
        title: "奶酪吞噬者",
        category: "动作",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop&crop=center",
        iframe: "https://cheesechompers-3d.io/game/165/",
        description: "复杂的解谜游戏"
    },
    {
        id: 28,
        title: "翻转冒险",
        category: "动作",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=200&fit=crop&crop=center",
        iframe: "https://1games.io/game/wacky-flip",
        description: "音乐节奏游戏"
    },
    {
        id: 29,
        title: "猫咪模拟器",
        category: "模拟",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=200&fit=crop&crop=center",
        iframe: "https://html5.gamedistribution.com/427f3a980dfc48e69e4329acdb5b9d8b/?gd_sdk_referrer_url=https://crazycattle3d.com/games/cat-chaos-simulator&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1",
        description: "模拟经营类游戏"
    },
    {
        id: 30,
        title: "疯狂牛群",
        category: "模拟",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1500595046743-cd271d694e30?w=300&h=200&fit=crop&crop=center",
        iframe: "https://yujiandemo.com/",
        description: "卡牌收集对战游戏"
    },
    {
        id: 31,
        title: "牛群模拟器2",
        category: "模拟",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1500595046743-cd271d694e30?w=300&h=200&fit=crop&crop=center&random=1",
        iframe: "https://yujiandemo.com/",
        description: "格斗对战游戏"
    },
    {
        id: 32,
        title: "牛群模拟器3",
        category: "模拟",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1500595046743-cd271d694e30?w=300&h=200&fit=crop&crop=center&random=2",
        iframe: "https://yujiandemo.com/",
        description: "第一人称射击游戏"
    },
    {
        id: 33,
        title: "隧道竞速",
        category: "竞速",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300&h=200&fit=crop&crop=center&random=3",
        iframe: "https://html5.gamedistribution.com/14e87fab0cbf44b6b3e57ddb77af5941/?gd_sdk_referrer_url=https://crazycattle3d.com/games/tunnel-road&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1",
        description: "生存冒险游戏"
    },
    {
        id: 34,
        title: "雪地滑行",
        category: "竞速",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1548777123-e216912df7d8?w=300&h=200&fit=crop&crop=center&random=4",
        iframe: "https://html5.gamedistribution.com/e1e32230bdf040d69f4e367015e1c527/?gd_sdk_referrer_url=https://crazycattle3d.com/games/snow-rush-3d&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1",
        description: "建造类游戏"
    },
    {
        id: 35,
        title: "塔楼破坏",
        category: "动作",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center&random=5",
        iframe: "https://html5.gamedistribution.com/b375b05ea29b40abaaf3606a2ff215ad/?gd_sdk_referrer_url=https://crazycattle3d.com/games/tower-crash-3d&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1",
        description: "探索冒险游戏"
    },
    {
        id: 36,
        title: "花朵合并",
        category: "益智",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300&h=200&fit=crop&crop=center&random=6",
        iframe: "https://html5.gamedistribution.com/2e5863b7cc10444a88f72c81e74502f1/?gd_sdk_referrer_url=https://crazycattle3d.com/games/merge-flowers&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1",
        description: "竞速类游戏"
    },
    {
        id: 37,
        title: "自行车冒险",
        category: "冒险",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&h=200&fit=crop&crop=center&random=7",
        iframe: "https://html5.gamedistribution.com/bc2f52c2d9d04e41aee48bef01075d22/?gd_sdk_referrer_url=https://crazycattle3d.com/games/obby-on-a-bike&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1",
        description: "策略类游戏"
    },
    {
        id: 38,
        title: "猫咪世界",
        category: "模拟",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=200&fit=crop&crop=center&random=8",
        iframe: "https://html5.gamedistribution.com/427f3a980dfc48e69e4329acdb5b9d8b/?gd_sdk_referrer_url=https://crazycattle3d.com/games/cat-chaos-simulator&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1",
        description: "益智类游戏"
    },
    {
        id: 39,
        title: "翻转挑战",
        category: "动作",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=200&fit=crop&crop=center&random=9",
        iframe: "https://1games.io/game/wacky-flip",
        description: "动作类游戏"
    },
    {
        id: 40,
        title: "奶酪冒险",
        category: "动作",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop&crop=center&random=10",
        iframe: "https://cheesechompers-3d.io/game/165/",
        description: "冒险类游戏"
    },
    {
        id: 41,
        title: "体育竞技",
        category: "动作",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&crop=center",
        iframe: "https://html5.gamedistribution.com/2abdcdeac7ef400985b05fcc7265d5b7/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
        description: "体育类游戏"
    },
    {
        id: 42,
        title: "音乐节奏",
        category: "动作",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop&crop=center",
        iframe: "https://html5.gamedistribution.com/2abdcdeac7ef400985b05fcc7265d5b7/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
        description: "音乐类游戏"
    },
    {
        id: 43,
        title: "教育益智",
        category: "益智",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop&crop=center",
        iframe: "https://html5.gamedistribution.com/2abdcdeac7ef400985b05fcc7265d5b7/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
        description: "教育类游戏"
    },
    {
        id: 44,
        title: "休闲时光",
        category: "益智",
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=200&fit=crop&crop=center&random=11",
        iframe: "https://html5.gamedistribution.com/2abdcdeac7ef400985b05fcc7265d5b7/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
        description: "休闲类游戏"
    },
    {
        id: 45,
        title: "角色扮演",
        category: "冒险",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&h=200&fit=crop&crop=center&random=12",
        iframe: "https://html5.gamedistribution.com/2abdcdeac7ef400985b05fcc7265d5b7/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
        description: "角色扮演游戏"
    },
    {
        id: 46,
        title: "模拟经营",
        category: "策略",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1500595046743-cd271d694e30?w=300&h=200&fit=crop&crop=center&random=13",
        iframe: "https://html5.gamedistribution.com/2abdcdeac7ef400985b05fcc7265d5b7/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
        description: "模拟类游戏"
    },
    {
        id: 47,
        title: "卡牌对战",
        category: "策略",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=200&fit=crop&crop=center&random=14",
        iframe: "https://html5.gamedistribution.com/2abdcdeac7ef400985b05fcc7265d5b7/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
        description: "卡牌类游戏"
    },
    {
        id: 48,
        title: "桌游策略",
        category: "策略",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&h=200&fit=crop&crop=center&random=15",
        iframe: "https://html5.gamedistribution.com/2abdcdeac7ef400985b05fcc7265d5b7/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
        description: "桌游类游戏"
    },
    {
        id: 49,
        title: "街机经典",
        category: "动作",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=200&fit=crop&crop=center&random=16",
        iframe: "https://html5.gamedistribution.com/2abdcdeac7ef400985b05fcc7265d5b7/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
        description: "街机类游戏"
    },
    {
        id: 50,
        title: "经典合集",
        category: "益智",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300&h=200&fit=crop&crop=center&random=17",
        iframe: "https://html5.gamedistribution.com/2abdcdeac7ef400985b05fcc7265d5b7/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}",
        description: "经典游戏合集"
    }
];

// 当前过滤类别
let currentFilter = '全部';

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    renderGames();
    setupEventListeners();
    
    // 初始化AI图像生成功能
    initAIImageGeneration();
});

// 渲染游戏卡片
function renderGames(filter = '全部') {
    const gamesGrid = document.getElementById('gamesGrid');
    const filteredGames = filter === '全部' ? gamesData : gamesData.filter(game => game.category === filter);
    
    gamesGrid.innerHTML = '';
    
    filteredGames.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
}

// 创建游戏卡片
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.setAttribute('data-game-id', game.id);
    
    card.innerHTML = `
        <div class="game-image">
            <img src="${game.screenshotUrl || game.image}" alt="${game.title}" onerror="this.style.display='none'">
            <div class="game-overlay">
                <button class="capture-btn" onclick="gameScreenshot.captureSingleGame(${game.id})" title="截取游戏封面">
                    📸 截图
                </button>
            </div>
        </div>
        <div class="game-info">
            <h3>${game.title}</h3>
            <div class="game-meta">
                <span class="category">${game.category}</span>
                <span class="rating">⭐ ${game.rating}</span>
            </div>
            <p>${game.description}</p>
        </div>
    `;
    
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('capture-btn')) {
            openGameDetail(game);
        }
    });
    
    return card;
}

// 设置事件监听器
function setupEventListeners() {
    // 过滤按钮
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有活动状态
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 添加当前活动状态
            this.classList.add('active');
            
            const filter = this.textContent;
            currentFilter = filter;
            renderGames(filter);
        });
    });
    
    // 搜索功能
    const searchInput = document.querySelector('.nav-search input');
    const searchButton = document.querySelector('.nav-search button');
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // CTA按钮
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function() {
        document.querySelector('.games-section').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
}

// 执行搜索
function performSearch() {
    const searchTerm = document.querySelector('.nav-search input').value.toLowerCase();
    const gamesGrid = document.getElementById('gamesGrid');
    
    if (!searchTerm) {
        renderGames(currentFilter);
        return;
    }
    
    const filteredGames = gamesData.filter(game => 
        game.title.toLowerCase().includes(searchTerm) ||
        game.category.toLowerCase().includes(searchTerm) ||
        game.description.toLowerCase().includes(searchTerm)
    );
    
    gamesGrid.innerHTML = '';
    filteredGames.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
}

// 打开游戏详情页面
function openGameDetail(game) {
    // 创建游戏详情页面URL参数
    const params = new URLSearchParams({
        id: game.id,
        title: game.title,
        category: game.category,
        rating: game.rating,
        iframe: game.iframe,
        description: game.description
    });
    
    // 跳转到游戏详情页面
    window.location.href = `game-detail.html?${params.toString()}`;
}

// 平滑滚动效果
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// 添加滚动动画
window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.game-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardVisible = 150;
        
        if (cardTop < window.innerHeight - cardVisible) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}); 

// 游戏截图功能 - 简化版本
class GameScreenshot {
    constructor() {
        this.screenshotQueue = [];
        this.isProcessing = false;
        this.screenshotContainer = null;
    }

    // 初始化截图容器
    initScreenshotContainer() {
        if (this.screenshotContainer) return;
        
        this.screenshotContainer = document.createElement('div');
        this.screenshotContainer.id = 'screenshot-container';
        this.screenshotContainer.style.cssText = `
            position: fixed;
            top: -9999px;
            left: -9999px;
            width: 800px;
            height: 600px;
            z-index: -1;
            overflow: hidden;
        `;
        document.body.appendChild(this.screenshotContainer);
    }

    // 截取单个游戏截图
    async captureGameScreenshot(game) {
        return new Promise((resolve, reject) => {
            this.initScreenshotContainer();
            
            // 创建临时iframe
            const iframe = document.createElement('iframe');
            iframe.src = game.iframe;
            iframe.style.cssText = `
                width: 100%;
                height: 100%;
                border: none;
                display: block;
            `;
            
            this.screenshotContainer.appendChild(iframe);

            // 等待iframe加载
            iframe.onload = () => {
                setTimeout(async () => {
                    try {
                        // 尝试使用html2canvas截图
                        if (typeof html2canvas !== 'undefined') {
                            const canvas = await html2canvas(iframe.contentDocument.body, {
                                width: 800,
                                height: 600,
                                scale: 0.375, // 300/800
                                useCORS: true,
                                allowTaint: true,
                                backgroundColor: '#000000'
                            });
                            
                            const screenshotUrl = canvas.toDataURL('image/jpeg', 0.8);
                            this.screenshotContainer.removeChild(iframe);
                            resolve(screenshotUrl);
                        } else {
                            // 备用方案：使用预定义图片
                            const fallbackUrl = this.getFallbackScreenshot(game);
                            this.screenshotContainer.removeChild(iframe);
                            resolve(fallbackUrl);
                        }
                    } catch (error) {
                        console.error(`截图失败: ${game.title}`, error);
                        const fallbackUrl = this.getFallbackScreenshot(game);
                        this.screenshotContainer.removeChild(iframe);
                        resolve(fallbackUrl);
                    }
                }, 2000); // 等待2秒让游戏加载
            };

            iframe.onerror = () => {
                const fallbackUrl = this.getFallbackScreenshot(game);
                this.screenshotContainer.removeChild(iframe);
                resolve(fallbackUrl);
            };
        });
    }

    // 获取备用截图URL
    getFallbackScreenshot(game) {
        const fallbackMap = {
            'Wacky Flip': 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=200&fit=crop&crop=center',
            'Cheese Chompers 3D': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop&crop=center',
            'Snow Rush 3D': 'https://images.unsplash.com/photo-1548777123-e216912df7d8?w=300&h=200&fit=crop&crop=center',
            'Tower Crash 3D': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center',
            'Tunnel Road': 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300&h=200&fit=crop&crop=center',
            'Merge Flowers': 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300&h=200&fit=crop&crop=center',
            'Obby On a Bike': 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&h=200&fit=crop&crop=center',
            'Cat Chaos Simulator': 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=200&fit=crop&crop=center',
            'Crazy Cattle 3D': 'https://images.unsplash.com/photo-1500595046743-cd271d694e30?w=300&h=200&fit=crop&crop=center'
        };
        
        return fallbackMap[game.title] || game.image;
    }

    // 更新游戏卡片图片
    updateGameCardImage(game, screenshotUrl) {
        const gameCards = document.querySelectorAll(`[data-game-id="${game.id}"]`);
        gameCards.forEach(card => {
            const img = card.querySelector('img');
            if (img && screenshotUrl) {
                img.src = screenshotUrl;
                img.style.transition = 'opacity 0.3s ease';
                // 添加截图标识
                card.classList.add('has-screenshot');
            }
        });
    }

    // 手动截取单个游戏
    async captureSingleGame(gameId) {
        const game = gamesData.find(g => g.id === gameId);
        if (!game) return;

        const button = document.querySelector(`[data-game-id="${gameId}"] .capture-btn`);
        if (button) {
            button.textContent = '📸 截图中...';
            button.disabled = true;
        }

        try {
            const screenshotUrl = await this.captureGameScreenshot(game);
            game.screenshotUrl = screenshotUrl;
            this.updateGameCardImage(game, screenshotUrl);
            
            // 保存到localStorage
            this.saveScreenshotToStorage(game.id, screenshotUrl);
            
            if (button) {
                button.textContent = '✅ 已截图';
                setTimeout(() => {
                    button.textContent = '📸 重新截图';
                    button.disabled = false;
                }, 2000);
            }
        } catch (error) {
            console.error('截图失败:', error);
            if (button) {
                button.textContent = '❌ 截图失败';
                setTimeout(() => {
                    button.textContent = '📸 重新截图';
                    button.disabled = false;
                }, 2000);
            }
        }
    }

    // 保存截图到localStorage
    saveScreenshotToStorage(gameId, screenshotUrl) {
        try {
            const screenshots = JSON.parse(localStorage.getItem('gameScreenshots') || '{}');
            screenshots[gameId] = screenshotUrl;
            localStorage.setItem('gameScreenshots', JSON.stringify(screenshots));
        } catch (error) {
            console.error('保存截图失败:', error);
        }
    }

    // 从localStorage加载截图
    loadScreenshotsFromStorage() {
        try {
            const screenshots = JSON.parse(localStorage.getItem('gameScreenshots') || '{}');
            Object.keys(screenshots).forEach(gameId => {
                const game = gamesData.find(g => g.id === parseInt(gameId));
                if (game) {
                    game.screenshotUrl = screenshots[gameId];
                    this.updateGameCardImage(game, screenshots[gameId]);
                }
            });
        } catch (error) {
            console.error('加载截图失败:', error);
        }
    }

    // 批量截取所有游戏
    async captureAllGames() {
        const button = document.querySelector('.screenshot-all-btn');
        if (button) {
            button.textContent = '📸 批量截图中...';
            button.disabled = true;
        }

        for (let i = 0; i < gamesData.length; i++) {
            const game = gamesData[i];
            try {
                const screenshotUrl = await this.captureGameScreenshot(game);
                game.screenshotUrl = screenshotUrl;
                this.updateGameCardImage(game, screenshotUrl);
                this.saveScreenshotToStorage(game.id, screenshotUrl);
                
                // 更新进度
                if (button) {
                    button.textContent = `📸 截图中... (${i + 1}/${gamesData.length})`;
                }
                
                // 延迟避免过快请求
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (error) {
                console.error(`截图失败: ${game.title}`, error);
            }
        }

        if (button) {
            button.textContent = '✅ 批量截图完成';
            setTimeout(() => {
                button.textContent = '🖼️ 批量更新封面';
                button.disabled = false;
            }, 2000);
        }
    }
}

// 移除截图功能

// AI图像生成功能
class AIImageGenerator {
    constructor() {
        this.config = window.AIConfig || {};
        this.baseUrl = this.config.unsplash?.baseUrl || 'https://api.unsplash.com/search/photos';
    }

    // 根据游戏信息生成搜索关键词
    generateSearchKeywords(game) {
        const { title, description, category } = game;
        let keywords = [];
        
        // 从标题提取关键词
        const titleWords = title.toLowerCase().split(/[\s\-_]+/);
        keywords.push(...titleWords.filter(word => word.length > 2));
        
        // 从描述提取关键词
        const descWords = description.toLowerCase().split(/[\s,，。！？]+/);
        keywords.push(...descWords.filter(word => word.length > 2));
        
        // 添加分类关键词
        const categoryKeywords = {
            '动作': ['action', 'game', 'adventure'],
            '竞速': ['racing', 'speed', 'car', 'vehicle'],
            '益智': ['puzzle', 'brain', 'logic'],
            '冒险': ['adventure', 'exploration', 'quest'],
            '模拟': ['simulation', 'realistic', 'life'],
            '策略': ['strategy', 'tactical', 'planning'],
            '射击': ['shooting', 'fps', 'gun'],
            '体育': ['sports', 'athletic', 'competition']
        };
        
        if (categoryKeywords[category]) {
            keywords.push(...categoryKeywords[category]);
        }
        
        // 去重并限制数量
        keywords = [...new Set(keywords)].slice(0, 5);
        
        return keywords.join(' ');
    }

    // 使用免费图片服务生成相关图片
    async generateImageFromFreeServices(game) {
        try {
            const keywords = this.generateSearchKeywords(game);
            
            // 如果配置了免费模式，使用Lorem Picsum
            if (this.config.freeMode) {
                return this.generateFromLoremPicsum(game);
            }
            
            // 尝试使用Unsplash（无需密钥的版本）
            if (this.config.unsplash?.baseUrl) {
                const result = await this.generateFromUnsplash(game, keywords);
                if (result) return result;
            }
            
            // 尝试使用Pixabay
            if (this.config.pixabay?.apiKey) {
                const result = await this.generateFromPixabay(game, keywords);
                if (result) return result;
            }
            
            // 最后使用Lorem Picsum作为备用
            return this.generateFromLoremPicsum(game);
            
        } catch (error) {
            console.error('免费图片服务生成失败:', error);
            return this.generateFromLoremPicsum(game);
        }
    }
    
    // 使用Lorem Picsum生成随机图片
    generateFromLoremPicsum(game) {
        const width = this.config.generationParams?.width || 300;
        const height = this.config.generationParams?.height || 200;
        const seed = this.generateSeedFromGame(game);
        
        return {
            url: `${this.config.loremPicsum?.baseUrl || 'https://picsum.photos'}/${width}/${height}?random=${seed}`,
            alt: game.title,
            generated: true,
            source: 'Lorem Picsum'
        };
    }
    
    // 使用Unsplash搜索图片（无需密钥）
    async generateFromUnsplash(game, keywords) {
        try {
            const query = encodeURIComponent(keywords);
            const url = `${this.config.unsplash?.baseUrl}?query=${query}&per_page=1&orientation=landscape`;
            
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error('Unsplash API请求失败');
            }
            
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                const image = data.results[0];
                return {
                    url: image.urls.regular,
                    alt: image.alt_description || game.title,
                    photographer: image.user.name,
                    source: 'Unsplash'
                };
            }
            
            return null;
        } catch (error) {
            console.error('Unsplash图片生成失败:', error);
            return null;
        }
    }
    
    // 使用Pixabay搜索图片
    async generateFromPixabay(game, keywords) {
        try {
            const query = encodeURIComponent(keywords);
            const apiKey = this.config.pixabay?.apiKey;
            const url = `${this.config.pixabay?.baseUrl}?key=${apiKey}&q=${query}&image_type=photo&per_page=1&orientation=horizontal`;
            
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error('Pixabay API请求失败');
            }
            
            const data = await response.json();
            if (data.hits && data.hits.length > 0) {
                const image = data.hits[0];
                return {
                    url: image.webformatURL,
                    alt: game.title,
                    photographer: image.user,
                    source: 'Pixabay'
                };
            }
            
            return null;
        } catch (error) {
            console.error('Pixabay图片生成失败:', error);
            return null;
        }
    }
    
    // 根据游戏信息生成种子值
    generateSeedFromGame(game) {
        const seedString = `${game.title}${game.category}${game.description}`;
        let hash = 0;
        for (let i = 0; i < seedString.length; i++) {
            const char = seedString.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // 转换为32位整数
        }
        return Math.abs(hash);
    }

    // 使用免费的AI图像生成服务（示例）
    async generateAIImage(game) {
        try {
            const prompt = this.generateAIPrompt(game);
            
            // 这里可以集成各种AI图像生成API
            // 例如：Stable Diffusion API, DALL-E API, Midjourney API等
            
            // 示例：使用免费的Hugging Face API
            const response = await fetch(`https://api-inference.huggingface.co/models/${this.config.huggingFace?.model || 'runwayml/stable-diffusion-v1-5'}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.config.huggingFace?.token || 'YOUR_HUGGING_FACE_TOKEN'}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    inputs: prompt,
                    parameters: {
                        width: this.config.generationParams?.width || 512,
                        height: this.config.generationParams?.height || 512
                    }
                })
            });
            
            if (!response.ok) {
                throw new Error('AI图像生成API请求失败');
            }
            
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            
            return {
                url: imageUrl,
                alt: game.title,
                generated: true
            };
        } catch (error) {
            console.error('AI图像生成失败:', error);
            return null;
        }
    }

    // 生成AI提示词
    generateAIPrompt(game) {
        const { title, description, category } = game;
        
        // 根据游戏类型生成不同的提示词
        const categoryPrompts = {
            '动作': 'action game, dynamic, exciting, colorful',
            '竞速': 'racing game, speed, vehicles, motion blur',
            '益智': 'puzzle game, brain teaser, colorful blocks',
            '冒险': 'adventure game, exploration, fantasy world',
            '模拟': 'simulation game, realistic, detailed',
            '策略': 'strategy game, tactical, planning',
            '射击': 'shooting game, fps, weapons, action',
            '体育': 'sports game, athletic, competition'
        };
        
        const basePrompt = categoryPrompts[category] || 'video game, colorful, fun';
        const titleWords = title.toLowerCase().split(/[\s\-_]+/).slice(0, 3).join(' ');
        
        return `${titleWords}, ${basePrompt}, game art, digital art, high quality, 4k`;
    }

    // 批量生成游戏图片
    async generateImagesForAllGames() {
        const games = gamesData.filter(game => !game.generatedImage);
        const results = [];
        
        for (let i = 0; i < games.length; i++) {
            const game = games[i];
            console.log(`正在为游戏 "${game.title}" 生成图片... (${i + 1}/${games.length})`);
            
            try {
                // 优先使用AI生成，失败则使用免费图片服务
                let imageResult = await this.generateAIImage(game);
                
                if (!imageResult) {
                    imageResult = await this.generateImageFromFreeServices(game);
                }
                
                if (imageResult) {
                    game.generatedImage = imageResult.url;
                    game.image = imageResult.url; // 更新游戏图片
                    game.imageAlt = imageResult.alt;
                    
                    // 保存到本地存储
                    this.saveGeneratedImage(game.id, imageResult);
                    
                    // 更新UI
                    this.updateGameCardImage(game);
                    
                    results.push({
                        gameId: game.id,
                        title: game.title,
                        success: true,
                        imageUrl: imageResult.url
                    });
                } else {
                    results.push({
                        gameId: game.id,
                        title: game.title,
                        success: false,
                        error: '图片生成失败'
                    });
                }
                
                // 添加延迟避免API限制
                await new Promise(resolve => setTimeout(resolve, this.config.requestDelay || 1000));
                
            } catch (error) {
                console.error(`为游戏 "${game.title}" 生成图片时出错:`, error);
                results.push({
                    gameId: game.id,
                    title: game.title,
                    success: false,
                    error: error.message
                });
            }
        }
        
        return results;
    }

    // 保存生成的图片到本地存储
    saveGeneratedImage(gameId, imageResult) {
        try {
            const key = `generated_image_${gameId}`;
            const data = {
                url: imageResult.url,
                alt: imageResult.alt,
                generated: imageResult.generated || false,
                timestamp: Date.now()
            };
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error('保存生成的图片失败:', error);
        }
    }

    // 从本地存储加载生成的图片
    loadGeneratedImages() {
        gamesData.forEach(game => {
            try {
                const key = `generated_image_${game.id}`;
                const data = localStorage.getItem(key);
                
                if (data) {
                    const imageData = JSON.parse(data);
                    game.generatedImage = imageData.url;
                    game.image = imageData.url;
                    game.imageAlt = imageData.alt;
                }
            } catch (error) {
                console.error(`加载游戏 ${game.id} 的生成图片失败:`, error);
            }
        });
    }

    // 更新游戏卡片图片
    updateGameCardImage(game) {
        const gameCard = document.querySelector(`[data-game-id="${game.id}"]`);
        if (gameCard) {
            const imgElement = gameCard.querySelector('.game-image img');
            if (imgElement) {
                imgElement.src = game.image;
                imgElement.alt = game.imageAlt || game.title;
                
                // 添加生成标记
                if (game.generatedImage) {
                    imgElement.classList.add('ai-generated');
                }
            }
        }
    }

    // 显示生成进度
    showGenerationProgress(current, total) {
        let progressBar = document.getElementById('ai-generation-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.id = 'ai-generation-progress';
            progressBar.className = 'ai-generation-progress';
            progressBar.innerHTML = `
                <div class="progress-container">
                    <div class="progress-bar">
                        <div class="progress-fill"></div>
                    </div>
                    <div class="progress-text">正在生成图片... ${current}/${total}</div>
                </div>
            `;
            document.body.appendChild(progressBar);
        } else {
            const progressFill = progressBar.querySelector('.progress-fill');
            const progressText = progressBar.querySelector('.progress-text');
            const percentage = (current / total) * 100;
            
            progressFill.style.width = `${percentage}%`;
            progressText.textContent = `正在生成图片... ${current}/${total}`;
        }
    }

    // 隐藏生成进度
    hideGenerationProgress() {
        const progressBar = document.getElementById('ai-generation-progress');
        if (progressBar) {
            progressBar.remove();
        }
    }
}

// 创建AI图像生成器实例
const aiImageGenerator = new AIImageGenerator();

// 创建游戏卡片
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.setAttribute('data-game-id', game.id);
    
    card.innerHTML = `
        <div class="game-image">
            <img src="${game.image}" alt="${game.title}" onerror="this.style.display='none'">
        </div>
        <div class="game-info">
            <h3>${game.title}</h3>
            <div class="game-meta">
                <span class="category">${game.category}</span>
                <span class="rating">⭐ ${game.rating}</span>
            </div>
            <p>${game.description}</p>
        </div>
    `;
    
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('capture-btn')) {
            openGameDetail(game);
        }
    });
    
    return card;
}

// 添加截图按钮样式
const style = document.createElement('style');
style.textContent = `
    .game-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .game-card:hover .game-overlay {
        opacity: 1;
    }
    
    .capture-btn {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 20px;
        cursor: pointer;
        font-size: 12px;
        transition: all 0.3s ease;
    }
    
    .capture-btn:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    }
    
    .capture-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
    
    .screenshot-all-btn {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        padding: 12px 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        font-size: 14px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    }
    
    .screenshot-all-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0,0,0,0.3);
    }
    
    .screenshot-all-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none;
    }
    
    .game-card.has-screenshot .game-image::after {
        content: '📸';
        position: absolute;
        top: 5px;
        right: 5px;
        background: rgba(0,0,0,0.7);
        color: white;
        padding: 2px 6px;
        border-radius: 10px;
        font-size: 10px;
    }
`;
document.head.appendChild(style);

// 添加批量截图按钮
function addScreenshotButtons() {
    // 批量截图按钮
    const allButton = document.createElement('button');
    allButton.className = 'screenshot-all-btn';
    allButton.textContent = '🖼️ 批量更新封面';
    allButton.addEventListener('click', () => {
        gameScreenshot.captureAllGames();
    });
    document.body.appendChild(allButton);

    // 加载已保存的截图
    gameScreenshot.loadScreenshotsFromStorage();
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(addScreenshotButtons, 1000);
}); 

// 添加AI图像生成按钮
function addAIGenerationButtons() {
    // 查找合适的位置添加按钮
    const gamesSection = document.querySelector('.games-section');
    if (!gamesSection) return;
    
    // 检查是否已经添加过按钮
    if (document.getElementById('ai-generation-controls')) return;
    
    const controlsDiv = document.createElement('div');
    controlsDiv.id = 'ai-generation-controls';
    controlsDiv.className = 'generation-controls';
    
    controlsDiv.innerHTML = `
        <button class="ai-generate-btn" onclick="generateAllGameImages()" id="generate-all-btn">
            🤖 批量生成游戏图片
        </button>
        <button class="ai-generate-btn" onclick="generateSingleGameImage()" id="generate-single-btn">
            🎨 生成单个游戏图片
        </button>
        <button class="ai-generate-btn" onclick="clearGeneratedImages()" id="clear-images-btn">
            🗑️ 清除生成的图片
        </button>
        <button class="ai-generate-btn" onclick="showGenerationStatus()" id="status-btn">
            📊 生成状态
        </button>
    `;
    
    // 在游戏列表前插入控制按钮
    const gamesContainer = gamesSection.querySelector('.games-container');
    if (gamesContainer) {
        gamesSection.insertBefore(controlsDiv, gamesContainer);
    } else {
        gamesSection.appendChild(controlsDiv);
    }
}

// 批量生成所有游戏图片
async function generateAllGameImages() {
    const generateBtn = document.getElementById('generate-all-btn');
    if (generateBtn) {
        generateBtn.disabled = true;
        generateBtn.textContent = '🔄 生成中...';
    }
    
    try {
        // 显示状态信息
        showStatus('开始批量生成游戏图片...', 'info');
        
        const results = await aiImageGenerator.generateImagesForAllGames();
        
        const successCount = results.filter(r => r.success).length;
        const failCount = results.length - successCount;
        
        if (successCount > 0) {
            showStatus(`成功生成 ${successCount} 张图片，失败 ${failCount} 张`, 'success');
        } else {
            showStatus('图片生成失败，请检查网络连接或API配置', 'error');
        }
        
        // 重新渲染游戏列表以显示新图片
        renderGames();
        
    } catch (error) {
        console.error('批量生成图片失败:', error);
        showStatus('批量生成图片时发生错误: ' + error.message, 'error');
    } finally {
        if (generateBtn) {
            generateBtn.disabled = false;
            generateBtn.textContent = '🤖 批量生成游戏图片';
        }
    }
}

// 生成单个游戏图片
async function generateSingleGameImage() {
    const gameId = prompt('请输入要生成图片的游戏ID:');
    if (!gameId) return;
    
    const game = gamesData.find(g => g.id == gameId);
    if (!game) {
        alert('未找到指定ID的游戏');
        return;
    }
    
    const generateBtn = document.getElementById('generate-single-btn');
    if (generateBtn) {
        generateBtn.disabled = true;
        generateBtn.textContent = '🔄 生成中...';
    }
    
    try {
        showStatus(`正在为游戏 "${game.title}" 生成图片...`, 'info');
        
        // 优先使用AI生成，失败则使用免费图片服务
        let imageResult = await aiImageGenerator.generateAIImage(game);
        
        if (!imageResult) {
            imageResult = await aiImageGenerator.generateImageFromFreeServices(game);
        }
        
        if (imageResult) {
            game.generatedImage = imageResult.url;
            game.image = imageResult.url;
            game.imageAlt = imageResult.alt;
            
            // 保存到本地存储
            aiImageGenerator.saveGeneratedImage(game.id, imageResult);
            
            // 更新UI
            aiImageGenerator.updateGameCardImage(game);
            
            showStatus(`成功为游戏 "${game.title}" 生成图片`, 'success');
            
            // 重新渲染游戏列表
            renderGames();
        } else {
            showStatus(`为游戏 "${game.title}" 生成图片失败`, 'error');
        }
        
    } catch (error) {
        console.error('生成单个游戏图片失败:', error);
        showStatus('生成图片时发生错误: ' + error.message, 'error');
    } finally {
        if (generateBtn) {
            generateBtn.disabled = false;
            generateBtn.textContent = '🎨 生成单个游戏图片';
        }
    }
}

// 清除生成的图片
function clearGeneratedImages() {
    if (!confirm('确定要清除所有生成的图片吗？这将恢复原始图片。')) {
        return;
    }
    
    try {
        // 清除本地存储
        gamesData.forEach(game => {
            const key = `generated_image_${game.id}`;
            localStorage.removeItem(key);
            
            // 恢复原始图片
            if (game.generatedImage) {
                delete game.generatedImage;
                delete game.imageAlt;
                
                // 恢复为原始图片或默认图片
                if (game.originalImage) {
                    game.image = game.originalImage;
                }
            }
        });
        
        // 重新渲染游戏列表
        renderGames();
        
        showStatus('已清除所有生成的图片', 'success');
        
    } catch (error) {
        console.error('清除生成的图片失败:', error);
        showStatus('清除图片时发生错误: ' + error.message, 'error');
    }
}

// 显示生成状态
function showGenerationStatus() {
    const generatedGames = gamesData.filter(game => game.generatedImage);
    const totalGames = gamesData.length;
    
    let statusHtml = `
        <div class="generation-status info">
            <h4>图片生成状态</h4>
            <p>总游戏数: ${totalGames}</p>
            <p>已生成图片: ${generatedGames.length}</p>
            <p>生成比例: ${((generatedGames.length / totalGames) * 100).toFixed(1)}%</p>
        </div>
    `;
    
    if (generatedGames.length > 0) {
        statusHtml += '<div class="generation-status success"><h4>已生成图片的游戏:</h4><ul>';
        generatedGames.forEach(game => {
            statusHtml += `<li>${game.title} (ID: ${game.id})</li>`;
        });
        statusHtml += '</ul></div>';
    }
    
    // 创建模态框显示状态
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            ${statusHtml}
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 关闭模态框
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => modal.remove();
    
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
}

// 显示状态信息
function showStatus(message, type = 'info') {
    // 移除现有的状态信息
    const existingStatus = document.querySelector('.generation-status');
    if (existingStatus) {
        existingStatus.remove();
    }
    
    const statusDiv = document.createElement('div');
    statusDiv.className = `generation-status ${type}`;
    statusDiv.textContent = message;
    
    // 插入到页面顶部
    const gamesSection = document.querySelector('.games-section');
    if (gamesSection) {
        gamesSection.insertBefore(statusDiv, gamesSection.firstChild);
        
        // 3秒后自动移除
        setTimeout(() => {
            if (statusDiv.parentNode) {
                statusDiv.remove();
            }
        }, 3000);
    }
}

// 初始化AI图像生成功能
function initAIImageGeneration() {
    // 加载已生成的图片
    aiImageGenerator.loadGeneratedImages();
    
    // 添加控制按钮
    addAIGenerationButtons();
    
    // 为每个游戏保存原始图片
    gamesData.forEach(game => {
        if (!game.originalImage) {
            game.originalImage = game.image;
        }
    });
    
    console.log('AI图像生成功能已初始化');
}

// 在页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    
    // 初始化AI图像生成功能
    initAIImageGeneration();
});

// 导出函数供全局使用
window.generateAllGameImages = generateAllGameImages;
window.generateSingleGameImage = generateSingleGameImage;
window.clearGeneratedImages = clearGeneratedImages;
window.showGenerationStatus = showGenerationStatus; 