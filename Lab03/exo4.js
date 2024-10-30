var f_sys = require('fs');

const readFile = require('./readFile');

function writeInFile(file, content) {
    f_sys.writeFileSync(file, content);
    readFile(file);
}

// The process.argv property returns an array containing the command-line arguments passed when
//  the Node.js process was launched

content = process.argv[3];
file = process.argv[2]
writeInFile(file, content);
