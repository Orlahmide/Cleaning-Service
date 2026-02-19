const fs = require('fs');
const path = require('path');

// Update this path to your logo location
const logoPath = path.join(__dirname, '../public/icon.png');

// Read the file
const imageBuffer = fs.readFileSync(logoPath);

// Convert to base64
const base64Image = imageBuffer.toString('base64');

// Get the file extension
const ext = path.extname(logoPath).substring(1);

// Create data URL
const dataUrl = `data:image/${ext};base64,${base64Image}`;

console.log('\n=== Copy this entire string ===\n');
console.log(dataUrl);
console.log('\n');

// Save to file for easy copying
fs.writeFileSync(path.join(__dirname, 'logo-base64.txt'), dataUrl);
console.log('✅ Saved to scripts/logo-base64.txt');