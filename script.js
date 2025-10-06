// 游戏数据 - 从测试页面导入的真实游戏
const gamesData = [
    {
        id: 1,
        title: "Memoji",
        description: "记忆配对游戏，考验你的记忆力",
        category: "puzzle",
        image: "https://via.placeholder.com/300x200/6366f1/ffffff?text=Memoji",
        url: "https://html5.gamedistribution.com/50c56858d355416ba84e18c68321a69b/?gd_sdk_referrer_url=https://www.example.com/games/memoji",
        fallback: false
    },
    {
        id: 2,
        title: "Cityquest",
        description: "城市探索冒险游戏",
        category: "adventure",
        image: "https://via.placeholder.com/300x200/10b981/ffffff?text=Cityquest",
        url: "https://html5.gamedistribution.com/31068f4a88af4d3da31feeeddaeb44c8/?gd_sdk_referrer_url=https://www.example.com/games/cityquest",
        fallback: false
    },
    {
        id: 3,
        title: "10K",
        description: "经典数字合并游戏，挑战你的策略思维",
        category: "puzzle",
        image: "https://via.placeholder.com/300x200/f59e0b/ffffff?text=10K",
        url: "https://html5.gamedistribution.com/3acc054600054896b62bda751eaef869/?gd_sdk_referrer_url=https://www.example.com/games/10k",
        fallback: false
    },
    {
        id: 4,
        title: "2048",
        description: "经典数字合并游戏",
        category: "puzzle",
        image: "https://via.placeholder.com/300x200/6366f1/ffffff?text=2048",
        url: "https://play2048.co",
        fallback: false
    },
    {
        id: 5,
        title: "Tetris",
        description: "俄罗斯方块经典游戏",
        category: "arcade",
        image: "https://via.placeholder.com/300x200/10b981/ffffff?text=Tetris",
        url: "https://tetris.com/play-tetris",
        fallback: false
    },
    {
        id: 6,
        title: "Phrasle Master",
        description: "短语猜谜游戏，测试你的词汇量",
        category: "puzzle",
        image: "https://via.placeholder.com/300x200/ef4444/ffffff?text=Phrasle+Master",
        url: "https://html5.gamedistribution.com/1adf969783854409b65b5ccb0873ea8a/?gd_sdk_referrer_url=https://www.example.com/games/phrasle-master",
        fallback: false
    },
    {
        id: 7,
        title: "Word Search",
        description: "经典单词搜索游戏",
        category: "puzzle",
        image: "https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Word+Search",
        url: "https://html5.gamedistribution.com/c13ee9c06edc4f0a8d7f6f291a7c13d8/?gd_sdk_referrer_url=https://www.example.com/games/word-search",
        fallback: false
    },
    {
        id: 8,
        title: "Kitty Scramble",
        description: "可爱猫咪主题的单词游戏",
        category: "puzzle",
        image: "https://via.placeholder.com/300x200/ec4899/ffffff?text=Kitty+Scramble",
        url: "https://html5.gamedistribution.com/944186abe50e452dac7f0e8d3e0a8814/?gd_sdk_referrer_url=https://www.example.com/games/kitty-scramble",
        fallback: false
    },
    {
        id: 9,
        title: "Daily Crossword",
        description: "每日填字游戏，挑战你的知识",
        category: "puzzle",
        image: "https://via.placeholder.com/300x200/06b6d4/ffffff?text=Daily+Crossword",
        url: "https://html5.gamedistribution.com/e74d9a4123fb4880bc5e3d7664c9dcc9/?gd_sdk_referrer_url=https://www.example.com/games/daily-crossword",
        fallback: false
    },
    {
        id: 10,
        title: "Hexa",
        description: "六边形拼图游戏",
        category: "puzzle",
        image: "https://via.placeholder.com/300x200/84cc16/ffffff?text=Hexa",
        url: "https://html5.gamedistribution.com/ab1984b4b1314e1dab545a34b62bce47/?gd_sdk_referrer_url=https://www.example.com/games/hexa",
        fallback: false
    },
    {
        id: 11,
        title: "Daily Sudoku",
        description: "每日数独挑战",
        category: "puzzle",
        image: "https://via.placeholder.com/300x200/f97316/ffffff?text=Daily+Sudoku",
        url: "https://html5.gamedistribution.com/dd9701cd84da40699cdc404645f29c1f/?gd_sdk_referrer_url=https://www.example.com/games/daily-sudoku",
        fallback: false
    },
    {
        id: 12,
        title: "Crocword Crossword",
        description: "鳄鱼主题填字游戏",
        category: "puzzle",
        image: "https://via.placeholder.com/300x200/22c55e/ffffff?text=Crocword+Crossword",
        url: "https://html5.gamedistribution.com/3e314ff40f40472f9aefed5b046f6dcc/?gd_sdk_referrer_url=https://www.example.com/games/crocword-crossword",
        fallback: false
    },
    {
        id: 13,
        title: "Daily Jigsaw",
        description: "每日拼图游戏",
        category: "puzzle",
        image: "https://via.placeholder.com/300x200/a855f7/ffffff?text=Daily+Jigsaw",
        url: "https://html5.gamedistribution.com/5eebb19f0fcd43849721b95ecf53a700/?gd_sdk_referrer_url=https://www.example.com/games/daily-jigsaw",
        fallback: false
    },
    {
        id: 14,
        title: "Word Swipe",
        description: "滑动单词游戏",
        category: "puzzle",
        image: "https://via.placeholder.com/300x200/f43f5e/ffffff?text=Word+Swipe",
        url: "https://html5.gamedistribution.com/ef4b392680554564abe1a3d3917a754b/?gd_sdk_referrer_url=https://www.example.com/games/word-swipe",
        fallback: false
    },
    {
        id: 15,
        title: "Word Sauce",
        description: "单词汤游戏",
        category: "puzzle",
        image: "https://via.placeholder.com/300x200/14b8a6/ffffff?text=Word+Sauce",
        url: "https://html5.gamedistribution.com/8d8965a1f1af4d2b884e0bc48737925d/?gd_sdk_referrer_url=https://www.example.com/games/word-sauce",
        fallback: false
    },
    {
        id: 16,
        title: "4 Pix Word Quiz",
        description: "四图猜词游戏",
        category: "puzzle",
        image: "https://via.placeholder.com/300x200/eab308/ffffff?text=4+Pix+Word+Quiz",
        url: "https://html5.gamedistribution.com/992bf414c2fd4a7d8160bcbafd99b6f3/?gd_sdk_referrer_url=https://www.example.com/games/4-pix-word-quiz",
        fallback: false
    },
    {
        id: 17,
        title: "Chess",
        description: "国际象棋在线对战",
        category: "strategy",
        image: "https://via.placeholder.com/300x200/f59e0b/ffffff?text=Chess",
        url: "https://lichess.org",
        fallback: false
    },
    {
        id: 18,
        title: "Snake",
        description: "经典贪吃蛇游戏",
        category: "arcade",
        image: "https://via.placeholder.com/300x200/ef4444/ffffff?text=Snake",
        url: "https://playsnake.org",
        fallback: false
    },
    {
        id: 19,
        title: "Pac-Man",
        description: "吃豆人经典街机游戏",
        category: "arcade",
        image: "https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Pac-Man",
        url: "https://www.google.com/logos/2010/pacman10-i.html",
        fallback: false
    },
    {
        id: 20,
        title: "Gomoku",
        description: "五子棋策略游戏",
        category: "strategy",
        image: "https://via.placeholder.com/300x200/ec4899/ffffff?text=Gomoku",
        url: "https://www.crazygames.com/game/gomoku",
        fallback: false
    },
    {
        id: 21,
        title: "Wood Block Jam",
        description: "Guide colorful blocks through challenging wooden grids.",
        category: "puzzle",
        image: "https://via.placeholder.com/300x200/8B5E3C/ffffff?text=Wood+Block+Jam",
        url: "https://www.crazygames.com/game/wood-block-puzzle",
        fallback: false
    },
    {
        id: 22,
        title: "Pong Game",
        description: "经典弹球游戏，考验反应速度",
        category: "arcade",
        image: "https://via.placeholder.com/300x200/00ff88/000000?text=Pong+Game",
        url: "pong-game.html",
        fallback: false
    },
    {
        id: 23,
        title: "超级玛丽",
        description: "重温经典平台跳跃冒险，帮助马里奥营救公主",
        category: "arcade",
        image: "https://via.placeholder.com/300x200/2563eb/ffffff?text=Super+Mario",
        url: "https://jcw87.github.io/c2-smb1/",
        fallback: false
    },
    {
        id: 24,
        title: "3D 魔方",
        description: "用 3D 魔方练习空间思维，尝试快速复原",
        category: "puzzle",
        image: "https://via.placeholder.com/300x200/0ea5e9/ffffff?text=3D+Cube",
        url: "https://zoo-js.github.io/3dcube/?red=cat&white=dog&blue=pig&green=sheep&orange=koala&yellow=ant&bg=*ffd8bf",
        fallback: false
    },
    {
        id: 25,
        title: "自由车手",
        description: "在炫酷赛道上骑行，挑战物理骑行极限",
        category: "arcade",
        image: "https://via.placeholder.com/300x200/f97316/ffffff?text=Bike+Rider",
        url: "https://www.freeriderhd.com/game/1004698-carbon?embedded=true",
        fallback: false
    }
];

