# AI图像生成功能 - 快速开始指南

## 🚀 立即开始

### 1. 使用演示版本（无需API密钥）

1. **替换配置文件**
   ```bash
   # 将 config.js 重命名为 config-backup.js
   mv config.js config-backup.js
   
   # 使用演示配置
   cp demo-config.js config.js
   ```

2. **打开网页**
   - 在浏览器中打开 `index.html`
   - 您会看到新的AI图像生成按钮

3. **开始生成图片**
   - 点击 "🤖 批量生成游戏图片" 按钮
   - 系统会自动为所有游戏生成相关图片
   - 使用免费的Lorem Picsum服务，无需任何API密钥

### 2. 使用高级功能（需要API密钥）

#### 步骤1: 获取API密钥

**Pixabay API（推荐，免费）**
1. 访问 [Pixabay](https://pixabay.com/api/docs/)
2. 注册免费账户
3. 获取API密钥

**Unsplash API（免费，但需要注册）**
1. 访问 [Unsplash Developers](https://unsplash.com/developers)
2. 注册开发者账户
3. 创建应用程序获取Access Key

#### 步骤2: 配置API密钥

编辑 `config.js` 文件：

```javascript
const AIConfig = {
    // Pixabay API（推荐）
    pixabay: {
        apiKey: 'YOUR_PIXABAY_API_KEY', // 替换为您的Pixabay API密钥
        baseUrl: 'https://pixabay.com/api/'
    },
    
    // Unsplash API（可选）
    unsplash: {
        accessKey: 'YOUR_UNSPLASH_ACCESS_KEY', // 替换为您的Unsplash Access Key
        baseUrl: 'https://api.unsplash.com/search/photos'
    },
    
    // 关闭免费模式以使用API服务
    freeMode: false
};
```

#### 步骤3: 开始使用

1. 保存配置文件
2. 刷新网页
3. 点击生成按钮开始使用

## 🎯 功能演示

### 批量生成
- 点击 "🤖 批量生成游戏图片"
- 系统会为所有游戏生成相关图片
- 显示生成进度和结果统计

### 单个生成
- 点击 "🎨 生成单个游戏图片"
- 输入游戏ID（1-31）
- 为指定游戏生成图片

### 状态查看
- 点击 "📊 生成状态"
- 查看已生成图片的统计信息
- 查看具体哪些游戏已生成图片

### 清除图片
- 点击 "🗑️ 清除生成的图片"
- 确认操作后恢复原始图片

## 🔧 自定义配置

### 图片尺寸
```javascript
generationParams: {
    width: 300,    // 图片宽度
    height: 200    // 图片高度
}
```

### 请求延迟
```javascript
requestDelay: 500,  // API请求间隔（毫秒）
```

### 调试模式
```javascript
debug: true  // 启用详细日志
```

## 📱 移动端支持

功能完全支持移动端：
- 响应式按钮布局
- 触摸友好的界面
- 适配小屏幕显示

## 🆘 常见问题

### Q: 为什么图片生成失败？
A: 检查网络连接，或尝试使用演示版本（无需API密钥）

### Q: 如何获取免费的API密钥？
A: Pixabay提供免费的API密钥，每天1000次请求

### Q: 生成的图片质量如何？
A: 使用Lorem Picsum时是随机高质量图片，使用API服务时是相关主题图片

### Q: 可以自定义图片风格吗？
A: 目前支持基本的尺寸和参数配置，未来版本将支持更多自定义选项

## 🎨 示例效果

使用AI图像生成功能后，您的游戏网站将拥有：
- 独特的游戏封面图片
- 与游戏主题相关的视觉内容
- 自动化的图片管理
- 本地存储的持久化

## 📞 技术支持

如果遇到问题：
1. 检查浏览器控制台错误信息
2. 确认配置文件格式正确
3. 尝试使用演示版本
4. 查看详细的使用说明文档

---

**提示**: 建议先使用演示版本体验功能，然后再配置API密钥使用高级功能。 