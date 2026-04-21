import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fixData = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix capitalization of 'In State' across all files
  content = content.replace(/ In Texas/g, ' in Texas');
  content = content.replace(/ In California/g, ' in California');
  content = content.replace(/ in Texas,\s*USA/g, ' in Texas, USA');
  content = content.replace(/ in California,\s*USA/g, ' in California, USA');

  const isCalifornia = filePath.includes('california');

  if (isCalifornia) {
     // Replace Texas cities with California cities
     content = content.replace(/Houston/g, 'Los Angeles');
     content = content.replace(/Dallas/g, 'San Diego');
     content = content.replace(/Austin/g, 'San Francisco');
     content = content.replace(/San Antonio/g, 'Sacramento');
     content = content.replace(/Fort Worth/g, 'San Jose');
     content = content.replace(/El Paso/g, 'Fresno');
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filePath}`);
};

const directories = [
  path.join(__dirname, 'src/data/services/states/texas'),
  path.join(__dirname, 'src/data/services/states/california'),
];

directories.forEach(dir => {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    if (file.endsWith('.js') && file !== 'index.js') {
       fixData(path.join(dir, file));
    }
  });
});

console.log('Finished updating data files!');
