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
        title: "贪吃蛇大作战",
        category: "益智",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center",
        iframe: "snake-game.html",
        description: "经典贪吃蛇游戏，控制蛇吃食物不断成长",
        screenshotUrl: null,
        isLocalGame: true
    },
    {
        id: 12,
        title: "弹球游戏",
        category: "动作",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=200&fit=crop&crop=center&random=2",
        iframe: "pong-game.html",
        description: "经典弹球游戏，用挡板反弹球体",
        screenshotUrl: null,
        isLocalGame: true
    },
    {
        id: 13,
        title: "2048数字游戏",
        category: "益智",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center&random=3",
        iframe: "2048-game.html",
        description: "数字合并游戏，挑战你的逻辑思维",
        screenshotUrl: null,
        isLocalGame: true
    }
];

// 当前过滤状态
let currentFilter = 'all';

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    setupEventListeners();
    renderGames();
    initAIImageGeneration();
    initScrollEffects();
    initStatisticsAnimation();
    initCategoryCards();
    initAIChatStats(); // 添加AI聊天模型统计动画初始化
});

// 初始化页面
function initializePage() {
    console.log('GameHub 初始化中...');
    
    // 添加页面加载动画
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
}

// 初始化滚动效果
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// 初始化统计数字动画
function initStatisticsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

// 数字动画函数
function animateNumber(element) {
    const finalValue = element.textContent;
    const isPercentage = finalValue.includes('%');
    const isPlus = finalValue.includes('+');
    const isSlash = finalValue.includes('/');
    
    let numericValue;
    if (isPercentage) {
        numericValue = parseInt(finalValue.replace('%', ''));
    } else if (isPlus) {
        numericValue = parseInt(finalValue.replace('+', ''));
    } else if (isSlash) {
        numericValue = parseInt(finalValue.split('/')[0]);
    } else {
        numericValue = parseInt(finalValue);
    }
    
    let currentValue = 0;
    const increment = numericValue / 50;
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= numericValue) {
            currentValue = numericValue;
            clearInterval(timer);
        }
        
        let displayValue = Math.floor(currentValue);
        if (isPercentage) {
            element.textContent = displayValue + '%';
        } else if (isPlus) {
            element.textContent = displayValue + '+';
        } else if (isSlash) {
            element.textContent = displayValue + '/7';
        } else {
            element.textContent = displayValue;
        }
    }, 30);
}

// 初始化分类卡片
function initCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.querySelector('h3').textContent;
            filterGamesByCategory(category);
            
            // 滚动到游戏区域
            document.querySelector('.games-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// 根据分类过滤游戏
function filterGamesByCategory(category) {
    const categoryMap = {
        '动作冒险': 'action',
        '策略益智': 'strategy',
        '竞速体育': 'racing',
        '模拟经营': 'simulation'
    };
    
    const filterValue = categoryMap[category] || 'all';
    currentFilter = filterValue;
    
    // 更新按钮状态
    updateFilterButtons(filterValue);
    
    // 重新渲染游戏
    renderGames();
}

// 更新过滤按钮状态
function updateFilterButtons(activeFilter) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === activeFilter) {
            btn.classList.add('active');
        }
    });
}

