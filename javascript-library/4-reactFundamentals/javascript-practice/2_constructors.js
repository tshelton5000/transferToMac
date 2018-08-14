class User {
    constructor(first, last, e){
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

var userOne = new User("Paul", "O'Connor", "pocconor@elevenfifty.org");
console.log(userOne.first);
console.log(userOne.f);
console.log(userOne.l);
console.log(userOne);

class piece {
    constructor(color, type, position){
        this.color = color;
        this.type = type;
        this.position = position;
    }
}

let newPiece = new piece('black', 'pawn', 'c3');
console.log(newPiece.color);
console.log(newPiece.type);
console.log(newPiece.position);