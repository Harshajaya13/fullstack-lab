// Node.js File Management Application
// Uses built-in 'fs' (File System) and 'readline' modules

const fs = require('fs');
const readline = require('readline');
const path = require('path');

// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Node.js File Management System ===");

// Step 1: Prompt for filename
rl.question('Enter filename (e.g., sample.txt): ', (filename) => {

    // Ensure filename is given
    const filePath = path.join(__dirname, filename || 'sample.txt');

    // Step 2: Prompt for initial content
    rl.question('Enter initial file content: ', (initialContent) => {

        try {
            // Operation 1: Create and write to file
            fs.writeFileSync(filePath, initialContent, 'utf8');
            console.log(`\n[SUCCESS] File '${filename}' created and initial content written.`);

            // Operation 2: Read file contents
            console.log('\n--- Reading Initial File Content ---');
            const data1 = fs.readFileSync(filePath, 'utf8');
            console.log(data1);

            // Step 3: Prompt for content to append
            rl.question('\nEnter additional content to append: ', (additionalContent) => {

                // Operation 3: Append content to file
                fs.appendFileSync(filePath, '\n' + additionalContent, 'utf8');
                console.log(`\n[SUCCESS] Additional content appended to '${filename}'.`);

                // Operation 4: Read and display final contents
                console.log('\n--- Final File Contents ---');
                const finalData = fs.readFileSync(filePath, 'utf8');
                console.log(finalData);

                console.log('\n=== Operation Complete ===');
                rl.close();
            });

        } catch (err) {
            console.error('[ERROR] File operation failed:', err.message);
            rl.close();
        }
    });
});
