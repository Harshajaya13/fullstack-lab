// Node.js File Management Application
const fs = require('fs');
const readline = require('readline');

// Interface for reading user input from CLI
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Node.js File System Management ===");

// Operation 1: Prompt for filename
rl.question('Enter filename (e.g. sample.txt): ', (file) => {
    
    // Operation 2: Prompt for initial content
    rl.question('Enter initial file content: ', (content) => {
        fs.writeFileSync(file, content, 'utf8');
        console.log('\n[Success] File created. Initial content:');
        console.log(fs.readFileSync(file, 'utf8'));

        // Operation 3: Append additional content
        rl.question('\nEnter additional content to append: ', (extra) => {
            fs.appendFileSync(file, '\n' + extra, 'utf8');
            
            // Operation 4: Read and display final content
            console.log('\n[Success] Final File Contents:');
            console.log(fs.readFileSync(file, 'utf8'));
            rl.close();
        });
    });
});
