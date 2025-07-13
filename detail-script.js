// 游戏详情页面JavaScript

// 游戏数据（与首页相同）
const gamesData = [
    {
        id: 1,
        title: "Wacky Flip",
        category: "动作",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=200&fit=crop&crop=center",
        iframe: "https://1games.io/game/wacky-flip",
        description: "刺激的翻转冒险游戏，挑战你的反应能力"
    },
    {
        id: 2,
        title: "Cheese Chompers 3D",
        category: "动作",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop&crop=center",
        iframe: "https://cheesechompers-3d.io/game/165/",
        description: "3D奶酪吞噬者，享受美味的冒险之旅"
    },
    {
        id: 3,
        title: "Snow Rush 3D",
        category: "竞速",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1548777123-e216912df7d8?w=300&h=200&fit=crop&crop=center",
        iframe: "https://html5.gamedistribution.com/e1e32230bdf040d69f4e367015e1c527/?gd_sdk_referrer_url=https://crazycattle3d.com/games/snow-rush-3d&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1",
        description: "3D雪地竞速游戏，体验极速滑行的快感"
    },
    {
        id: 4,
        title: "Tower Crash 3D",
        category: "动作",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center",
        iframe: "https://html5.gamedistribution.com/b375b05ea29b40abaaf3606a2ff215ad/?gd_sdk_referrer_url=https://crazycattle3d.com/games/tower-crash-3d&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1",
        description: "3D塔楼碰撞游戏，摧毁一切障碍"
    },
    {
        id: 5,
        title: "Tunnel Road",
        category: "竞速",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300&h=200&fit=crop&crop=center",
        iframe: "https://html5.gamedistribution.com/14e87fab0cbf44b6b3e57ddb77af5941/?gd_sdk_referrer_url=https://crazycattle3d.com/games/tunnel-road&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1",
        description: "隧道公路竞速，穿越无限延伸的通道"
    },
    {
        id: 6,
        title: "Merge Flowers",
        category: "益智",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300&h=200&fit=crop&crop=center",
        iframe: "https://html5.gamedistribution.com/2e5863b7cc10444a88f72c81e74502f1/?gd_sdk_referrer_url=https://crazycattle3d.com/games/merge-flowers&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1",
        description: "合并花朵游戏，创造美丽的花园"
    },
    {
        id: 7,
        title: "Obby On a Bike",
        category: "冒险",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&h=200&fit=crop&crop=center",
        iframe: "https://html5.gamedistribution.com/bc2f52c2d9d04e41aee48bef01075d22/?gd_sdk_referrer_url=https://crazycattle3d.com/games/obby-on-a-bike&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1",
        description: "自行车障碍赛，挑战各种高难度关卡"
    },
    {
        id: 8,
        title: "Cat Chaos Simulator",
        category: "模拟",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=200&fit=crop&crop=center",
        iframe: "https://html5.gamedistribution.com/427f3a980dfc48e69e4329acdb5b9d8b/?gd_sdk_referrer_url=https://crazycattle3d.com/games/cat-chaos-simulator&gdpr-tracking=1&gdpr-targeting=1&gdpr-third-party=1",
        description: "猫咪混乱模拟器，体验可爱的猫咪世界"
    },
    {
        id: 9,
        title: "Crazy Cattle 3D",
        category: "模拟",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1500595046743-cd271d694e30?w=300&h=200&fit=crop&crop=center",
        iframe: "https://yujiandemo.com/",
        description: "疯狂的3D牛群模拟游戏"
    },
    {
        id: 10,
        title: "Crazy Cattle 3D 2",
        category: "模拟",
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1500595046743-cd271d694e30?w=300&h=200&fit=crop&crop=center&random=1",
        iframe: "https://yujiandemo.com/",
        description: "疯狂的3D牛群模拟游戏续作"
    },
    {
        id: 11,
        title: "Crazy Cattle 3D 3",
        category: "模拟",
        rating: 4.1,
        image: "https://images.unsplash.com/photo-1500595046743-cd271d694e30?w=300&h=200&fit=crop&crop=center&random=2",
        iframe: "https://yujiandemo.com/",
        description: "疯狂的3D牛群模拟游戏第三部"
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

// 当前游戏信息
let currentGame = null;

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    loadGameFromURL();
    setupEventListeners();
});

