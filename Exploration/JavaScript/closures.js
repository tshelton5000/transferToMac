//9-4-18

//basic example of a function inside another function
function showName (firstName, lastName){
    let nameIntro = 'Your name is ';
    //this inner function has access to the outer function's variables, including the parameter
    function makeFullName(){
        return nameIntro + firstName + ' ' + lastName;
    }

    return makeFullName();
}

console.log(showName('Michael', 'Jackson'));

//
function celebrityName (firstName) {
    let nameIntro = 'This celebrity is ';
    //this inner function has access to the outer function's variables, including the parameter
    function lastName(theLastName) {
        console.log('line a');
        return nameIntro + firstName + ' ' + theLastName;
    }
    console.log('line b')
    return lastName;
}

let mjName = celebrityName('Michael'); //at this point, the celebrityName outer function has returned

//the closure (lastName) is called here after the outer function has returned above
//yet, the closure still has access to the outer function's variables and parameter
console.log(mjName('Jackson'));

//the below example will help me to understand function returns and calls better
function outer(vara){
    function inner(varb){
        function innerMost(varc){
            console.log(vara, varb, varc)
        }
        return innerMost;
    }
    return inner;
}

let firstTestVar = outer('first');
let secondTestVar = firstTestVar('second');
let thirdTestVar = secondTestVar('third');

//the below code demonstrates that closures store references to the outer function's variables, not the actual value
function celebrityID() {
    let celebrityID = 999;
    //we are returning an object with some inner functions
    //all the inner functions have access to the outer function's variables
    return {
        getID: function() {
            //this inner funciton will return the updated celebrityID variable
            //it will return the current value of celebrityID, ever after the changetheID function changes it
            return celebrityID;
        },
        setID: function (theNewID) {
            //this inner function will change the outer function's variable anytime
            celebrityID = theNewID;
        }
    }
}

let mjID = celebrityID(); //at this point, the celebrityID outer function has returned
console.log(mjID.getID());  //999
mjID.setID(567); //Changes the outer function's variable
console.log(mjID.getID()); //567: It returns the updated celebrityID variable

//the below tests to see if i can create an example of closures demonstrating reference to outer variables without returning an object inside the outer function
function outer(){
    let testVar = 10;
    let b = function innerSet() {
        testVar = 5;
        return testVar;
    }
    return b;
}

let firstTestFunction = outer();
let secondTestFunction = firstTestFunction();
console.log(secondTestFunction);


//the below is random play related to understanding 'for-in' loops.  specifically, checking that not using the keyword 'let' in front of key makes the key default to a 'var'
let object = {
    keya: 'string',
    keyb: 57,
    keyc: undefined,
    keyd: ['a', 'b'],
    keye: 'this is clearly a string'
}

for (key in object){
    console.log(key);
}
console.log(typeof object[key]);

//the below example demonstrates a 'closure gone awry'
function celebrityIDCreator (theCelebrities) {
    let uniqueID = 100;
    for (let i = 0; i < theCelebrities.length; i++){
        theCelebrities[i]["id"] = function(){
            return uniqueID + i;
        }
    }
    return theCelebrities;
}

let actionCelebs = [{name: 'Stallone', id: 0}, {name: 'Cruise', id: 0}, {name: 'Willis', id: 0}];

let createIDForActionCelebs = celebrityIDCreator(actionCelebs);

let stalloneID = createIDForActionCelebs[0];
let cruiseID = createIDForActionCelebs[1];
let willisID = createIDForActionCelebs[2];
console.log(stalloneID.id());
console.log(cruiseID.id());
console.log(willisID.id());