const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.js')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

const targetDir = path.join(__dirname, '../content/services');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const statesDir = path.join(__dirname, '../src/data/services/states');
const allFiles = getAllFiles(statesDir);

allFiles.forEach(absolutePath => {
  try {
    const fileText = fs.readFileSync(absolutePath, 'utf8').replace(/export\s+default\s+/g, 'module.exports = ');
    const match = fileText.match(/const\s+(\w+)\s*=/);
    if (match) {
      const varName = match[1];
      const evalContent = fileText + `\nmodule.exports = ${varName};`;
      
      const tempPath = path.join(__dirname, 'temp_extract.cjs');
      fs.writeFileSync(tempPath, evalContent);
      
      // Clear require cache to allow reloading same filename
      if (require.cache[require.resolve(tempPath)]) {
        delete require.cache[require.resolve(tempPath)];
      }
      
      const data = require(tempPath);
      fs.unlinkSync(tempPath);

      Object.entries(data).forEach(([slug, serviceData]) => {
        const outPath = path.join(targetDir, `${slug}.json`);
        fs.writeFileSync(outPath, JSON.stringify(serviceData, null, 2));
        console.log(`Extracted: ${slug}`);
      });
    }
  } catch (err) {
    console.error(`Error processing ${absolutePath}:`, err.message);
  }
});
