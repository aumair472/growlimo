const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../public/blog-images');
const BLOG_DIR = path.join(__dirname, '../content/blog');

async function renameImages() {
  const files = fs.readdirSync(IMAGES_DIR);
  const renameMap = {};

  console.log('Renaming images...');

  for (const file of files) {
    // Match pattern: numeric-numeric-name.webp or numeric-name.webp
    const match = file.match(/^(\d+-)+\d*-(.*)$/) || file.match(/^(\d+)-(.*)$/);
    
    if (match) {
      const newName = match[match.length - 1];
      const oldPath = path.join(IMAGES_DIR, file);
      const newPath = path.join(IMAGES_DIR, newName);

      if (file !== newName) {
        fs.renameSync(oldPath, newPath);
        renameMap[file] = newName;
        console.log(`Renamed: ${file} -> ${newName}`);
      }
    }
  }

  console.log('\nUpdating MDX files...');

  const mdxFiles = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));

  for (const mdxFile of mdxFiles) {
    const filePath = path.join(BLOG_DIR, mdxFile);
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    for (const [oldName, newName] of Object.entries(renameMap)) {
      if (content.includes(oldName)) {
        // Use a regex with word boundaries or just replace all instances
        // Since these are specific filenames, a simple replace should work
        // but let's be safer with a global replace
        const escapedOldName = oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        content = content.replace(new RegExp(escapedOldName, 'g'), newName);
        updated = true;
      }
    }

    if (updated) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated: ${mdxFile}`);
    }
  }

  console.log('\nDone!');
}

renameImages().catch(err => {
  console.error(err);
  process.exit(1);
});
