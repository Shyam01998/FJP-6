"C: \Users\sai\OneDrive\Desktop\FJP - 6\Module2\node js\path.js"
let path = require("path");
//console.log(path);

// let extensionName = path.extname("C: \Users\sai\OneDrive\Desktop\FJP - 6\Module2\node js\path.js"); 
// console.log(extensionName);

// let basename = path.basename("C: \Users\sai\OneDrive\Desktop\FJP - 6\Module2\node js\path.js");
// console.log(basename);

// console.log(__dirname);

// console.log(__filename);

let dirPath = __dirname;
console.log(dirPath);

let newFilePath = path.join(dirPath,'test.js');
console.log(newFilePath);