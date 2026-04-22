const fs = require('fs');
const path = require('path');
const dir = 'content/services';

let fixed = 0;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));

files.forEach(f => {
  const fpath = path.join(dir, f);
  let text = fs.readFileSync(fpath, 'utf8');
  const original = text;

  // Strip BOM if present
  if (text.charCodeAt(0) === 0xFEFF) {
    text = text.slice(1);
  }

  // Fix: "" (two double quotes used as em-dash) -> en dash
  // Only when it appears mid-string (not at start/end of JSON string values)
  text = text.replace(/""/g, '\u2013');

  // Fix: replacement character -> en dash
  text = text.replace(/\uFFFD/g, '\u2013');

  if (text !== original) {
    fs.writeFileSync(fpath, text, 'utf8');
    fixed++;
  }

  // Validate
  try {
    JSON.parse(text);
  } catch(e) {
    console.log('STILL INVALID: ' + f + ' -> ' + e.message.split('\n')[0]);
  }
});

console.log('Fixed: ' + fixed + ' files');

// Final count
let valid = 0;
files.forEach(f => {
  try {
    JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
    valid++;
  } catch(e) {}
});
console.log('Valid JSON: ' + valid + '/' + files.length);
