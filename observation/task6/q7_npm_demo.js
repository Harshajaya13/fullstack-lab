// Node.js NPM & package.json Demonstration (Q7)

/*
===================================================================
1. WHAT IS NPM (Node Package Manager)?
   NPM is the default package manager for Node.js. It consists of:
   - A Command Line Interface (CLI) to install, update, and manage packages.
   - An online registry holding thousands of open-source reusable packages.

2. WHAT IS package.json?
   package.json is the configuration file for a Node.js project. It tracks:
   - Project metadata (name, version, description, author).
   - Project dependencies (external libraries installed via NPM).
   - Custom executable scripts (e.g., npm start, npm test).

3. STEPS TO INSTALL AND USE AN EXTERNAL PACKAGE:
   Step 1: Initialize NPM in project folder -> `npm init -y`
   Step 2: Install external package -> `npm install express`
   Step 3: Import package into code -> `const express = require('express');`
   Step 4: Use package features in your application code.
===================================================================
*/

const fs = require('fs');
const path = require('path');

console.log("=== Q7: NPM & package.json Demonstration ===\n");

// Read and display package.json details
const packageJsonPath = path.join(__dirname, 'package.json');

try {
    const rawData = fs.readFileSync(packageJsonPath, 'utf8');
    const pkg = JSON.parse(rawData);

    console.log("Project Name        :", pkg.name);
    console.log("Project Version     :", pkg.version);
    console.log("Project Description :", pkg.description);
    console.log("Main Entry File     :", pkg.main);
    
    console.log("\n--- Installed Dependencies ---");
    if (pkg.dependencies) {
        Object.keys(pkg.dependencies).forEach(dep => {
            console.log(`- ${dep}: ${pkg.dependencies[dep]}`);
        });
    } else {
        console.log("No dependencies installed yet.");
    }

    console.log("\n--- Demonstrating External Package Import ---");
    // Importing installed external package
    const express = require('express');
    console.log("[SUCCESS] External package 'express' imported successfully!");
    console.log("Express framework type:", typeof express);

} catch (err) {
    console.error("[Error reading package.json]:", err.message);
}
