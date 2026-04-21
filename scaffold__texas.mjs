import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Scaffold texasServices.js
const caliPath = path.join(__dirname, 'src/data/californiaServices.js');
let dataContent = fs.readFileSync(caliPath, 'utf8');

dataContent = dataContent.replace(/californiaServices/g, 'texasServices');
dataContent = dataContent.replace(/-california/g, '-texas');
dataContent = dataContent.replace(/California/g, 'Texas');
dataContent = dataContent.replace(/california/g, 'texas');
dataContent = dataContent.replace(/Los Angeles/g, 'Houston');
dataContent = dataContent.replace(/San Diego/g, 'Dallas');
dataContent = dataContent.replace(/San Francisco/g, 'Austin');
dataContent = dataContent.replace(/Sacramento/g, 'San Antonio');
dataContent = dataContent.replace(/CA/g, 'TX');

fs.writeFileSync(path.join(__dirname, 'src/data/texasServices.js'), dataContent, 'utf8');

// 2. Scaffold TexasService.jsx
const caliCompPath = path.join(__dirname, 'src/pages/CaliforniaService.jsx');
let compContent = fs.readFileSync(caliCompPath, 'utf8');

compContent = compContent.replace(/CaliforniaService/g, 'TexasService');
compContent = compContent.replace(/californiaServices/g, 'texasServices');
compContent = compContent.replace(/california/g, 'texas');
compContent = compContent.replace(/California/g, 'Texas');

fs.writeFileSync(path.join(__dirname, 'src/pages/TexasService.jsx'), compContent, 'utf8');

console.log('Texas scaffolding complete.');
