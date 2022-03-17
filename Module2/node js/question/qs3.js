//copy index.html file from module1 to a new folder inside module2 having name html.
let fs = require("fs");
let path = require("path");

let srcPath = path.join(__dirname ,".." , ".." ,".." ,"Module1" , "index.html");
console.log("source -->",srcPath);

let destPath = path.join(__dirname , "..","..","index.html");
console.log("destination-->" ,destPath);

fs.copyFileSync(srcPath , destPath)
