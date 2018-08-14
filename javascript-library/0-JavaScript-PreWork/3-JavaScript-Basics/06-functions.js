function hello(){
    console.log("Hello world!");
}

hello();

function pacersWon(){
    console.log("Pacers won!");
}

pacersWon();

function numberEntered(x){
    console.log("The number you entered was", x);
}

numberEntered(5);
numberEntered(4);
numberEntered(3);

function addAnyTwoNumbers (x, y){
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);

function stuff(a, x, y, z){
    let myInc = a*x;
    let myTaxes = myInc - y;
    let total = myTaxes + z;
    return total;
}

console.log(stuff (10000, 5, 50000, 0));