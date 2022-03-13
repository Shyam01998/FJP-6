//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let fs = require("fs");
let path = require("path");

if (!fs.existsSync("newFolder")) {
    fs.mkdirSync("newFolder");
}

// create a file 
let filePath = path.join(__dirname,"file1.txt");
console.log(filePath);

//C-Create
//It creat a file if it does not exists ,else it  override.
fs.writeFileSync(filePath, "Hi this is new file.");

//copy a file 
let source = path.join(__dirname, "file1.txt");
let destination = path.join(__dirname, "newFolder", "file1.txt");
console.log(source);
console.log(destination);

fs.copyFileSync(source, destination);

//D-delete 
fs.unlinkSync(filePath);