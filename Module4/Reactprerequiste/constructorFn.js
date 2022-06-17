function car(Name,Model,Color){
    this.name = Name;
    this.Model = Model;
    this.Color = Color;

    this.test = function(){
        console.log(` I am driving  ${this.model}`);
    }
}

let car1 = new car('BMW','X6','White');
console.log(car1);
car1.test();

let car2 = new car('Mercedes','s class', 'Red');
console.log(car2);