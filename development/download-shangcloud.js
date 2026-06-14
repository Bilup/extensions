#!/usr/bin/env node
import fs from 'fs';
import fsPromises from 'fs/promises';
import https from 'https';
import http from 'http';
import path from 'path';

const EXTENSION_URL = 'https://api.yearnstudio.cn/static/extension-bilup.js';
const OUTPUT_DIR = path.join(import.meta.dirname, '../extensions');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'shangcloud.js');

function downloadFile(url) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;
        
        const req = protocol.get(url, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`下载失败，状态码: ${res.statusCode}`));
                return;
            }

            let data = [];
            res.on('data', (chunk) => {
                data.push(chunk);
            });

            res.on('end', () => {
                const buffer = Buffer.concat(data);
                resolve(buffer.toString('utf-8'));
            });
        });

        req.on('error', (err) => {
            reject(err);
        });

        req.setTimeout(30000);
        req.end();
    });
}

function hasSkipProcessing(content) {
    return content.includes('// SkipProcessing: true');
}

function addSkipProcessing(content) {
    if (hasSkipProcessing(content)) {
        return content;
    }

    const lines = content.split('\n');
    let headerEndIndex = 0;
    while (headerEndIndex < lines.length && lines[headerEndIndex].startsWith('//')) {
        headerEndIndex++;
    }

    if (headerEndIndex > 0) {
        lines.splice(headerEndIndex - 1, 0, '// SkipProcessing: true');
    } else {
        const header = `// SkipProcessing: true\n\n`;
        return header + content;
    }

    return lines.join('\n');
}

async function main() {
    try {
        console.log(`正在下载扩展文件: ${EXTENSION_URL}`);
        const content = await downloadFile(EXTENSION_URL);

        if (!content || content.trim() === '') {
            throw new Error('下载的内容为空');
        }

        const fullContent = addSkipProcessing(content);

        await fsPromises.writeFile(OUTPUT_FILE, fullContent, 'utf-8');
        console.log(`扩展文件已保存到: ${OUTPUT_FILE}`);
        
        const imagePath = path.join(import.meta.dirname, '../images/shangcloud.png');
        if (await fsPromises.access(imagePath).then(() => true).catch(() => false)) {
            console.log(`封面图片已存在: ${imagePath}`);
        } else {
            console.log(`警告: 封面图片不存在: ${imagePath}`);
        }
    } catch (error) {
        console.error('下载失败:', error.message);
        process.exit(1);
    }
}

main();