// AI游戏详情生成器
class AIGameDetailsGenerator {
    constructor() {
        this.config = window.AIConfig || {};
        this.gameDetailsCache = new Map();
    }

    // 生成完整的游戏详情
    async generateGameDetails(game) {
        try {
            // 检查缓存
            const cacheKey = `game_details_${game.id}`;
            const cached = localStorage.getItem(cacheKey);
            if (cached) {
                return JSON.parse(cached);
            }

            // 生成各种详情内容
            const details = {
                enhancedDescription: await this.generateEnhancedDescription(game),
                gameFeatures: await this.generateGameFeatures(game),
                howToPlay: await this.generateHowToPlay(game),
                gameTags: await this.generateGameTags(game),
                whyRecommend: await this.generateWhyRecommend(game),
                difficulty: await this.generateDifficulty(game),
                targetAudience: await this.generateTargetAudience(game),
                gameTips: await this.generateGameTips(game),
                relatedGames: await this.generateRelatedGames(game),
                gameStats: await this.generateGameStats(game)
            };

            // 缓存结果
            localStorage.setItem(cacheKey, JSON.stringify(details));
            return details;

        } catch (error) {
            console.error('生成游戏详情失败:', error);
            return this.getFallbackDetails(game);
        }
    }

    // 生成增强描述
    async generateEnhancedDescription(game) {
        const prompt = `为游戏"${game.title}"生成一段详细、吸引人的描述。游戏类型：${game.category}，原始描述：${game.description}。要求：
        1. 200-300字
        2. 突出游戏特色和玩法
        3. 语言生动有趣
        4. 适合游戏网站展示`;

        return await this.callAIService(prompt) || this.getFallbackDescription(game);
    }

    // 生成游戏特色
    async generateGameFeatures(game) {
        const prompt = `为游戏"${game.title}"生成5-8个游戏特色功能。游戏类型：${game.category}。要求：
        1. 每个特色用简短短语描述
        2. 突出游戏亮点
        3. 吸引玩家注意`;

        const features = await this.callAIService(prompt);
        return features ? features.split('\n').filter(f => f.trim()) : this.getFallbackFeatures(game);
    }

    // 生成操作指南
    async generateHowToPlay(game) {
        const prompt = `为游戏"${game.title}"生成简单的操作指南。游戏类型：${game.category}。要求：
        1. 3-5个操作步骤
        2. 简单易懂
        3. 适合新手玩家`;

        const guide = await this.callAIService(prompt);
        return guide ? guide.split('\n').filter(g => g.trim()) : this.getFallbackHowToPlay(game);
    }

    // 生成游戏标签
    async generateGameTags(game) {
        const baseTags = [game.category];
        
        // 根据游戏类型添加标签
        const categoryTags = {
            '动作': ['刺激', '反应', '操作', '冒险'],
            '竞速': ['速度', '驾驶', '竞速', '挑战'],
            '益智': ['思考', '逻辑', '解谜', '策略', '词汇', '记忆', '数学'],
            '冒险': ['探索', '剧情', '冒险', '发现'],
            '模拟': ['真实', '模拟', '管理', '体验'],
            '策略': ['计划', '战术', '策略', '思考'],
            '生存': ['生存', '挑战', '危险', '战斗']
        };

        const tags = categoryTags[game.category] || ['游戏', '娱乐'];
        return [...baseTags, ...tags];
    }

    // 生成推荐理由
    async generateWhyRecommend(game) {
        const prompt = `为游戏"${game.title}"生成3个推荐理由。游戏类型：${game.category}，评分：${game.rating}。要求：
        1. 突出游戏优势
        2. 吸引目标玩家
        3. 简洁有力`;

        const reasons = await this.callAIService(prompt);
        return reasons ? reasons.split('\n').filter(r => r.trim()) : this.getFallbackReasons(game);
    }

    // 生成难度评估
    async generateDifficulty(game) {
        const difficulties = {
            '动作': '中等',
            '竞速': '中等',
            '益智': '简单',
            '冒险': '简单',
            '模拟': '简单',
            '策略': '困难',
            '生存': '困难'
        };
        return difficulties[game.category] || '中等';
    }

