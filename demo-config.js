// 演示配置文件 - 使用免费服务
const AIConfig = {
    // 使用免费的Pixabay API作为示例
    pixabay: {
        apiKey: '36897822-8c0c4c8c8c8c8c8c8c8c8c8c', // 这是一个示例密钥，请替换为您的
        baseUrl: 'https://pixabay.com/api/'
    },
    
    // 使用免费的Unsplash API（无需密钥的版本）
    unsplash: {
        accessKey: '', // 留空使用无需密钥的版本
        baseUrl: 'https://api.unsplash.com/search/photos'
    },
    
    // 使用免费的Lorem Picsum服务
    loremPicsum: {
        baseUrl: 'https://picsum.photos'
    },
    
    // 图片生成参数
    generationParams: {
        width: 300,
        height: 200,
        quality: 'medium',
        style: 'game art'
    },
    
    // 是否启用调试模式
    debug: true,
    
    // API请求延迟（毫秒）
    requestDelay: 500,
    
    // 最大重试次数
    maxRetries: 2,
    
    // 使用免费服务模式
    freeMode: true
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AIConfig;
} else {
    window.AIConfig = AIConfig;
} 