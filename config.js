// AI图像生成配置文件
const AIConfig = {
    // Unsplash API配置
    unsplash: {
        accessKey: 'YOUR_UNSPLASH_ACCESS_KEY', // 替换为您的Unsplash API密钥
        baseUrl: 'https://api.unsplash.com/search/photos'
    },
    
    // Hugging Face API配置
    huggingFace: {
        token: 'YOUR_HUGGING_FACE_TOKEN', // 替换为您的Hugging Face API令牌
        model: 'runwayml/stable-diffusion-v1-5'
    },
    
    // 其他AI图像生成服务配置
    openai: {
        apiKey: 'YOUR_OPENAI_API_KEY', // 替换为您的OpenAI API密钥
        model: 'dall-e-3'
    },
    
    // 图片生成参数
    generationParams: {
        width: 512,
        height: 512,
        quality: 'high',
        style: 'digital art'
    },
    
    // 是否启用调试模式
    debug: true,
    
    // API请求延迟（毫秒）
    requestDelay: 1000,
    
    // 最大重试次数
    maxRetries: 3
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AIConfig;
} else {
    window.AIConfig = AIConfig;
} 