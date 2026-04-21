const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../public/blog-cache/posts');
const targetDir = path.join(__dirname, '../content/blog');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

if (!fs.existsSync(sourceDir)) {
  console.error(`Source directory not found: ${sourceDir}`);
  process.exit(1);
}

const files = fs.readdirSync(sourceDir);

files.forEach(file => {
  if (!file.endsWith('.json')) return;

  const absolutePath = path.join(sourceDir, file);
  const content = JSON.parse(fs.readFileSync(absolutePath, 'utf8'));

  const slug = file.replace('.json', '');
  
  // Create MDX with frontmatter
  const mdxContent = `---
title: "${content.title.replace(/"/g, '\\"')}"
excerpt: "${(content.excerpt || '').replace(/"/g, '\\"')}"
date: "${content.publishedAt || content.createdAt}"
author: "${typeof content.author === 'string' ? content.author : content.author?.name || 'GrowLimo Team'}"
featuredImage: "${content.featuredImageUrl || ''}"
tags: ${JSON.stringify(content.tags || [])}
---

${content.content}
`;

  fs.writeFileSync(path.join(targetDir, `${slug}.mdx`), mdxContent);
  console.log(`Converted: ${slug}`);
});