// 从URL加载游戏信息
function loadGameFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = parseInt(urlParams.get('id'));
    
    if (gameId) {
        currentGame = gamesData.find(game => game.id === gameId);
        if (currentGame) {
            displayGameInfo(currentGame);
            loadRelatedGames(currentGame);
        } else {
            showError('游戏未找到');
        }
    } else {
        // 如果没有ID参数，尝试从其他参数构建游戏对象
        currentGame = {
            id: urlParams.get('id') || 1,
            title: urlParams.get('title') || '未知游戏',
            category: urlParams.get('category') || '未知分类',
            rating: parseFloat(urlParams.get('rating')) || 4.0,
            iframe: urlParams.get('iframe') || 'https://games.construct.net/2048/latest',
            description: urlParams.get('description') || '游戏描述不可用'
        };
        displayGameInfo(currentGame);
        loadRelatedGames(currentGame);
    }
}

// 显示游戏信息
function displayGameInfo(game) {
    // 更新页面标题
    document.title = `${game.title} - GameHub`;
    
    // 更新游戏标题
    document.getElementById('gameTitle').textContent = game.title;
    document.getElementById('gameCategory').textContent = game.category;
    
    // 更新评分
    const stars = '★'.repeat(Math.floor(game.rating)) + '☆'.repeat(5 - Math.floor(game.rating));
    document.getElementById('gameStars').textContent = stars;
    document.getElementById('gameRating').textContent = game.rating;
    
    // 更新游戏iframe
    const gameIframe = document.getElementById('gameIframe');
    gameIframe.src = game.iframe;
    
    // 更新信息卡片
    document.getElementById('infoTitle').textContent = game.title;
    document.getElementById('infoCategory').textContent = game.category;
    document.getElementById('infoRating').textContent = game.rating;
    document.getElementById('infoId').textContent = game.id;
    
    // 更新游戏描述
    document.getElementById('gameDescription').textContent = game.description;
    
    // 更新游戏标签
    updateGameTags(game);
    
    // 添加加载状态
    gameIframe.onload = function() {
        console.log('游戏加载完成');
    };
    
    gameIframe.onerror = function() {
        showError('游戏加载失败');
    };
}

// 更新游戏标签
function updateGameTags(game) {
    const tagsContainer = document.getElementById('gameTags');
    const tags = [game.category];
    
    // 根据游戏类型添加额外标签
    if (game.category === '益智') {
        tags.push('逻辑', '思考');
    } else if (game.category === '动作') {
        tags.push('反应', '操作');
    } else if (game.category === '策略') {
        tags.push('计划', '战术');
    } else if (game.category === '冒险') {
        tags.push('探索', '剧情');
    } else if (game.category === '模拟经营') {
        tags.push('管理', '经营');
    }
    
    tagsContainer.innerHTML = tags.map(tag => `<span class="tag">${tag}</span>`).join('');
}

// 加载相关游戏
function loadRelatedGames(currentGame) {
    const relatedGamesContainer = document.getElementById('relatedGames');
    
    // 获取同类别或相似评分的游戏
    const relatedGames = gamesData
        .filter(game => game.id !== currentGame.id)
        .filter(game => 
            game.category === currentGame.category || 
            Math.abs(game.rating - currentGame.rating) < 0.5
        )
        .slice(0, 6); // 最多显示6个相关游戏
    
    relatedGamesContainer.innerHTML = relatedGames.map(game => `
        <div class="related-game-card" onclick="openGameDetail(${game.id})">
            <div class="related-game-image">
                <img src="${game.image}" alt="${game.title}" onerror="this.style.display='none'">
            </div>
            <div class="related-game-info">
                <div class="related-game-title">${game.title}</div>
                <div class="related-game-category">${game.category}</div>
            </div>
        </div>
    `).join('');
}

