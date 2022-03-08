//empty object
let obj = {};           // key - value, key is always a string
console.log(obj);

//Oject with 
let objDipu  = { 
    Name:"Dipu",
    Age : 23,
    PhoneNo: 9337757671,
    Lastname : "Sahoo"

};
console.log(objDipu);

//Object with different data  key value
let objShyam = {
    Name : "Shyam",
    Age :  23 ,
    Friend : ['Dipu', 'Dipa',"Hari","Rakesh"],
    Address  :{
        State : "Odisha",
        City  : "Dhenkanal"
    },
    Sayhi:function(){
        console.log("Hello shyam bhai ");
    },

    str :"Hello , Nice to meet you",
}
//Whole object
//console.log(objShyam);
//Name of objShyam
console.log(objShyam.Name);
//Age
console.log(objShyam.Age);
//friend
console.log(objShyam.Friend[0]);
//Address
console.log(objShyam.Address);
//city
console.log(objShyam.Address.City);
//sayhi
objShyam.Sayhi();
//string
console.log(objShyam.str)


console.log("Object before update :",objShyam);
//Add key to object
objShyam.Lname = "Sahoo";
console.log("Object After update :",objShyam);

//delete key from object
delete objShyam.str;
console.log(objShyam);

//update city
objShyam.Address.City = "Bhubneswar";
console.log(objShyam);

//Second method to access key
//console.log(objShyam.Name);
console.log(objShyam['Age']);
