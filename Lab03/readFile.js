
const file_system = require('fs');
function readFile(file_path) {
    const content = file_system.readFileSync(file_path, 'utf8');
    console.log(content);

}

// file_path = 'f.txt';
file_path = process.argv[2];

readFile(file_path);

module.exports = readFile;
