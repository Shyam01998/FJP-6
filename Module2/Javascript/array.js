//empty array
let arr = [];
console.log(arr);

//array with element
let elearr = [1, 2, 3, "Hello I am string", false, 'c', 3.5];
console.log(elearr);

console.log("Element at 4th index: " +elearr[4]);

console.log("Element at 0th index:"+elearr[0]);

//Change array element
elearr[3] = "Nothing";
console.log(elearr);

//Array method
//1.Push
console.log("array before push:" +elearr);
elearr.push("new item");
console.log("array after push:" +elearr);

//2.POP
console.log("array before pop:" + elearr);
elearr.pop();
console.log("array after pop:" + elearr);

//3.shift
console.log("array before shift:" + elearr);
elearr.shift();
console.log("array after shift:" + elearr);

//4.unshift
console.log("array before unshift:" + elearr);
elearr.unshift("5");
console.log("array after unshift:" + elearr);

//5.length
let len = elearr.length;
console.log(len);