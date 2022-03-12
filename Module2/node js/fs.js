let fs = require("fs");
//console.log(fs);

let path = require("path");

/* create a file 
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

*/

/* create a directory */
if (!fs.existsSync("hamariDirectory")) {
    fs.mkdirSync("hamariDirectory");
}

//read a directory
let folderPath = __dirname;
let contentofFolder = fs.readdirSync(folderPath);
console.log(contentofFolder);

//delete a directory
fs.rmdirSync("hamariDirectory");

//copy a file 
let source = path.join(__dirname,"file.txt");
let destination = path.join(__dirname, "module" , "file.txt");
console.log(source);
console.log(destination);

 fs.copyFileSync(source,destination);



