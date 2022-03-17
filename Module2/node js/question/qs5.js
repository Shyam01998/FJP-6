//move a file

let fs = require("fs");
let path = require("path");
 
let srcPath = path.join(__dirname , "abcd.txt");
// console.log(srcPath);

let destPath = path.join(__dirname, "newFolder","abcd.txt");
// console.log(destPath);
fs.copyFileSync(srcPath , destPath);

fs.unlinkSync(srcPath);