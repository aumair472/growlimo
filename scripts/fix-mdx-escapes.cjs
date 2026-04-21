const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '../content/blog');
const files = fs.readdirSync(blogDir);

files.forEach(file => {
  if (file.endsWith('.mdx')) {
    const filePath = path.join(blogDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace < with &lt; unless it's escaped or in a code block?
    // For simplicity, we'll replace < followed by ANY character (except space maybe)
    // Actually, just replacing all < that are not immediately followed by / or a known component name.
    // Since we don't use components in text, let's just replace all < with &lt;
    content = content.replace(/<(?!\/?[a-zA-Z])/g, '&lt;'); // Not followed by tag start
    // Wait, the error was <head>, so it IS followed by a letter.
    // So let's just escape ALL < that are likely intended as text.
    // If it's inside a paragraph, we want it escaped.
    
    // Better: Replace < with &lt; if it's NOT a component. 
    // We don't have many components.
    
    // Simple approach: Replace < with &lt; everywhere in the body (after frontmatter)
    const parts = content.split('---');
    if (parts.length >= 3) {
      let body = parts.slice(2).join('---');
      body = body.replace(/</g, '&lt;');
      content = parts[0] + '---' + parts[1] + '---' + body;
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Checked/Fixed: ${file}`);
  }
});
