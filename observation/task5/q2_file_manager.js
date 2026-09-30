const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Enter filename: ', (file) => {
    rl.question('Enter content: ', (content) => {
        // 1. Create and Write File
        fs.writeFileSync(file, content);
        console.log('--- Initial Content ---');
        console.log(fs.readFileSync(file, 'utf8'));

        // 2. Append Content
        rl.question('Enter content to append: ', (extra) => {
            fs.appendFileSync(file, '\n' + extra);
            console.log('--- Final Content ---');
            console.log(fs.readFileSync(file, 'utf8'));
            rl.close();
        });
    });
});
