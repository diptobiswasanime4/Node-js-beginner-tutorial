const path = require("path");

console.log(path.sep);
// console.log(path);

// Funda to interact with file-system of any computer
const filePath = path.join("/content", "subfolder", "test.txt");

console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
