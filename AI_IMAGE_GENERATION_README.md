# AI图像生成功能使用说明

## 功能概述

本功能可以根据游戏名称和描述自动生成相关的游戏封面图片，支持多种AI图像生成服务。

## 主要特性

- 🤖 **AI图像生成**: 使用先进的AI模型生成游戏相关图片
- 🖼️ **Unsplash集成**: 从高质量图片库搜索相关图片
- 📊 **批量处理**: 支持批量生成所有游戏的图片
- 💾 **本地存储**: 生成的图片自动保存到本地存储
- 🎨 **智能提示词**: 根据游戏类型自动生成优化的AI提示词
- 📱 **响应式设计**: 支持移动端和桌面端

## 使用方法

### 1. 配置API密钥

编辑 `config.js` 文件，配置您的API密钥：

```javascript
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
    
    // OpenAI API配置（可选）
    openai: {
        apiKey: 'YOUR_OPENAI_API_KEY', // 替换为您的OpenAI API密钥
        model: 'dall-e-3'
    }
};
```

### 2. 获取API密钥

#### Unsplash API
1. 访问 [Unsplash Developers](https://unsplash.com/developers)
2. 注册开发者账户
3. 创建应用程序
4. 获取Access Key

#### Hugging Face API
1. 访问 [Hugging Face](https://huggingface.co/)
2. 注册账户
3. 在设置中生成API Token

#### OpenAI API（可选）
1. 访问 [OpenAI Platform](https://platform.openai.com/)
2. 注册账户
3. 在API Keys页面生成密钥

### 3. 使用功能

#### 批量生成图片
1. 点击 "🤖 批量生成游戏图片" 按钮
2. 系统会自动为所有游戏生成相关图片
3. 生成过程中会显示进度条
4. 完成后会显示成功/失败统计

#### 生成单个游戏图片
1. 点击 "🎨 生成单个游戏图片" 按钮
2. 输入游戏ID
3. 系统会为该游戏生成相关图片

#### 查看生成状态
1. 点击 "📊 生成状态" 按钮
2. 查看已生成图片的统计信息
3. 查看具体哪些游戏已生成图片

#### 清除生成的图片
1. 点击 "🗑️ 清除生成的图片" 按钮
2. 确认操作
3. 所有生成的图片将被清除，恢复原始图片

## 技术实现

### AI提示词生成

系统会根据游戏信息智能生成AI提示词：

```javascript
// 示例：Wacky Flip 游戏
// 输入：title="Wacky Flip", category="动作", description="刺激的翻转冒险游戏"
// 输出：wacky flip, action game, dynamic, exciting, colorful, game art, digital art, high quality, 4k
```

### 图片生成流程

1. **关键词提取**: 从游戏标题和描述中提取关键词
2. **提示词生成**: 根据游戏类型生成优化的AI提示词
3. **AI生成**: 优先使用AI服务生成图片
4. **备用方案**: 如果AI生成失败，使用Unsplash搜索相关图片
5. **本地存储**: 将生成的图片URL保存到本地存储
6. **UI更新**: 更新游戏卡片显示新图片

### 支持的AI服务

- **Hugging Face**: 免费的开源AI模型
- **OpenAI DALL-E**: 高质量的AI图像生成
- **Unsplash**: 高质量图片搜索（备用方案）

## 配置选项

### 生成参数

```javascript
generationParams: {
    width: 512,        // 图片宽度
    height: 512,       // 图片高度
    quality: 'high',   // 图片质量
    style: 'digital art' // 图片风格
}
```

### 请求设置

```javascript
requestDelay: 1000,    // API请求间隔（毫秒）
maxRetries: 3,         // 最大重试次数
debug: true           // 调试模式
```

## 注意事项

1. **API限制**: 请注意各API服务的请求限制
2. **网络连接**: 确保网络连接稳定
3. **存储空间**: 生成的图片URL会占用本地存储空间
4. **版权问题**: 使用Unsplash图片时请遵守相关版权规定

## 故障排除

### 常见问题

1. **API密钥错误**
   - 检查config.js中的API密钥是否正确
   - 确认API密钥是否有效

2. **网络请求失败**
   - 检查网络连接
   - 确认API服务是否可用

3. **图片生成失败**
   - 检查API配额是否用完
   - 尝试使用不同的AI服务

4. **本地存储错误**
   - 检查浏览器是否支持localStorage
   - 清理浏览器缓存

### 调试模式

启用调试模式可以查看详细的错误信息：

```javascript
debug: true
```

## 更新日志

- v1.0.0: 初始版本，支持基本的AI图像生成功能
- v1.1.0: 添加批量处理功能
- v1.2.0: 添加本地存储和状态管理
- v1.3.0: 优化UI和用户体验

## 技术支持

如果您遇到问题或需要帮助，请：

1. 检查浏览器控制台的错误信息
2. 确认API配置是否正确
3. 查看网络请求是否成功
4. 联系技术支持团队

---

**注意**: 本功能需要有效的API密钥才能正常工作。请确保在config.js中正确配置了所需的API密钥。 