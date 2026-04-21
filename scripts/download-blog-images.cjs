const fs = require('fs');
const path = require('path');
const axios = require('axios');

const blogDir = path.join(__dirname, '../content/blog');
const publicImagesDir = path.join(__dirname, '../public/blog-images');

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

async function downloadImage(url, filename) {
  const targetPath = path.join(publicImagesDir, filename);
  if (fs.existsSync(targetPath)) return;

  console.log(`Downloading ${url}...`);
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
    });
    const writer = fs.createWriteStream(targetPath);
    response.data.pipe(writer);
    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`Failed to download ${url}: ${error.message}`);
  }
}

async function run() {
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx'));

  for (const file of files) {
    const filePath = path.join(blogDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    const imageUrlMatch = content.match(/featuredImage:\s*"(https:\/\/api\.growlimo\.com\/uploads\/([^"]+))"/);
    if (imageUrlMatch) {
      const url = imageUrlMatch[1];
      const originalFilename = imageUrlMatch[2];
      // Clean filename if needed
      const localFilename = originalFilename;
      
      await downloadImage(url, localFilename);
      
      // Update content
      content = content.replace(url, `/blog-images/${localFilename}`);
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${file}`);
    }
  }
}

run().then(() => console.log('Done!')).catch(console.error);
