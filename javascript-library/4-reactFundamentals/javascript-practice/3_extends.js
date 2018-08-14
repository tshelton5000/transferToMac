class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User";
    }
    //Method 1
    greet() {
        console.log("Welcome back, " + this.name);
    }
    //Method 2
    status() {
        console.log("Current status: " + this.type);
    }
}

//Extends
class TrialUser extends User {
    trialEnding(){
        console.log('Your trial will be ending soon, ' + this.name + '. Would you like to join our program?');
    }
}

let anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();

//Instances of TrialUser class
let trialUser = new TrialUser("Paul");
trialUser.greet();
trialUser.status();
trialUser.trialEnding();

class BannedUser extends User {
    accountBanned(){
        console.log("Your trial has been banned, " + this.name + '.');
    }
}

let bannedPerson = new BannedUser('Tyler');
bannedPerson.accountBanned();