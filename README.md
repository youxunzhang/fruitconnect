# HotSpot Games - 热门休闲游戏平台

一个现代化的休闲游戏网站，采用欧美主流设计风格，提供100+精选游戏和计时器功能。

## 🌟 特色功能

### 🎮 游戏功能
- **100+ 精选游戏**：涵盖益智、动作、策略、街机四大类别
- **IFRAME 集成**：所有游戏通过iframe嵌入，无需下载
- **智能图片处理**：
  - 有图片时：显示自定义封面
  - 无图片时：显示渐变背景+游戏图标
  - 加载失败：自动降级到默认样式
- **游戏分类**：支持按类别筛选游戏
- **懒加载**：优化页面加载性能
- **响应式设计**：完美适配PC、平板、手机

### ⏱️ 计时器功能
- **精确计时**：时、分、秒精确显示
- **控制功能**：开始、暂停、重置
- **美观界面**：现代化设计风格

### 🎨 设计特色
- **扁平化设计**：符合现代Web趋势
- **明亮色彩**：吸引休闲游戏用户
- **卡片式布局**：便于游戏分类展示
- **响应式导航**：适配各种设备
- **流畅动画**：提升用户体验

## 🚀 技术栈

- **HTML5**：语义化标签，SEO友好
- **CSS3**：
  - CSS Grid & Flexbox 布局
  - CSS 变量（自定义属性）
  - 响应式设计
  - 现代化动画效果
- **JavaScript ES6+**：
  - 模块化代码结构
  - 事件驱动编程
  - 懒加载实现
  - 防抖优化

## 📱 响应式设计

网站采用移动优先的响应式设计：

- **桌面端** (>1200px)：完整布局，多列显示
- **平板端** (768px-1200px)：适中布局，双列显示
- **手机端** (<768px)：单列布局，优化触摸体验

## 🎯 页面结构

### 首页 (Hero Section)
- 引人注目的标题和描述
- 行动按钮（开始游戏、计时器）
- 浮动卡片动画效果

### 计时器区域
- 大数字时间显示
- 控制按钮（开始/暂停/重置）
- 渐变背景设计

### 游戏展示区域
- 分类筛选按钮
- 游戏卡片网格布局
- 加载更多功能
- 游戏模态框

### 关于区域
- 平台介绍
- 特色功能展示
- 悬停动画效果

## 🛠️ 安装和使用

### 本地运行
1. 克隆项目到本地
```bash
git clone https://github.com/yourusername/hotspotgame.net.git
cd hotspotgame.net
```

2. 使用本地服务器运行（推荐）
```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js
npx serve .

# 使用 PHP
php -S localhost:8000
```

3. 在浏览器中访问 `http://localhost:8000`

### 部署到服务器
1. 将所有文件上传到Web服务器
2. 确保服务器支持静态文件服务
3. 配置域名指向项目目录

## 📁 文件结构

```
hotspotgame.net/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript功能
├── README.md           # 项目说明
└── .gitattributes     # Git配置
```

## 🎨 自定义配置

### 修改颜色主题
在 `styles.css` 中的 `:root` 部分修改CSS变量：

```css
:root {
    --primary-color: #6366f1;    /* 主色调 */
    --secondary-color: #f59e0b;  /* 次要色调 */
    --accent-color: #10b981;     /* 强调色 */
}
```

### 添加新游戏
在 `script.js` 中的 `gamesData` 数组添加新游戏：

```javascript
{
    id: 101,
    title: "新游戏",
    category: "puzzle", // puzzle, action, strategy, arcade
    description: "游戏描述",
    image: "游戏图片URL",
    url: "游戏iframe URL",
    fallback: true
}
```

## 🔧 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📈 性能优化

- **懒加载**：图片和内容按需加载
- **防抖处理**：优化滚动和调整大小事件
- **CSS优化**：使用CSS变量和现代布局
- **JavaScript优化**：事件委托和内存管理

## 🤝 贡献指南

欢迎提交Issue和Pull Request来改进项目！

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系我们

- 网站：https://hotspotgame.net
- 邮箱：contact@hotspotgame.net

---

⭐ 如果这个项目对您有帮助，请给我们一个星标！