// 生成更多游戏数据以达到100个游戏
for (let i = gamesData.length + 1; i <= 100; i++) {
    const categories = ['puzzle', 'strategy', 'arcade', 'adventure'];
    const category = categories[Math.floor(Math.random() * categories.length)];
    
    const puzzleGames = [
        { title: "数独大师", description: "高级数独挑战" },
        { title: "拼图专家", description: "精美图片拼图" },
        { title: "记忆训练", description: "提升记忆力的游戏" },
        { title: "逻辑推理", description: "逻辑思维训练" },
        { title: "数学挑战", description: "数学计算游戏" },
        { title: "图形识别", description: "图形模式识别" },
        { title: "空间思维", description: "3D空间想象" },
        { title: "文字游戏", description: "词汇量测试" },
        { title: "颜色匹配", description: "颜色配对游戏" },
        { title: "路径规划", description: "最短路径求解" }
    ];
    
    const strategyGames = [
        { title: "围棋大师", description: "经典围棋游戏" },
        { title: "中国象棋", description: "传统象棋对战" },
        { title: "军棋大战", description: "策略军棋游戏" },
        { title: "跳棋高手", description: "国际跳棋" },
        { title: "飞行棋", description: "经典飞行棋" },
        { title: "动物棋", description: "儿童动物棋" },
        { title: "黑白棋", description: "翻转棋游戏" },
        { title: "斗兽棋", description: "传统斗兽棋" },
        { title: "象棋残局", description: "象棋残局破解" },
        { title: "棋类合集", description: "多种棋类游戏" }
    ];
    
    const arcadeGames = [
        { title: "街机赛车", description: "经典赛车游戏" },
        { title: "街机格斗", description: "格斗游戏" },
        { title: "街机平台", description: "平台跳跃游戏" },
        { title: "街机射击", description: "射击游戏" },
        { title: "街机冒险", description: "冒险游戏" },
        { title: "街机益智", description: "益智街机" },
        { title: "街机音乐", description: "音乐节奏游戏" },
        { title: "街机体育", description: "体育竞技" },
        { title: "街机动作", description: "动作游戏" },
        { title: "街机休闲", description: "休闲街机" }
    ];
    
    const adventureGames = [
        { title: "冒险探索", description: "探索未知世界" },
        { title: "解谜冒险", description: "冒险解谜游戏" },
        { title: "角色扮演", description: "RPG冒险游戏" },
        { title: "生存冒险", description: "生存挑战" },
        { title: "探险寻宝", description: "寻宝探险" },
        { title: "奇幻冒险", description: "奇幻世界冒险" },
        { title: "科幻冒险", description: "科幻冒险游戏" },
        { title: "历史冒险", description: "历史背景冒险" },
        { title: "恐怖冒险", description: "恐怖冒险游戏" },
        { title: "童话冒险", description: "童话世界冒险" }
    ];
    
    let gameTemplates;
    switch(category) {
        case 'puzzle':
            gameTemplates = puzzleGames;
            break;
        case 'strategy':
            gameTemplates = strategyGames;
            break;
        case 'arcade':
            gameTemplates = arcadeGames;
            break;
        case 'adventure':
            gameTemplates = adventureGames;
            break;
    }
    
    const template = gameTemplates[Math.floor(Math.random() * gameTemplates.length)];
    const title = `${template.title} ${Math.floor(Math.random() * 100) + 1}`;
    
    gamesData.push({
        id: i,
        title: title,
        description: template.description,
        category: category,
        image: `https://via.placeholder.com/300x200/${getRandomColor()}/ffffff?text=${encodeURIComponent(title)}`,
        url: `https://www.crazygames.com/game/${title.toLowerCase().replace(/\s+/g, '-')}`,
        fallback: Math.random() > 0.7 // 30%的概率使用fallback样式
    });
}

