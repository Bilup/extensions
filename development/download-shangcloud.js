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

function hasHeaderComment(content) {
    const lines = content.trim().split('\n');
    return lines.length > 0 && lines[0].startsWith('//');
}

async function main() {
    try {
        console.log(`正在下载扩展文件: ${EXTENSION_URL}`);
        const content = await downloadFile(EXTENSION_URL);

        if (!content || content.trim() === '') {
            throw new Error('下载的内容为空');
        }

        let fullContent;
        if (hasHeaderComment(content)) {
            const lines = content.split('\n');
            let insertIndex = 0;
            while (insertIndex < lines.length && lines[insertIndex].startsWith('//')) {
                insertIndex++;
            }
            lines.splice(insertIndex - 1, 0, '// SkipProcessing: true');
            fullContent = lines.join('\n');
        } else {
            const header = `// Name: ShangCloud
// ID: shangcloud
// Description: ShangCloud extension for Bilup
// By: YearnStudio <https://api.yearnstudio.cn>
// License: MIT
// SkipProcessing: true

`;
            fullContent = header + content;
        }

        await fsPromises.writeFile(OUTPUT_FILE, fullContent, 'utf-8');
        console.log(`扩展文件已保存到: ${OUTPUT_FILE}`);
    } catch (error) {
        console.error('下载失败:', error.message);
        process.exit(1);
    }
}

main();