    // 生成目标受众
    async generateTargetAudience(game) {
        const audiences = {
            '动作': '喜欢刺激的玩家',
            '竞速': '速度爱好者',
            '益智': '思考型玩家',
            '冒险': '探索爱好者',
            '模拟': '模拟游戏爱好者',
            '策略': '策略游戏玩家',
            '生存': '挑战型玩家'
        };
        return audiences[game.category] || '所有玩家';
    }

    // 生成游戏技巧
    async generateGameTips(game) {
        const prompt = `为游戏"${game.title}"生成3个游戏技巧。游戏类型：${game.category}。要求：
        1. 实用的游戏技巧
        2. 帮助玩家提升
        3. 简洁明了`;

        const tips = await this.callAIService(prompt);
        return tips ? tips.split('\n').filter(t => t.trim()) : this.getFallbackTips(game);
    }

    // 生成相关游戏
    async generateRelatedGames(game) {
        const related = gamesData
            .filter(g => g.id !== game.id && g.category === game.category)
            .slice(0, 3);
        return related;
    }

    // 生成游戏统计
    async generateGameStats(game) {
        return {
            playTime: this.getRandomPlayTime(),
            difficulty: await this.generateDifficulty(game),
            replayability: this.getRandomReplayability(),
            communityRating: game.rating,
            releaseDate: this.getRandomReleaseDate()
        };
    }

    // 调用AI服务
    async callAIService(prompt) {
        try {
            // 这里可以集成各种AI服务
            // 例如：OpenAI GPT、Claude、本地AI模型等
            
            // 示例：使用模拟AI响应（实际使用时替换为真实AI调用）
            return await this.simulateAIResponse(prompt);
            
        } catch (error) {
            console.error('AI服务调用失败:', error);
            return null;
        }
    }

    // 模拟AI响应（用于演示）
    async simulateAIResponse(prompt) {
        // 模拟网络延迟
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // 根据提示词生成模拟响应
        if (prompt.includes('描述')) {
            const gameName = prompt.match(/游戏"([^"]+)"/)?.[1] || '游戏';
            const isPuzzle = prompt.includes('益智') || prompt.includes('词汇') || prompt.includes('记忆') || prompt.includes('数学');
            
            if (isPuzzle) {
                return `《${gameName}》是一款精心设计的益智游戏，融合了现代教育理念和经典游戏元素。游戏不仅具有娱乐性，更能锻炼玩家的逻辑思维、记忆力和词汇量。通过精心设计的关卡和渐进式难度，让玩家在享受游戏乐趣的同时提升认知能力。`;
            } else {
                return `《${gameName}》是一款精彩刺激的游戏，融合了现代游戏设计理念和经典玩法元素。游戏画面精美，操作流畅，为玩家带来极致的游戏体验。无论是新手还是老玩家都能在这里找到属于自己的乐趣。`;
            }
        }
        
        if (prompt.includes('特色')) {
            const isPuzzle = prompt.includes('益智') || prompt.includes('词汇') || prompt.includes('记忆') || prompt.includes('数学');
            
            if (isPuzzle) {
                return `🧠 锻炼逻辑思维能力\n📚 提升词汇量和知识储备\n⏰ 训练记忆力和注意力\n🎯 渐进式难度设计\n🌟 丰富多样的游戏模式`;
            } else {
                return `🎮 精美的游戏画面\n⚡ 流畅的操作体验\n🏆 丰富的成就系统\n🎯 多样的游戏模式\n🌟 独特的游戏机制`;
            }
        }
        
        if (prompt.includes('操作')) {
            const isPuzzle = prompt.includes('益智') || prompt.includes('词汇') || prompt.includes('记忆') || prompt.includes('数学');
            
            if (isPuzzle) {
                return `1. 使用鼠标点击或键盘输入进行游戏操作\n2. 仔细阅读游戏规则和提示信息\n3. 运用逻辑思维解决各种谜题\n4. 完成关卡挑战获得成就和奖励`;
            } else {
                return `1. 使用方向键或WASD控制角色移动\n2. 点击鼠标或空格键进行主要操作\n3. 收集游戏中的道具和奖励\n4. 完成关卡目标获得胜利`;
            }
        }
        
