let amIGood = true;

let iCanHasGift = new Promise(
    function (resolve, reject){
        if (amIGood){
            let gift = {
                brand: 'HasMattelBro',
                item: 'Turbo-Man Action Figure'
            };
            resolve(gift);
        } else {
            let naughty = 'You\'ve made Santa\'s naughty list; enjoy your coal!'
            reject(naughty);
        }
    }
)

let checkTwice = function() {
    iCanHasGift
        .then(function(fulfilled){
            let play = 5;
        })
        .then(function(number){
            console.log(number);
        })
        .catch(function(error){
            console.log(error);
        });
}

checkTwice();


//the below code shows that a .then method actually does read the resolve or reject of a promise.  .then uses its two callback functions to perform on promises success (the 1st function) or promise failure (the 2nd function)
let testConditional = false;

let testPromise = new Promise(
    function(resolve, reject){
        if (testConditional){
            resolve(5)
        } else {
            reject(0);
        }
    }
)

testPromise.then(
    function(res) {
        console.log(res);
    },
    function(rej) {
        console.log(rej);
    }
)

//note that, according to the mdn docs, .catch is actually just internally doing the following: .then(undefined, onRejected)