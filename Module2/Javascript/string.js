let str = "I am a String";
console.log(str);

//length of String
let len = str.length;
console.log(len);

//Slice Method - > extract part of a string
let sliceArr = str.slice(2,5);
console.log(sliceArr);

//replace method -> replace part with given word
let replaceStr = str.replace("am", "was");
console.log(replaceStr);

//Uppercase
let upperStr = str.toUpperCase();
console.log(upperStr);

//Lowercase
let lowerStr = str.toLowerCase();
console.log(lowerStr);

//Concat
let Fname = "Dipu";
let Lname = "Sahoo";
//let Fullname = Fname .concat( Lname);
let Fullname = Fname + Lname;
console.log(Fullname);

//split ->return arr
let splitted = str.split(" ");
console.log(splitted);