// 获取随机颜色的辅助函数
function getRandomColor() {
    const colors = ['6366f1', '10b981', 'f59e0b', 'ef4444', '8b5cf6', 'ec4899', '06b6d4', '84cc16', 'f97316', '22c55e', 'a855f7', 'f43f5e', '14b8a6', 'eab308'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// 全局变量
let currentFilter = 'all';
let currentSearch = '';
let displayedGames = 12;

// DOM 元素
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const gamesGrid = document.getElementById('games-grid');
const loadMoreBtn = document.getElementById('load-more-btn');
const gameModal = document.getElementById('game-modal');
const modalClose = document.getElementById('modal-close');
const gameFrame = document.getElementById('game-frame');
const modalTitle = document.getElementById('modal-title');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeGames();
    initializeLazyLoading();
    initializeModal();
    initializeCategoryCards();
    updateCategoryCounts();
});

// 导航功能
function initializeNavigation() {
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || !href.startsWith('#')) {
                return;
            }

            const hash = href.slice(1);
            if (!hash) {
                return;
            }

            const [idPart, queryString] = hash.split('?');
            if (!idPart) {
                return;
            }

            const target = document.getElementById(idPart);
            if (!target) {
                return;
            }

            e.preventDefault();

            if (queryString) {
                const params = new URLSearchParams(queryString);
                const category = params.get('category');
                if (category) {
                    applyCategoryFilter(category);
                }
            }

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // 导航高亮
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// 游戏功能
function initializeGames() {
    if (!gamesGrid) {
        return;
    }

    if (!loadMoreBtn) {
        displayedGames = gamesData.length;
    }
    renderGames();
    initializeFilters();
    initializeSearch();
    initializeLoadMore();
}

