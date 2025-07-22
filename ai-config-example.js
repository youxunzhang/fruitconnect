// AI配置示例文件
// 这个文件展示了如何集成真实的AI服务来生成游戏详情

// 配置对象
window.AIConfig = {
    // OpenAI GPT配置
    openai: {
        apiKey: 'your-openai-api-key-here',
        model: 'gpt-3.5-turbo',
        maxTokens: 500,
        temperature: 0.7
    },
    
    // Claude配置
    claude: {
        apiKey: 'your-claude-api-key-here',
        model: 'claude-3-sonnet-20240229',
        maxTokens: 500
    },
    
    // 本地AI模型配置
    local: {
        endpoint: 'http://localhost:8000/generate',
        model: 'llama-2-7b-chat'
    },
    
    // 默认使用的AI服务
    defaultService: 'openai',
    
    // 缓存配置
    cache: {
        enabled: true,
        duration: 24 * 60 * 60 * 1000 // 24小时
    }
};

// AI服务集成示例
class RealAIService {
    constructor(config) {
        this.config = config;
    }

    // 调用OpenAI GPT
    async callOpenAI(prompt) {
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.config.openai.apiKey}`
                },
                body: JSON.stringify({
                    model: this.config.openai.model,
                    messages: [
                        {
                            role: 'system',
                            content: '你是一个专业的游戏内容生成器，专门为游戏网站生成高质量的游戏描述、特色、操作指南等内容。'
                        },
                        {
                            role: 'user',
                            content: prompt
                        }
                    ],
                    max_tokens: this.config.openai.maxTokens,
                    temperature: this.config.openai.temperature
                })
            });

            const data = await response.json();
            return data.choices[0].message.content;
        } catch (error) {
            console.error('OpenAI API调用失败:', error);
            return null;
        }
    }

    // 调用Claude
    async callClaude(prompt) {
        try {
            const response = await fetch('https://api.anthropic.com/v1/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': this.config.claude.apiKey,
                    'anthropic-version': '2023-06-01'
                },
                body: JSON.stringify({
                    model: this.config.claude.model,
                    max_tokens: this.config.claude.maxTokens,
                    messages: [
                        {
                            role: 'user',
                            content: prompt
                        }
                    ]
                })
            });

            const data = await response.json();
            return data.content[0].text;
        } catch (error) {
            console.error('Claude API调用失败:', error);
            return null;
        }
    }

    // 调用本地AI模型
    async callLocalAI(prompt) {
        try {
            const response = await fetch(this.config.local.endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: this.config.local.model,
                    prompt: prompt,
                    max_tokens: 500
                })
            });

            const data = await response.json();
            return data.response;
        } catch (error) {
            console.error('本地AI调用失败:', error);
            return null;
        }
    }

    // 通用AI调用方法
    async generateContent(prompt) {
        const service = this.config.defaultService;
        
        switch (service) {
            case 'openai':
                return await this.callOpenAI(prompt);
            case 'claude':
                return await this.callClaude(prompt);
            case 'local':
                return await this.callLocalAI(prompt);
            default:
                console.warn('未知的AI服务:', service);
                return null;
        }
    }
}

// 使用示例
/*
// 1. 在HTML中引入配置
<script src="ai-config-example.js"></script>

// 2. 创建AI服务实例
const aiService = new RealAIService(window.AIConfig);

// 3. 在AI生成器中使用
async callAIService(prompt) {
    try {
        const response = await aiService.generateContent(prompt);
        return response;
    } catch (error) {
        console.error('AI服务调用失败:', error);
        return null;
    }
}
*/

// 高级功能示例
class AdvancedAIGenerator {
    constructor() {
        this.aiService = new RealAIService(window.AIConfig);
        this.templates = {
            description: `为游戏"{title}"生成一段详细、吸引人的描述。
游戏类型：{category}
原始描述：{description}
要求：
1. 200-300字
2. 突出游戏特色和玩法
3. 语言生动有趣
4. 适合游戏网站展示
5. 包含关键词优化`,

            features: `为游戏"{title}"生成5-8个游戏特色功能。
游戏类型：{category}
要求：
1. 每个特色用简短短语描述
2. 突出游戏亮点
3. 吸引玩家注意
4. 使用emoji表情
5. 包含技术特色和玩法特色`,

            howToPlay: `为游戏"{title}"生成简单的操作指南。
游戏类型：{category}
要求：
1. 3-5个操作步骤
2. 简单易懂
3. 适合新手玩家
4. 包含键盘和鼠标操作
5. 按重要性排序`,

            whyRecommend: `为游戏"{title}"生成3个推荐理由。
游戏类型：{category}
评分：{rating}
要求：
1. 突出游戏优势
2. 吸引目标玩家
3. 简洁有力
4. 包含情感因素
5. 强调独特价值`,

            tips: `为游戏"{title}"生成3个游戏技巧。
游戏类型：{category}
要求：
1. 实用的游戏技巧
2. 帮助玩家提升
3. 简洁明了
4. 包含进阶技巧
5. 适合不同水平玩家`
        };
    }

    // 使用模板生成提示词
    formatPrompt(template, game) {
        return template
            .replace('{title}', game.title)
            .replace('{category}', game.category)
            .replace('{description}', game.description)
            .replace('{rating}', game.rating);
    }

    // 生成增强描述
    async generateEnhancedDescription(game) {
        const prompt = this.formatPrompt(this.templates.description, game);
        return await this.aiService.generateContent(prompt);
    }

    // 生成游戏特色
    async generateGameFeatures(game) {
        const prompt = this.formatPrompt(this.templates.features, game);
        const response = await this.aiService.generateContent(prompt);
        return response ? response.split('\n').filter(f => f.trim()) : null;
    }

    // 生成操作指南
    async generateHowToPlay(game) {
        const prompt = this.formatPrompt(this.templates.howToPlay, game);
        const response = await this.aiService.generateContent(prompt);
        return response ? response.split('\n').filter(g => g.trim()) : null;
    }

    // 生成推荐理由
    async generateWhyRecommend(game) {
        const prompt = this.formatPrompt(this.templates.whyRecommend, game);
        const response = await this.aiService.generateContent(prompt);
        return response ? response.split('\n').filter(r => r.trim()) : null;
    }

    // 生成游戏技巧
    async generateGameTips(game) {
        const prompt = this.formatPrompt(this.templates.tips, game);
        const response = await this.aiService.generateContent(prompt);
        return response ? response.split('\n').filter(t => t.trim()) : null;
    }

    // 批量生成所有内容
    async generateAllContent(game) {
        const results = await Promise.allSettled([
            this.generateEnhancedDescription(game),
            this.generateGameFeatures(game),
            this.generateHowToPlay(game),
            this.generateWhyRecommend(game),
            this.generateGameTips(game)
        ]);

        return {
            enhancedDescription: results[0].status === 'fulfilled' ? results[0].value : null,
            gameFeatures: results[1].status === 'fulfilled' ? results[1].value : null,
            howToPlay: results[2].status === 'fulfilled' ? results[2].value : null,
            whyRecommend: results[3].status === 'fulfilled' ? results[3].value : null,
            gameTips: results[4].status === 'fulfilled' ? results[4].value : null
        };
    }
}

// 导出供使用
window.AdvancedAIGenerator = AdvancedAIGenerator;
window.RealAIService = RealAIService; 