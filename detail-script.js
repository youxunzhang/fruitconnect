// 游戏详情页面脚本
let currentGame = null;

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    loadGameDetails();
    setupEventListeners();
});

// 设置事件监听器
function setupEventListeners() {
    // AI重新生成按钮
    const aiRefreshBtn = document.getElementById('aiRefreshBtn');
    if (aiRefreshBtn) {
        aiRefreshBtn.addEventListener('click', refreshAIContent);
    }
}

// 加载游戏详情
async function loadGameDetails() {
    try {
        // 从URL参数获取游戏ID
        const urlParams = new URLSearchParams(window.location.search);
        const gameId = urlParams.get('id');
        
        if (!gameId) {
            showError('未找到游戏ID');
            return;
        }

        // 查找游戏数据
        currentGame = gamesData.find(game => game.id === gameId);
        
        if (!currentGame) {
            showError('未找到游戏数据');
            return;
        }

        // 更新页面内容
        updateGameInfo();
        updateGameIframe();
        
        // 生成AI内容
        await generateAIContent();

    } catch (error) {
        console.error('加载游戏详情失败:', error);
        showError('加载游戏详情失败');
    }
}

// 更新游戏基本信息
function updateGameInfo() {
    if (!currentGame) return;

    // 更新标题和基本信息
    document.getElementById('gameTitle').textContent = currentGame.title;
    document.getElementById('gameCategory').textContent = currentGame.category;
    document.getElementById('gameRating').textContent = currentGame.rating;
    
    // 更新星级显示
    const stars = document.getElementById('gameStars');
    stars.innerHTML = generateStars(currentGame.rating);

    // 更新信息卡片
    document.getElementById('infoTitle').textContent = currentGame.title;
    document.getElementById('infoCategory').textContent = currentGame.category;
    document.getElementById('infoRating').textContent = currentGame.rating;
    document.getElementById('infoId').textContent = currentGame.id;

    // 更新页面标题
    document.title = `${currentGame.title} - GameHub`;
}

// 更新游戏iframe
function updateGameIframe() {
    if (!currentGame) return;
    
    const iframe = document.getElementById('gameIframe');
    if (iframe) {
        iframe.src = currentGame.iframeUrl;
    }
}

// 生成AI内容
async function generateAIContent() {
    if (!currentGame) return;

    try {
        // 显示加载状态
        showAILoadingState();

        // 调用AI生成器
        const aiDetails = await aiGameDetails.generateGameDetails(currentGame);

        // 更新页面内容
        updateAIContent(aiDetails);

    } catch (error) {
        console.error('生成AI内容失败:', error);
        showAIError();
    }
}

// 显示AI加载状态
function showAILoadingState() {
    const loadingTexts = [
        '正在生成游戏介绍...',
        '正在分析游戏特色...',
        '正在生成操作指南...',
        '正在生成推荐理由...',
        '正在生成游戏技巧...'
    ];

    document.getElementById('enhancedDescription').textContent = loadingTexts[0];
    document.getElementById('gameFeatures').innerHTML = '<div class="feature-item">正在生成...</div>';
    document.getElementById('howToPlay').innerHTML = '<div class="step-item">正在生成...</div>';
    document.getElementById('whyRecommend').innerHTML = '<div class="recommendation-item">正在生成...</div>';
    document.getElementById('gameTips').innerHTML = '<div class="tip-item">正在生成...</div>';
    document.getElementById('gameTags').innerHTML = '<span class="tag">正在生成...</span>';
    document.getElementById('targetAudience').textContent = '正在生成...';

    // 更新统计信息
    document.getElementById('playTime').textContent = '计算中...';
    document.getElementById('difficulty').textContent = '分析中...';
    document.getElementById('replayability').textContent = '评估中...';
    document.getElementById('releaseDate').textContent = '查询中...';
}

// 更新AI生成的内容
function updateAIContent(aiDetails) {
    // 更新增强描述
    document.getElementById('enhancedDescription').textContent = aiDetails.enhancedDescription;

    // 更新游戏特色
    const featuresContainer = document.getElementById('gameFeatures');
    featuresContainer.innerHTML = aiDetails.gameFeatures.map(feature => 
        `<div class="feature-item">${feature}</div>`
    ).join('');

    // 更新操作指南
    const howToPlayContainer = document.getElementById('howToPlay');
    howToPlayContainer.innerHTML = aiDetails.howToPlay.map(step => 
        `<div class="step-item">${step}</div>`
    ).join('');

    // 更新推荐理由
    const recommendationsContainer = document.getElementById('whyRecommend');
    recommendationsContainer.innerHTML = aiDetails.whyRecommend.map(reason => 
        `<div class="recommendation-item">${reason}</div>`
    ).join('');

    // 更新游戏技巧
    const tipsContainer = document.getElementById('gameTips');
    tipsContainer.innerHTML = aiDetails.gameTips.map(tip => 
        `<div class="tip-item">${tip}</div>`
    ).join('');

    // 更新游戏标签
    const tagsContainer = document.getElementById('gameTags');
    tagsContainer.innerHTML = aiDetails.gameTags.map(tag => 
        `<span class="tag">${tag}</span>`
    ).join('');

    // 更新目标受众
    document.getElementById('targetAudience').textContent = aiDetails.targetAudience;

    // 更新游戏统计
    const stats = aiDetails.gameStats;
    document.getElementById('playTime').textContent = stats.playTime;
    document.getElementById('difficulty').textContent = stats.difficulty;
    document.getElementById('replayability').textContent = stats.replayability;
    document.getElementById('releaseDate').textContent = stats.releaseDate;

    // 更新相关游戏
    updateRelatedGames(aiDetails.relatedGames);
}

