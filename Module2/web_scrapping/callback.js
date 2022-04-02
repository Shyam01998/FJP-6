//callback - we can pass a function as  a parameter of another function is known as callback.it will go to the node api and execute when it completed it wait in the waiting queue when the call stack work is completed it execute the task. it can run the task in side by side and call after the task is completed.
        

const fs = require('fs');

console.log("Before ");

 fs.readFile("file.txt" ,cb);
 
 function cb(error , data){
     if(error)
     console.log(error);
     else {
         console.log(data +"");
     }
 }


console.log("After ");