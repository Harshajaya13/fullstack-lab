const fs = require('fs');
const express = require('express');

// Read package.json metadata
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
console.log('Project Name:', pkg.name);
console.log('Dependencies:', pkg.dependencies);

// External package usage
console.log('Express Package Loaded:', typeof express);
