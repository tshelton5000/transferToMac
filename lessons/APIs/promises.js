let promise = new Promise(function(resolve, reject){
    setTimeout(function() {
        if (true) {
            resolve('success!');
        } else {
            reject('failure :(');
        }
    }, 3000);
})

//show them how .then can process the resolution or rejection of a promise, then show them how to chain promises together
promise
    .then(resolve => {
        console.log(resolve);
    })

//this code can be used to introduct chaining of .thens, along with .catching errors
promise
    .then(resolve => {
        return resolve + ' we are returning from our first .then';
    })
    .then(success => {
        console.log(success);
    })
    .catch (err => {
        console.log(err);
    })

console.log('this code is after our promise & .then chain!')