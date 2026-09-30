// Node.js NPM & package.json Demonstration (Q7)

/*
NPM (Node Package Manager): Registry and CLI to install reusable packages.
package.json: Manifest file tracking project metadata, scripts, and dependencies.

Steps to Install & Use External Package:
1. Initialize project : npm init -y
2. Install package     : npm install express
3. Require in code     : const express = require('express');
*/

const fs = require('fs');
const path = require('path');

console.log("=== Q7: NPM & package.json Demonstration ===\n");

// Read and parse package.json manifest file using path.join
const pkgPath = path.join(__dirname, 'package.json');
const pkgData = fs.readFileSync(pkgPath, 'utf8');
const pkg = JSON.parse(pkgData);

console.log("Project Name        :", pkg.name);
console.log("Project Version     :", pkg.version);
console.log("Main Entry File     :", pkg.main);

console.log("\n--- Project Dependencies ---");
console.log(pkg.dependencies);

// Demonstrating usage of installed external package
const express = require('express');
console.log("\n[SUCCESS] External package 'express' loaded successfully!");
console.log("Express export type:", typeof express);
