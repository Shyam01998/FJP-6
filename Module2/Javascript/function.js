//declaration of function without parameter.
function sayhello(){
    console.log("Hello to function ");
}
sayhello();

//declaration of function with parameter/

function sum(n1,n2){
    let addition = n1 + n2;
    console.log("Addition of given number is "+addition);
}
sum(2,3);

//Function with return type.
function multiple(n1,n2){
    return(n1*n2);
}
let ans = multiple(3,5);
console.log(ans);

//function are first class citizen in js //imp
let a = function sub(n1,n2){
    return(n1 - n2);
}
console.log(a(5,3));

//IIFE -> Immediate invoke function expression
//IIFE without para
(function(){
    console.log("Hello IIFE");
})();

//IIFE with para
(function(n1,n2){
    console.log(n1/n2);
})(10,5);