// 更新相关游戏
function updateRelatedGames(relatedGames) {
    const container = document.getElementById('relatedGames');
    if (!container || !relatedGames.length) return;

    container.innerHTML = relatedGames.map(game => `
        <div class="related-game-card" onclick="openGame('${game.id}')">
            <div class="game-cover">
                <img src="${game.coverImage}" alt="${game.title}" loading="lazy">
            </div>
            <div class="game-info">
                <h4>${game.title}</h4>
                <p>${game.category}</p>
                <div class="game-rating">
                    <span class="stars">${generateStars(game.rating)}</span>
                    <span class="rating-text">${game.rating}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// 重新生成AI内容
async function refreshAIContent() {
    if (!currentGame) return;

    try {
        // 清除缓存
        aiGameDetails.clearCache();
        
        // 显示加载状态
        showAILoadingState();
        
        // 禁用按钮
        const refreshBtn = document.getElementById('aiRefreshBtn');
        if (refreshBtn) {
            refreshBtn.disabled = true;
            refreshBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 生成中...';
        }

        // 重新生成内容
        await generateAIContent();

        // 恢复按钮
        if (refreshBtn) {
            refreshBtn.disabled = false;
            refreshBtn.innerHTML = '<i class="fas fa-magic"></i> AI重新生成';
        }

        // 显示成功消息
        showSuccess('AI内容已重新生成');

    } catch (error) {
        console.error('重新生成AI内容失败:', error);
        showError('重新生成失败');
        
        // 恢复按钮
        const refreshBtn = document.getElementById('aiRefreshBtn');
        if (refreshBtn) {
            refreshBtn.disabled = false;
            refreshBtn.innerHTML = '<i class="fas fa-magic"></i> AI重新生成';
        }
    }
}

// 显示AI错误
function showAIError() {
    const errorText = 'AI内容生成失败，请稍后重试';
    
    document.getElementById('enhancedDescription').textContent = errorText;
    document.getElementById('gameFeatures').innerHTML = '<div class="feature-item">生成失败</div>';
    document.getElementById('howToPlay').innerHTML = '<div class="step-item">生成失败</div>';
    document.getElementById('whyRecommend').innerHTML = '<div class="recommendation-item">生成失败</div>';
    document.getElementById('gameTips').innerHTML = '<div class="tip-item">生成失败</div>';
    document.getElementById('gameTags').innerHTML = '<span class="tag">生成失败</span>';
    document.getElementById('targetAudience').textContent = '生成失败';
}

// 游戏控制功能
function toggleFullscreen() {
    const iframe = document.getElementById('gameIframe');
    if (iframe) {
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.webkitRequestFullscreen) {
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) {
            iframe.msRequestFullscreen();
        }
    }
}

function refreshGame() {
    const iframe = document.getElementById('gameIframe');
    if (iframe) {
        iframe.src = iframe.src;
    }
}

function toggleFavorite() {
    // 实现收藏功能
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const gameId = currentGame.id;
    
    const index = favorites.indexOf(gameId);
    if (index > -1) {
        favorites.splice(index, 1);
        showSuccess('已取消收藏');
    } else {
        favorites.push(gameId);
        showSuccess('已添加到收藏');
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

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
            showSuccess('链接已复制到剪贴板');
        });
    }
}

// 打开游戏
function openGame(gameId) {
    window.location.href = `game-detail.html?id=${gameId}`;
}

// 生成星级显示
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return '★'.repeat(fullStars) + (hasHalfStar ? '☆' : '') + '☆'.repeat(emptyStars);
}

// 显示成功消息
function showSuccess(message) {
    // 创建临时消息
    const messageDiv = document.createElement('div');
    messageDiv.className = 'success-message';
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 12px 24px;
        border-radius: 4px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// 显示错误消息
function showError(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'error-message';
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #f44336;
        color: white;
        padding: 12px 24px;
        border-radius: 4px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style); 