        if (prompt.includes('推荐')) {
            const isPuzzle = prompt.includes('益智') || prompt.includes('词汇') || prompt.includes('记忆') || prompt.includes('数学');
            
            if (isPuzzle) {
                return `1. 具有教育价值，能锻炼大脑思维能力\n2. 操作简单，适合所有年龄段的玩家\n3. 内容丰富，提供持续的学习和挑战`;
            } else {
                return `1. 游戏内容丰富，可玩性极高\n2. 操作简单易上手，适合所有年龄段\n3. 画面精美，音效出色，沉浸感强`;
            }
        }
        
        if (prompt.includes('技巧')) {
            const isPuzzle = prompt.includes('益智') || prompt.includes('词汇') || prompt.includes('记忆') || prompt.includes('数学');
            
            if (isPuzzle) {
                return `1. 保持专注力，仔细分析问题\n2. 运用逻辑思维，寻找解题规律\n3. 多练习，提升解题速度和准确性`;
            } else {
                return `1. 仔细观察游戏环境，寻找隐藏要素\n2. 合理利用道具和技能，提升游戏效率\n3. 多练习操作技巧，提高反应速度`;
            }
        }
        
        return 'AI生成的内容将在这里显示';
    }

    // 备用内容生成
    getFallbackDetails(game) {
        return {
            enhancedDescription: this.getFallbackDescription(game),
            gameFeatures: this.getFallbackFeatures(game),
            howToPlay: this.getFallbackHowToPlay(game),
            gameTags: this.generateGameTags(game),
            whyRecommend: this.getFallbackReasons(game),
            difficulty: this.generateDifficulty(game),
            targetAudience: this.generateTargetAudience(game),
            gameTips: this.getFallbackTips(game),
            relatedGames: this.generateRelatedGames(game),
            gameStats: this.generateGameStats(game)
        };
    }

    getFallbackDescription(game) {
        return `《${game.title}》是一款精彩的${game.category}游戏，为玩家带来独特的游戏体验。游戏融合了现代设计理念，操作简单易上手，画面精美，音效出色。无论是休闲娱乐还是挑战自我，都能在这里找到乐趣。`;
    }

    getFallbackFeatures(game) {
        return [
            '🎮 精美的游戏画面',
            '⚡ 流畅的操作体验',
            '🏆 丰富的成就系统',
            '🎯 多样的游戏模式',
            '🌟 独特的游戏机制'
        ];
    }

    getFallbackHowToPlay(game) {
        return [
            '1. 使用方向键或WASD控制角色移动',
            '2. 点击鼠标或空格键进行主要操作',
            '3. 收集游戏中的道具和奖励',
            '4. 完成关卡目标获得胜利'
        ];
    }

    getFallbackReasons(game) {
        return [
            '游戏内容丰富，可玩性极高',
            '操作简单易上手，适合所有年龄段',
            '画面精美，音效出色，沉浸感强'
        ];
    }

    getFallbackTips(game) {
        return [
            '仔细观察游戏环境，寻找隐藏要素',
            '合理利用道具和技能，提升游戏效率',
            '多练习操作技巧，提高反应速度'
        ];
    }

    // 辅助方法
    getRandomPlayTime() {
        const times = ['5-10分钟', '10-20分钟', '20-30分钟', '30-60分钟'];
        return times[Math.floor(Math.random() * times.length)];
    }

    getRandomReplayability() {
        const levels = ['高', '中', '低'];
        return levels[Math.floor(Math.random() * levels.length)];
    }

    getRandomReleaseDate() {
        const year = 2020 + Math.floor(Math.random() * 4);
        const month = 1 + Math.floor(Math.random() * 12);
        return `${year}年${month}月`;
    }

    // 清除缓存
    clearCache() {
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (key.startsWith('game_details_')) {
                localStorage.removeItem(key);
            }
        });
        this.gameDetailsCache.clear();
    }
}

// 创建全局实例
const aiGameDetails = new AIGameDetailsGenerator();

// 导出供全局使用
window.aiGameDetails = aiGameDetails; 