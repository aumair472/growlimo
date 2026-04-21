const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '../src/data/caseStudies.json');
const targetDir = path.join(__dirname, '../content/case-studies');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

data.caseStudies.forEach(cs => {
  const targetPath = path.join(targetDir, `${cs.slug}.json`);
  fs.writeFileSync(targetPath, JSON.stringify(cs, null, 2));
  console.log(`Extracted case study: ${cs.slug}`);
});