// 渲染游戏列表
function renderGames(filter = 'all') {
    const gamesGrid = document.getElementById('gamesGrid');
    if (!gamesGrid) return;
    
    // 清空现有内容
    gamesGrid.innerHTML = '';
    
    // 过滤游戏
    let filteredGames = gamesData;
    if (filter !== 'all') {
        const categoryMap = {
            'action': '动作',
            'strategy': '策略',
            'puzzle': '益智',
            'adventure': '冒险',
            'simulation': '模拟',
            'racing': '竞速',
            'survival': '生存'
        };
        
        const targetCategory = categoryMap[filter];
        filteredGames = gamesData.filter(game => game.category === targetCategory);
    }
    
    // 创建游戏卡片
    filteredGames.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
    
    // 添加动画效果
    const cards = gamesGrid.querySelectorAll('.game-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// 创建游戏卡片
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', Math.random() * 500);
    
    // 使用生成的图片或默认图片
    const imageUrl = game.screenshotUrl || game.image;
    
    // 为本地游戏添加特殊标识
    const localGameBadge = game.isLocalGame ? '<div class="local-game-badge">🎮 本地游戏</div>' : '';
    
    card.innerHTML = `
        <div class="game-image">
            <img src="${imageUrl}" alt="${game.title}" loading="lazy">
            <div class="game-overlay">
                <button class="play-btn" onclick="openGameDetail(${game.id})">
                    <i class="fas fa-play"></i>
                </button>
            </div>
            ${localGameBadge}
        </div>
        <div class="game-info">
            <h3 class="game-title">${game.title}</h3>
            <p class="game-category">${game.category}</p>
            <div class="game-rating">
                <div class="stars">
                    ${generateStars(game.rating)}
                </div>
                <span class="rating-text">${game.rating}</span>
            </div>
            <p class="game-description">${game.description}</p>
            <div class="game-actions">
                <button class="action-btn primary" onclick="openGameDetail(${game.id})">
                    <i class="fas fa-gamepad"></i>
                    ${game.isLocalGame ? '立即游戏' : '开始游戏'}
                </button>
                <button class="action-btn secondary" onclick="showGameDetails(${game.id})">
                    <i class="fas fa-info-circle"></i>
                    详情
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// 生成星级评分
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// 设置事件监听器
function setupEventListeners() {
    // 搜索功能
    const searchInput = document.querySelector('.nav-search input');
    const searchButton = document.querySelector('.nav-search button');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }
    
    // 过滤按钮
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            currentFilter = filter;
            
            // 更新按钮状态
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // 重新渲染游戏
            renderGames(filter);
        });
    });
    
    // CTA按钮
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (btn.classList.contains('primary')) {
                // 滚动到游戏区域
                document.querySelector('.games-section').scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                // 显示更多信息
                showMoreInfo();
            }
        });
    });
    
    // 用户按钮
    const userBtn = document.querySelector('.user-btn');
    const notificationBtn = document.querySelector('.notification-btn');
    
    if (userBtn) {
        userBtn.addEventListener('click', () => {
            showUserMenu();
        });
    }
    
    if (notificationBtn) {
        notificationBtn.addEventListener('click', () => {
            showNotifications();
        });
    }
}

// 执行搜索
function performSearch() {
    const searchInput = document.querySelector('.nav-search input');
    const query = searchInput.value.trim().toLowerCase();
    
    if (query === '') {
        renderGames(currentFilter);
        return;
    }
    
    const filteredGames = gamesData.filter(game => 
        game.title.toLowerCase().includes(query) ||
        game.category.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query)
    );
    
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = '';
    
    filteredGames.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
    
    // 显示搜索结果提示
    showSearchResults(filteredGames.length, query);
}

// 显示搜索结果提示
function showSearchResults(count, query) {
    const gamesGrid = document.getElementById('gamesGrid');
    const resultsInfo = document.createElement('div');
    resultsInfo.className = 'search-results-info';
    resultsInfo.innerHTML = `
        <p>找到 <strong>${count}</strong> 个与 "<strong>${query}</strong>" 相关的游戏</p>
        <button onclick="clearSearch()" class="clear-search-btn">
            <i class="fas fa-times"></i>
            清除搜索
        </button>
    `;
    
    gamesGrid.insertBefore(resultsInfo, gamesGrid.firstChild);
}

// 清除搜索
function clearSearch() {
    const searchInput = document.querySelector('.nav-search input');
    searchInput.value = '';
    renderGames(currentFilter);
}

// 打开游戏详情
function openGameDetail(gameId) {
    const game = gamesData.find(g => g.id === gameId);
    if (!game) return;
    
    // 如果是本地游戏，直接在新窗口打开
    if (game.isLocalGame) {
        window.open(game.iframe, '_blank');
        return;
    }
    
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class="game-detail">
                <h2>${game.title}</h2>
                <div class="game-frame-container">
                    <iframe src="${game.iframe}" width="100%" height="500" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="game-info-detail">
                    <p><strong>分类:</strong> ${game.category}</p>
                    <p><strong>评分:</strong> ${game.rating}/5.0</p>
                    <p><strong>描述:</strong> ${game.description}</p>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 关闭模态框
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => {
        document.body.removeChild(modal);
    };
    
    modal.onclick = (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    };
}

// 显示游戏详情
function showGameDetails(gameId) {
    const game = gamesData.find(g => g.id === gameId);
    if (!game) return;
    
    // 这里可以添加更详细的游戏信息展示
    alert(`${game.title}\n\n分类: ${game.category}\n评分: ${game.rating}/5.0\n\n${game.description}`);
}

// 显示更多信息
function showMoreInfo() {
    // 滚动到特色功能区域
    document.querySelector('.features-section').scrollIntoView({
        behavior: 'smooth'
    });
}

// 显示用户菜单
function showUserMenu() {
    // 这里可以添加用户菜单功能
    alert('用户菜单功能开发中...');
}

// 显示通知
function showNotifications() {
    // 这里可以添加通知功能
    alert('暂无新通知');
}

// 平滑滚动
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
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
        // gameScreenshot.captureAllGames(); // 移除此行
    });
    document.body.appendChild(allButton);

    // 加载已保存的截图
    // gameScreenshot.loadScreenshotsFromStorage(); // 移除此行
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
window.generateSingleGameImage = generateSingleGameImage;
window.clearGeneratedImages = clearGeneratedImages;
window.showGenerationStatus = showGenerationStatus; 

// 显示模型详情
function showModelDetails(modelType) {
    const modelInfo = {
        venice: {
            name: 'Venice AI Chat',
            description: 'Venice AI是一个先进的AI聊天平台，提供多语言支持和智能对话功能。',
            features: [
                '支持50+种语言',
                '智能问答系统',
                '创意写作助手',
                '实时翻译功能',
                '个性化对话体验',
                '企业级安全保障'
            ],
            url: 'https://venice.ai/chat'
        },
        t3: {
            name: 'T3 Chat',
            description: 'T3 Chat专注于提供快速、精准的AI对话服务，适合各种专业场景。',
            features: [
                '超快速响应（0.5秒内）',
                '99.5%准确率',
                '100+专业场景支持',
                '实时学习更新',
                '多用户协作',
                'API接口支持'
            ],
            url: 'https://t3.chat/chat'
        }
    };
    
    const model = modelInfo[modelType];
    if (!model) return;
    
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class="model-detail">
                <div class="model-detail-header">
                    <div class="model-detail-icon">
                        <i class="fas fa-${modelType === 'venice' ? 'robot' : 'brain'}"></i>
                    </div>
                    <h2>${model.name}</h2>
                </div>
                <p class="model-detail-description">${model.description}</p>
                <div class="model-detail-features">
                    <h3>主要功能</h3>
                    <ul>
                        ${model.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="model-detail-actions">
                    <a href="${model.url}" target="_blank" class="chat-btn primary">
                        <i class="fas fa-external-link-alt"></i>
                        访问官网
                    </a>
                    <button class="chat-btn secondary" onclick="closeModal()">
                        <i class="fas fa-times"></i>
                        关闭
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 关闭模态框
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = closeModal;
    
    modal.onclick = (e) => {
        if (e.target === modal) {
            closeModal();
        }
    };
    
    function closeModal() {
        document.body.removeChild(modal);
    }
}

// 初始化AI聊天模型统计动画
function initAIChatStats() {
    const statValues = document.querySelectorAll('.model-stats .stat-value');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateAIStat(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statValues.forEach(stat => observer.observe(stat));
}

// AI统计数字动画
function animateAIStat(element) {
    const finalValue = element.textContent;
    let numericValue;
    let suffix = '';
    
    if (finalValue.includes('%')) {
        numericValue = parseFloat(finalValue.replace('%', ''));
        suffix = '%';
    } else if (finalValue.includes('+')) {
        numericValue = parseInt(finalValue.replace('+', ''));
        suffix = '+';
    } else if (finalValue.includes('s')) {
        numericValue = parseFloat(finalValue.replace('s', ''));
        suffix = 's';
    } else {
        numericValue = parseInt(finalValue);
    }
    
    let currentValue = 0;
    const increment = numericValue / 30;
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= numericValue) {
            currentValue = numericValue;
            clearInterval(timer);
        }
        
        if (suffix === '%') {
            element.textContent = currentValue.toFixed(1) + suffix;
        } else if (suffix === 's') {
            element.textContent = currentValue.toFixed(1) + suffix;
        } else {
            element.textContent = Math.floor(currentValue) + suffix;
        }
    }, 50);
} 