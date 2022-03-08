//printing in js
console.log("Hello World");

//variable in js and data types
let num = 10; //Number
console.log(num);

let char = 'a'; //Character
console.log(char);

let string = 'I am a string.'; //String
console.log(string);

let bool = true; //boolean
console.log(bool);

//Loops
for(let i = 1 ; i <= 5 ; i++){
    console.log(i);
}

//Number is prime or not
let n = 13;
let count = 0;

for(let i = 2 ; i <= (n-1) ; i++){
    if(n % i == 0){
        count++;
        break;
    }

}

if(count == 0){
    console.log("prime");
}else{
    console.log("not prime");
}