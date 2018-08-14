// console.log('Classes file');
class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User";
    }
    //Method 1
    greet(){
        console.log('Welcome back, ' + this.name);
    }
    //Method 2
    status(){
        console.log('Current status: ' + this.type);
    }
}

//instance of the class/new object
var anonDude = new User('Anonymous dude');

//we can now use the instance and the . operator to access the 2 methods
anonDude.greet();
anonDude.status();
// console.log(anonDude.name);

//another instance o the class
var anonLady = new User('Anonymous lady');
anonLady.greet();
anonLady.status();

//another instance of the class
var jeff = new User('Jeff');
jeff.greet();
jeff.status();

let tyler = new User('tyler');
let tom = new User('tom');