function renderGames() {
    if (!gamesGrid) {
        return;
    }
    let filteredGames = gamesData;
    
    // 按类别筛选
    if (currentFilter !== 'all') {
        filteredGames = filteredGames.filter(game => game.category === currentFilter);
    }
    
    // 按搜索关键词筛选
    if (currentSearch.trim()) {
        const searchTerm = currentSearch.toLowerCase();
        filteredGames = filteredGames.filter(game => 
            game.title.toLowerCase().includes(searchTerm) ||
            game.description.toLowerCase().includes(searchTerm) ||
            getCategoryName(game.category).toLowerCase().includes(searchTerm)
        );
    }
    
    const gamesToShow = filteredGames.slice(0, displayedGames);
    
    gamesGrid.innerHTML = gamesToShow.map(game => createGameCard(game)).join('');

    // 更新游戏统计
    updateGameStats(filteredGames.length);

    // 重新触发懒加载观察
    observeLazyElements();

    // 隐藏加载更多按钮如果没有更多游戏
    if (loadMoreBtn) {
        loadMoreBtn.style.display = displayedGames >= filteredGames.length ? 'none' : 'block';
    }
}

function updateGameStats(totalGames) {
    const statsElement = document.querySelector('.games-stats');
    if (statsElement) {
        statsElement.textContent = `显示 ${Math.min(displayedGames, totalGames)} / ${totalGames} 个游戏`;
    }
}

function createGameCard(game) {
    return `
        <div class="game-card lazy-load" data-category="${game.category}" onclick="openGame('${game.url}', '${game.title}')">
            <div class="game-image ${game.fallback ? 'fallback' : ''}" data-game-id="${game.id}">
                ${game.fallback ? '' : `<img src="${game.image}" alt="${game.title}" loading="lazy" onerror="handleImageError(this)" onload="handleImageLoad(this)">`}
            </div>
            <div class="game-info">
                <span class="game-category">${getCategoryName(game.category)}</span>
                <h3 class="game-title">${game.title}</h3>
                <p class="game-description">${game.description}</p>
            </div>
        </div>
    `;
}

function getCategoryName(category) {
    const names = {
        'puzzle': '益智',
        'action': '动作',
        'strategy': '策略',
        'arcade': '街机',
        'adventure': '冒险'
    };
    return names[category] || category;
}

