let fs = require("fs");
//console.log(fs);

let path = require("path");

let filePath = path.join(__dirname,"file.txt");
console.log(filePath);

//C-Create
//It creat a file if it does not exists ,else it  override.
fs.writeFileSync(filePath,"Again writing  on existing file.");

//R-read
console.log("Before update : ")
let content =fs.readFileSync(filePath,'utf-8');
console.log(content);

//U-update
fs.appendFileSync(filePath,"\n Newly added  content ");
console.log("After update : ");
console.log(fs.readFileSync(filePath,"utf-8"));

//D-delete
fs.unlinkSync(filePath);