// 设置事件监听器
function setupEventListeners() {
    // 全屏按钮
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    
    // 刷新按钮
    const refreshBtn = document.getElementById('refreshBtn');
    refreshBtn.addEventListener('click', refreshGame);
    
    // 收藏按钮
    const favoriteBtn = document.querySelector('.favorite-btn');
    favoriteBtn.addEventListener('click', toggleFavorite);
    
    // 分享按钮
    const shareBtn = document.querySelector('.share-btn');
    shareBtn.addEventListener('click', shareGame);
    
    // 键盘快捷键
    document.addEventListener('keydown', handleKeyboardShortcuts);
}

// 切换全屏模式
function toggleFullscreen() {
    const gameFrame = document.querySelector('.game-frame');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const icon = fullscreenBtn.querySelector('i');
    
    if (!gameFrame.classList.contains('fullscreen')) {
        gameFrame.classList.add('fullscreen');
        icon.className = 'fas fa-compress';
        fullscreenBtn.title = '退出全屏';
    } else {
        gameFrame.classList.remove('fullscreen');
        icon.className = 'fas fa-expand';
        fullscreenBtn.title = '全屏';
    }
}

// 刷新游戏
function refreshGame() {
    const gameIframe = document.getElementById('gameIframe');
    const currentSrc = gameIframe.src;
    gameIframe.src = '';
    setTimeout(() => {
        gameIframe.src = currentSrc;
    }, 100);
}

// 切换收藏状态
function toggleFavorite() {
    const favoriteBtn = document.querySelector('.favorite-btn');
    const icon = favoriteBtn.querySelector('i');
    const text = favoriteBtn.querySelector('span');
    
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        text.textContent = '已收藏';
        favoriteBtn.style.background = '#ff6b6b';
        favoriteBtn.style.borderColor = '#ff6b6b';
        showNotification('游戏已添加到收藏');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        text.textContent = '收藏';
        favoriteBtn.style.background = 'rgba(255, 255, 255, 0.1)';
        favoriteBtn.style.borderColor = '#333';
        showNotification('游戏已从收藏中移除');
    }
}

// 分享游戏
function shareGame() {
    if (navigator.share) {
        navigator.share({
            title: currentGame.title,
            text: `来玩${currentGame.title}吧！`,
            url: window.location.href
        });
    } else {
        // 复制链接到剪贴板
        navigator.clipboard.writeText(window.location.href).then(() => {
            showNotification('游戏链接已复制到剪贴板');
        });
    }
}

// 处理键盘快捷键
function handleKeyboardShortcuts(event) {
    switch(event.key) {
        case 'f':
        case 'F':
            if (event.ctrlKey || event.metaKey) {
                event.preventDefault();
                toggleFullscreen();
            }
            break;
        case 'r':
        case 'R':
            if (event.ctrlKey || event.metaKey) {
                event.preventDefault();
                refreshGame();
            }
            break;
        case 'Escape':
            const gameFrame = document.querySelector('.game-frame');
            if (gameFrame.classList.contains('fullscreen')) {
                toggleFullscreen();
            }
            break;
    }
}

// 打开游戏详情页面
function openGameDetail(gameId) {
    const params = new URLSearchParams({
        id: gameId
    });
    window.location.href = `game-detail.html?${params.toString()}`;
}

// 显示错误信息
function showError(message) {
    const gameFrame = document.querySelector('.game-frame');
    gameFrame.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-triangle"></i>
            <div>
                <h3>加载失败</h3>
                <p>${message}</p>
                <button onclick="refreshGame()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #00ff88; color: #000; border: none; border-radius: 5px; cursor: pointer;">重试</button>
            </div>
        </div>
    `;
}

// 显示通知
function showNotification(message) {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #00ff88;
        color: #000;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        z-index: 10000;
        font-weight: bold;
        box-shadow: 0 4px 15px rgba(0, 255, 136, 0.3);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 自动隐藏
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 页面可见性变化处理
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // 页面隐藏时暂停游戏（如果可能）
        console.log('页面已隐藏');
    } else {
        // 页面显示时恢复游戏
        console.log('页面已显示');
    }
});

// 窗口大小变化处理
window.addEventListener('resize', function() {
    const gameFrame = document.querySelector('.game-frame');
    if (gameFrame.classList.contains('fullscreen')) {
        // 全屏模式下重新调整iframe大小
        const iframe = document.getElementById('gameIframe');
        iframe.style.width = '100vw';
        iframe.style.height = '100vh';
    }
}); 