function applyCategoryFilter(category) {
    if (!category) {
        return;
    }

    const filterButtons = document.querySelectorAll('.filter-btn');
    let matchedButton = null;

    filterButtons.forEach(btn => {
        const isMatch = btn.getAttribute('data-category') === category;
        btn.classList.toggle('active', isMatch);
        if (isMatch) {
            matchedButton = btn;
        }
    });

    if (!matchedButton) {
        currentFilter = 'all';
        filterButtons.forEach(btn => {
            const isAll = btn.getAttribute('data-category') === 'all';
            btn.classList.toggle('active', isAll);
        });
    } else {
        currentFilter = category;
    }

    displayedGames = 12;
    renderGames();
}

function initializeFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            applyCategoryFilter(this.getAttribute('data-category'));
        });
    });
}

function initializeSearch() {
    const searchInput = document.getElementById('game-search');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(function() {
            currentSearch = this.value;
            displayedGames = 12;
            renderGames();
        }, 300));
    }
}

function initializeLoadMore() {
    if (!loadMoreBtn) return;
    loadMoreBtn.addEventListener('click', function() {
        displayedGames += 12;
        renderGames();
    });
}

// 分类卡片功能
function initializeCategoryCards() {
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            applyCategoryFilter(category);

            const gamesSection = document.getElementById('games');
            if (gamesSection) {
                gamesSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function updateCategoryCounts() {
    const categoryCounts = {};
    
    // 计算每个分类的游戏数量
    gamesData.forEach(game => {
        categoryCounts[game.category] = (categoryCounts[game.category] || 0) + 1;
    });
    
    // 更新分类卡片中的数量显示
    document.querySelectorAll('.category-card').forEach(card => {
        const category = card.getAttribute('data-category');
        const count = categoryCounts[category] || 0;
        const countElement = card.querySelector('.category-count');
        if (countElement) {
            countElement.textContent = `${count} 个游戏`;
        }
    });
}

let lazyObserver = null;

// 懒加载功能
function initializeLazyLoading() {
    if (typeof IntersectionObserver === 'undefined') {
        document.querySelectorAll('.lazy-load').forEach(el => el.classList.add('loaded'));
        return;
    }

    lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                lazyObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    observeLazyElements();
}

function observeLazyElements() {
    if (!lazyObserver) {
        document.querySelectorAll('.lazy-load').forEach(el => el.classList.add('loaded'));
        return;
    }

    document.querySelectorAll('.lazy-load').forEach(el => {
        if (!el.dataset.lazyObserved) {
            lazyObserver.observe(el);
            el.dataset.lazyObserved = 'true';
        }
    });
}

// 模态框功能
function initializeModal() {
    if (!gameModal || !modalClose || !gameFrame || !modalTitle) {
        return;
    }

    modalClose.addEventListener('click', closeModal);
    
    gameModal.addEventListener('click', function(e) {
        if (e.target === gameModal) {
            closeModal();
        }
    });

    // ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && gameModal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openGame(url, title) {
    if (!gameModal || !gameFrame || !modalTitle) {
        window.open(url, '_blank');
        return;
    }

    modalTitle.textContent = title;
    gameFrame.src = url;
    gameModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!gameModal || !gameFrame) {
        return;
    }

    gameModal.classList.remove('active');
    gameFrame.src = '';
    document.body.style.overflow = 'auto';
}

// 工具函数
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 图片加载处理
function handleImageError(img) {
    const gameImage = img.parentElement;
    gameImage.classList.add('fallback');
    gameImage.setAttribute('title', '图片加载失败，显示默认样式');
    console.log(`图片加载失败: ${img.src}`);
}

function handleImageLoad(img) {
    const gameImage = img.parentElement;
    gameImage.classList.remove('fallback');
    
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
        img.style.opacity = '1';
    }, 100);
}

// 性能优化：防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 响应式处理
window.addEventListener('resize', debounce(function() {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
}, 250));

// 添加交互效果
document.addEventListener('DOMContentLoaded', function() {
    // 添加鼠标悬停效果
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // 添加点击波纹效果
    document.querySelectorAll('.btn, .filter-btn, .load-more-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// 添加波纹效果的CSS
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .btn, .filter-btn, .load-more-btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);
