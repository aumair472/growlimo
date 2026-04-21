const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const BLOG_DIR = path.join(__dirname, '../content/blog');

async function updateBlogSEO() {
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));

  console.log(`Updating SEO for ${files.length} blog posts...`);

  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    // If already updated, skip or re-process
    // We'll set metaTitle and h1
    const currentTitle = data.title || '';
    
    // 1. Meta Title (usually the original title is good)
    data.metaTitle = currentTitle;

    // 2. H1 (Goal: ~60 characters)
    let newH1 = currentTitle;
    
    if (newH1.length < 55) {
      const suffixes = [
        ' for Healthcare Growth',
        ' in 2026',
        ' | GrowLimo Digital',
        ' for Modern Practices',
        ' to Scale Your Clinic'
      ];
      
      for (const suffix of suffixes) {
        if ((newH1 + suffix).length <= 65) {
          newH1 += suffix;
          break;
        }
      }
    }
    
    // Ensure it's not too long, but try to keep it around 60
    data.h1 = newH1;

    console.log(`- ${file}: H1 (${newH1.length} chars)`);

    const updatedContent = matter.stringify(content, data);
    fs.writeFileSync(filePath, updatedContent);
  }

  console.log('\nAll blog posts updated successfully!');
}

updateBlogSEO().catch(err => {
  console.error(err);
  process.exit(1);
});
