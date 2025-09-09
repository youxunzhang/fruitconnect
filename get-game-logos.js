// 游戏LOGO获取和下载脚本
const fs = require('fs');
const https = require('https');
const path = require('path');

// 游戏数据 - 从页面中提取的游戏信息
const games = [
    {
        name: "Snow Rush 3D",
        id: "e1e32230bdf040d69f4e367015e1c527",
        url: "https://crazycattle3d.com/games/snow-rush-3d"
    },
    {
        name: "Tower Crash 3D", 
        id: "b375b05ea29b40abaaf3606a2ff215ad",
        url: "https://crazycattle3d.com/games/tower-crash-3d"
    },
    {
        name: "Tunnel Road",
        id: "14e87fab0cbf44b6b3e57ddb77af5941", 
        url: "https://crazycattle3d.com/games/tunnel-road"
    },
    {
        name: "Merge Flowers",
        id: "2e5863b7cc10444a88f72c81e74502f1",
        url: "https://crazycattle3d.com/games/merge-flowers"
    },
    {
        name: "Obby On a Bike",
        id: "bc2f52c2d9d04e41aee48bef01075d22",
        url: "https://crazycattle3d.com/games/obby-on-a-bike"
    },
    {
        name: "Cat Chaos Simulator",
        id: "427f3a980dfc48e69e4329acdb5b9d8b",
        url: "https://crazycattle3d.com/games/cat-chaos-simulator"
    },
    {
        name: "Memoji",
        id: "50c56858d355416ba84e18c68321a69b",
        url: "https://gamedistribution.com/games/memoji/"
    },
    {
        name: "Cityquest",
        id: "31068f4a88af4d3da31feeeddaeb44c8",
        url: "https://gamedistribution.com/games/cityquest/"
    },
    {
        name: "10K",
        id: "3acc054600054896b62bda751eaef869",
        url: "https://www.example.com/games/10k"
    },
    {
        name: "Phrasle Master",
        id: "1adf969783854409b65b5ccb0873ea8a",
        url: "https://www.example.com/games/phrasle-master"
    },
    {
        name: "Word Search",
        id: "c13ee9c06edc4f0a8d7f6f291a7c13d8",
        url: "https://www.example.com/games/word-search"
    },
    {
        name: "Kitty Scramble",
        id: "944186abe50e452dac7f0e8d3e0a8814",
        url: "https://www.example.com/games/kitty-scramble"
    }
];

// 创建images目录
const imagesDir = './images';
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
}

// 下载图片函数
function downloadImage(url, filename) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filename);
        
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`✅ 下载成功: ${filename}`);
                    resolve(filename);
                });
            } else {
                console.log(`❌ 下载失败: ${url} - 状态码: ${response.statusCode}`);
                reject(new Error(`HTTP ${response.statusCode}`));
            }
        }).on('error', (err) => {
            fs.unlink(filename, () => {}); // 删除不完整的文件
            console.log(`❌ 下载错误: ${url} - ${err.message}`);
            reject(err);
        });
    });
}

// 获取游戏信息的函数
async function getGameInfo(gameId) {
    return new Promise((resolve, reject) => {
        const url = `https://html5.gamedistribution.com/api/game/${gameId}`;
        
        https.get(url, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                try {
                    const gameInfo = JSON.parse(data);
                    resolve(gameInfo);
                } catch (error) {
                    console.log(`❌ 解析游戏信息失败: ${gameId}`);
                    reject(error);
                }
            });
        }).on('error', (err) => {
            console.log(`❌ 获取游戏信息失败: ${gameId} - ${err.message}`);
            reject(err);
        });
    });
}

// 主函数
async function main() {
    console.log('🎮 开始获取游戏LOGO图片...\n');
    
    for (const game of games) {
        try {
            console.log(`📡 正在获取 ${game.name} 的信息...`);
            
            // 尝试获取游戏信息
            const gameInfo = await getGameInfo(game.id);
            
            if (gameInfo && gameInfo.thumbnail) {
                const imageUrl = gameInfo.thumbnail;
                const filename = path.join(imagesDir, `${game.name.replace(/[^a-zA-Z0-9]/g, '_')}.jpg`);
                
                await downloadImage(imageUrl, filename);
            } else {
                console.log(`⚠️  ${game.name} 没有找到缩略图`);
            }
            
            // 延迟避免请求过快
            await new Promise(resolve => setTimeout(resolve, 1000));
            
        } catch (error) {
            console.log(`❌ 处理 ${game.name} 时出错: ${error.message}`);
        }
    }
    
    console.log('\n🎉 游戏LOGO获取完成！');
    console.log(`📁 图片保存在: ${imagesDir}/`);
}

// 运行脚本
main().catch(console.error);
