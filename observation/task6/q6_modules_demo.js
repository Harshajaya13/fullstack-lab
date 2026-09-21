// Node.js Built-in Modules Demonstration (Q6)
// Modules are reusable blocks of code in Node.js.

// Importing built-in modules using require()
const os = require('os');
const path = require('path');
const fs = require('fs');

console.log("=========================================");
console.log("      NODE.JS MODULES DEMONSTRATION      ");
console.log("=========================================\n");

// --------------------------------------------------
// 1. OS MODULE (Operating System Information)
// --------------------------------------------------
console.log("--- 1. OS Module Examples ---");
console.log("OS Platform     :", os.platform());
console.log("OS Architecture :", os.arch());
console.log("Total Memory    :", (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2), "GB");
console.log("Free Memory     :", (os.freemem() / (1024 * 1024 * 1024)).toFixed(2), "GB");
console.log("System Uptime   :", (os.uptime() / 3600).toFixed(2), "hours\n");

// --------------------------------------------------
// 2. PATH MODULE (File & Directory Paths)
// --------------------------------------------------
console.log("--- 2. PATH Module Examples ---");
const samplePath = "/home/user/documents/report.pdf";

console.log("Sample Path      :", samplePath);
console.log("Joined Path      :", path.join(__dirname, "subfolder", "file.txt"));
console.log("Base Filename    :", path.basename(samplePath));
console.log("File Extension   :", path.extname(samplePath));
console.log("Directory Name   :", path.dirname(samplePath));
console.log("Absolute Path    :", path.resolve("temp.txt"), "\n");

// --------------------------------------------------
// 3. FS MODULE (File System Operations)
// --------------------------------------------------
console.log("--- 3. FS Module Examples ---");
const demoFile = path.join(__dirname, "demo_test.txt");

try {
    // Write File
    fs.writeFileSync(demoFile, "Hello! This is a test file created using Node.js fs module.", "utf8");
    console.log("[FS] Created and wrote file:", path.basename(demoFile));

    // Read File
    const content = fs.readFileSync(demoFile, "utf8");
    console.log("[FS] Read Content:", content);

    // Delete Temporary File
    fs.unlinkSync(demoFile);
    console.log("[FS] Cleaned up temporary file successfully.");

} catch (err) {
    console.error("[FS Error]:", err.message);
}

console.log("\n=========================================");
console.log("     MODULE DEMONSTRATION COMPLETE      ");
console.log("=========================================");
