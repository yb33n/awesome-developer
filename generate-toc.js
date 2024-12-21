const fs = require('fs');
const path = require('path');

const rootDir = './docs'; // Change this to your docs directory
const readmePath = './README.md'; // Path to your README.md file

function extractTitle(content) {
    const match = content.match(/^#\s+(.+)$/m);
    return match ? match[1] : null;
}

function getSidebarPosition(content) {
    const match = content.match(/^sidebar_position:\s*(\d+)/m);
    return match ? parseInt(match[1], 10) : Infinity;
}

function getCategoryInfo(dirPath) {
    const categoryPath = path.join(dirPath, '_category_.json');
    if (fs.existsSync(categoryPath)) {
        const categoryContent = fs.readFileSync(categoryPath, 'utf-8');
        const category = JSON.parse(categoryContent);
        return {
            label: category.label,
            position: category.position || Infinity
        };
    }
    return {
        label: path.basename(dirPath),
        position: Infinity
    };
}

function generateTOC(dir, baseDir = '', depth = 0) {
    let toc = '';
    const items = fs.readdirSync(dir, { withFileTypes: true });

    const sortedItems = items.sort((a, b) => {
        const aPath = path.join(dir, a.name);
        const bPath = path.join(dir, b.name);
        const aPos = a.isDirectory() ? getCategoryInfo(aPath).position : getSidebarPosition(fs.readFileSync(aPath, 'utf-8'));
        const bPos = b.isDirectory() ? getCategoryInfo(bPath).position : getSidebarPosition(fs.readFileSync(bPath, 'utf-8'));
        return aPos - bPos;
    });

    for (const item of sortedItems) {
        const itemPath = path.join(dir, item.name);
        const relativePath = path.join(baseDir, item.name);

        if (item.isDirectory()) {
            const categoryInfo = getCategoryInfo(itemPath);
            toc += `${'  '.repeat(depth)}- **${categoryInfo.label}**\n`;
            toc += generateTOC(itemPath, relativePath, depth + 1);
        } else if (item.name.endsWith('.md') && item.name !== 'README.md') {
            const content = fs.readFileSync(itemPath, 'utf-8');
            const title = extractTitle(content) || path.basename(item.name, '.md');
            toc += `${'  '.repeat(depth)}- [${title}](${path.join(rootDir, relativePath)})\n`;
        }
    }

    return toc;
}

function updateReadme() {
    const toc = generateTOC(rootDir);

    if (!fs.existsSync(readmePath)) {
        console.error('README.md not found. Creating a new one.');
        fs.writeFileSync(readmePath, '# Project Name\n\n<!-- TOC_START -->\n<!-- TOC_END -->');
    }

    let readmeContent = fs.readFileSync(readmePath, 'utf-8');

    if (!readmeContent.includes('<!-- TOC_START -->') || !readmeContent.includes('<!-- TOC_END -->')) {
        console.error('TOC markers not found in README.md. Adding them now.');
        readmeContent += '\n\n<!-- TOC_START -->\n<!-- TOC_END -->';
    }

    const updatedContent = readmeContent.replace(
        /(<!-- TOC_START -->)[\s\S]*(<!-- TOC_END -->)/,
        `$1\n\n${toc}\n$2`
    );

    fs.writeFileSync(readmePath, updatedContent);
    console.log('Table of Contents updated in README.md');
}

updateReadme();