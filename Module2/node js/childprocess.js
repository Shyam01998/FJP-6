let cp = require('child_process');
//const { text } = require('stream/consumers');
//console.log(cp);

//open file with the help of this file
//cp.execFileSync("calc");
//cp.execSync("code");

let content = cp.execSync("node text.js");
//console.log("Output of text.js file :" + content);
console.log(""+content);

