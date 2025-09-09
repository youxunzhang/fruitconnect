// 创建默认游戏LOGO图片的脚本
const fs = require('fs');
const { createCanvas } = require('canvas');
const path = require('path'); // Added missing import for path

// 游戏数据
const games = [
    { name: "Snow Rush 3D", icon: "❄️", color: "#87CEEB" },
    { name: "Tower Crash 3D", icon: "🏗️", color: "#FF6B6B" },
    { name: "Tunnel Road", icon: "🚇", color: "#4ECDC4" },
    { name: "Merge Flowers", icon: "🌸", color: "#FF69B4" },
    { name: "Obby On a Bike", icon: "🚲", color: "#32CD32" },
    { name: "Cat Chaos Simulator", icon: "🐱", color: "#FFA500" },
    { name: "Memoji", icon: "😊", color: "#FFD700" },
    { name: "Cityquest", icon: "🏙️", color: "#4682B4" },
    { name: "10K", icon: "💰", color: "#FFD700" },
    { name: "Phrasle Master", icon: "📝", color: "#9370DB" },
    { name: "Word Search", icon: "🔍", color: "#20B2AA" },
    { name: "Kitty Scramble", icon: "🐾", color: "#FF69B4" }
];

// 创建images目录
const imagesDir = './images';
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
}

// 创建游戏LOGO图片
function createGameLogo(game) {
    const width = 300;
    const height = 200;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // 创建渐变背景
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, game.color);
    gradient.addColorStop(1, adjustBrightness(game.color, -20));
    
    // 绘制背景
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // 添加一些装饰性元素
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.beginPath();
    ctx.arc(width * 0.8, height * 0.2, 30, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(width * 0.2, height * 0.8, 20, 0, Math.PI * 2);
    ctx.fill();

    // 绘制游戏图标
    ctx.font = '60px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(game.icon, width / 2, height / 2 - 20);

    // 绘制游戏名称
    ctx.font = 'bold 18px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // 处理长游戏名称
    const words = game.name.split(' ');
    if (words.length > 2) {
        // 如果名称太长，分两行显示
        const firstLine = words.slice(0, Math.ceil(words.length / 2)).join(' ');
        const secondLine = words.slice(Math.ceil(words.length / 2)).join(' ');
        
        ctx.fillText(firstLine, width / 2, height / 2 + 30);
        ctx.fillText(secondLine, width / 2, height / 2 + 50);
    } else {
        ctx.fillText(game.name, width / 2, height / 2 + 40);
    }

    // 添加阴影效果
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    // 添加边框
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 2;
    ctx.strokeRect(2, 2, width - 4, height - 4);

    return canvas;
}

// 调整颜色亮度
function adjustBrightness(hex, percent) {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

// 保存图片
function saveImage(canvas, filename) {
    const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
    fs.writeFileSync(filename, buffer);
    console.log(`✅ 创建成功: ${filename}`);
}

// 主函数
function main() {
    console.log('🎨 开始创建游戏LOGO图片...\n');
    
    games.forEach(game => {
        try {
            const canvas = createGameLogo(game);
            const filename = path.join(imagesDir, `${game.name.replace(/[^a-zA-Z0-9]/g, '_')}.jpg`);
            saveImage(canvas, filename);
        } catch (error) {
            console.log(`❌ 创建 ${game.name} LOGO时出错: ${error.message}`);
        }
    });
    
    console.log('\n🎉 游戏LOGO创建完成！');
    console.log(`📁 图片保存在: ${imagesDir}/`);
}

// 运行脚本
main();
