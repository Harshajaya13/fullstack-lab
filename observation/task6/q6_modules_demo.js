const os = require('os');
const path = require('path');
const fs = require('fs');

console.log('--- OS Module ---');
console.log('Platform:', os.platform(), '| Architecture:', os.arch());

console.log('--- Path Module ---');
console.log('Joined Path:', path.join(__dirname, 'test.txt'));

console.log('--- FS Module ---');
fs.writeFileSync('test.txt', 'Hello Node.js');
console.log('Read File:', fs.readFileSync('test.txt', 'utf8'));
fs.unlinkSync('test.txt');
