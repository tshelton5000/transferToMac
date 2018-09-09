//the below example highlights the use of a callback function inside the forEach method
let friends = ['Mike', 'Stacy', 'Andy', 'Rick']

friends.forEach(function(eachName, index){
    console.log(index + 1 + '. ' + eachName)
})

//using a named function as a callback below

//global variable
let allUserData = [];

//generic logStuff function that prints to console
function logStuff(userData){
    if (typeof userData === 'string'){
        console.log(userData);
    } else if (typeof userData ==='object'){
        for (let item in userData){
            console.log(item + ': ' + userData[item]);
        }
    }
}

//the below is me creating a new function to test out default values for parameters
function fartStuff(userData){
    if (typeof userData === 'object'){
        for (let item in userData){
            console.log(item + ': ' + userData[item])
        }
    }
}

//a function that accepts two parameters, one a callback function
function getInput(options = {name: 'Rich', speciality: 'JavaScript'}, callback = logStuff){
    allUserData.push(options);
    callback(options);
}

//when we call the getInput function, we pass logStuff as an argument
//so logStuff will be the function that will be called back (or executed)
//inside the getInput function
getInput({name: 'Ricky', speciality: 'humor?'}, fartStuff);
//name: Rich
//speciality: JavaScript

//passing parameters to callback functions
let allUserData = [];
let generalLastName = 'Clinton';

//generic logStuff function that prints to console
function logStuff(faff, userData){
    console.log(faff);
    if (typeof userData === 'string'){
        console.log(userData);
    } else if (typeof userData ==='object'){
        for (let item in userData){
            console.log(item + ': ' + userData[item]);
        }
    }
}

//a function that accepts two parameters, one a callback function
function getInput(options, callback){
    allUserData.push(options);

    if (typeof callback === 'function'){
        callback(generalLastName, options);
    }
}

//when we call the getInput function, we pass logStuff as an argument
//so logStuff will be the function that will be called back (or executed)
//inside the getInput function
getInput({name: 'Ricky', speciality: 'humor?'}, logStuff);



//problems arise when using 'this' with callback functions

//define an object with some properties and a method
//we will later pass the method as a callback function to another function
let clientData = {
    id: 094545,
    fullName: 'Not Set',
    //setUserName is a method on the clientData object
    setUserName: function(firstName, lastName){
        //this refers to the fullName property in this object
        this.fullName = firstName + ' ' + lastName;
    }
}

function getUserInput(firstName, lastName, callback, callbackObj){
    //do other stuff to validate firstName/lastName here

    //now save the names
    callback(firstName, lastName);
    callback.call(callbackObj, firstName, lastName)
}

getUserInput('Barack', 'Obama', clientData.setUserName, clientData);

console.log(clientData.fullName); //Not Set

console.log(global.fullName);

//multiple callback functions are allowed--example below

//first, setup the generic poem creator function; it will be the callback function in the getUserInput function below
function genericPoemMaker(name, gender){
    console.log(name + ' is finer than fine wine.');
    console.log('Altruistic and noble for the modern time.');
    console.log('Always admirably adorned with the latest style.');
    console.log('A ' + gender + ' of unfortunate tragedies who still manages a perpetual smile');
}

//the callback, which is the last item in the parameter, will be our genericPoemMaker function we defined above
function getUserInput(firstName, lastName, gender, callback){
    let fullName = firstName + ' ' + lastName;

    //make sure the callback is a function
    if (typeof callback === 'function'){
        //execute the callback and pass the parameters to it
        callback(fullName, gender);
    }
}

getUserInput('Michael', 'Fassbender', 'Man', genericPoemMaker);
//output
/* Michael Fassbender is finer than fine wine.
Altruistic and noble for the modern time.
Always admirably adorned with the latest style.
A Man of unfortunate tragedies who still manages a perpetual smile.
*/
function greetUser(customerName, sex){
    let salutation = sex && sex === 'Man' ? 'Mr.' : 'Ms.';
    console.log('Hello, ' + salutation + ' ' + customerName);
}

function getUserInput(firstName, lastName, gender, callback){
    let fullName = firstName + ' ' + lastName;

    //make sure the callback is a function
    if (typeof callback === 'function'){
        //execute the callback and pass the parameters to it
        callback(fullName, gender);
    }
}

//pass the greetUser function as a callback to getUserInput
getUserInput('Bill', 'Gates', 'Man', greetUser);

//output: Hello, Mr. Bill Gates