//write a func to add two number and print there sum.

// let regularFunction = function(a ,b){
//     console.log(a+b);
// }

// regularFunction(1,2);

// let add = (a,b)=>{
//     console.log(a+b);
// }

// add(3,5);

// let arrowFunction = ()=>{
//     console.log(this);
// }
// arrowFunction();

let obj = {
    name :"Shyam",
    age:23,
    showDetails:function(){
        console.log(this.name + " "+this.age);
    },
    showDetailsArrow: () => {
        console.log(this);
        console.log(this.name + " " + this.age);
    }
}
// obj.showDetails();
 obj.showDetailsArrow();