// Node.js Core Modules Demonstration (Q6)
// Modules are reusable blocks of code in Node.js.

const os = require('os');
const path = require('path');
const fs = require('fs');

console.log("=====================================");
console.log("     NODE.JS MODULES DEMONSTRATION   ");
console.log("=====================================\n");

// 1. OS Module: Operating system information
console.log("--- 1. OS Module ---");
console.log("OS Platform     :", os.platform());
console.log("OS Architecture :", os.arch());
console.log("Free System RAM :", (os.freemem() / (1024 * 1024)).toFixed(2), "MB\n");

// 2. PATH Module: File and directory paths
console.log("--- 2. PATH Module ---");
const samplePath = "/docs/report.pdf";
console.log("Joined Path     :", path.join(__dirname, "test.txt"));
console.log("Base Filename   :", path.basename(samplePath));
console.log("File Extension  :", path.extname(samplePath), "\n");

// 3. FS Module: File system operations
console.log("--- 3. FS Module ---");
fs.writeFileSync("test.txt", "Demonstrating fs module write and read operations.", "utf8");
console.log("[FS Read File]  :", fs.readFileSync("test.txt", "utf8"));
fs.unlinkSync("test.txt");
console.log("[FS Cleanup]    : Temporary file deleted successfully.");
