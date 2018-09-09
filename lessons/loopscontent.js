/**************************
LOOPS
3-loops
  01-forLoops.js, 02-forInLoops.js, 03-forOfLoops.js
**************************/

/**************************
FOR LOOPS
**************************/
/*
Loops offer a quick and easy way to do something repeatedly
There are many different kinds of loops but they all do roughly the same thing:
  For statement
  Do while statement
  While statement
  Labeled statement
  Break statement
  Continue statement
  For in statement
  For of statement
*/

for (var i = 0; i < 10; i++) {
	console.log(i); // 0 1 2 3 4 5 6 7 8 9
};
// NOTE: There is a danger of infinite loops => explain

//Challenge: using a for loop, count to 20, by 2's
for (let i = 0; i <= 20; i += 2) {
  console.log(i) // 0 2 4 6 8 10 12 14 16 18 20
}

//Challenge: using a for loop, count from 10 to 0, going down by 1's
for (i = 10; i >= 0; i--) {
  console.log(i); // 10 9 8 7 6 5 4 3 2 1 0
}

//Challenge: using a for loop, count from 0, going down by 2's to -24
for (i = 0; i >= -25; i -= 2) {
  console.log(i); // 0 -2 -4 -6 -8 -10 -12 -14 -16 -18 -20 -22 -24
}

// Challenge: using a for loop, go through a name and display each letter individually
var name = "Kenn";

for (var i = 0; i < name.length; i++) {
	console.log(name[i]); // K e n n
}

/*
Challenge: 
Make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)
*/
var sum = 0;

for (var i = 1; i <= 50; i++) {
  sum += i;
}

console.log(sum) //1275

/**************************
FOR IN LOOPS
**************************/
/*
Great for iterating over values in an object
for in loops work when the properties are 'enumerable'
*/

var student = { name:"Peter", awesome: true, degree: "JavaScript", week: 1 };
for (item in student) {
  console.log(item); // name awesome degree week
  console.log(student[item]); // Peter true JavaScript 1
}

var catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
for (cat in catArray){
  console.log(cat);
}

/*
Challenge:
Write a for in loop that capitalizes the first letter of a student's name
*/

var studentName = 'pAul';
var capName;
for (var n in studentName) {
  if (n == 0) {
    capName = studentName[n].toUpperCase();
  } else {
    capName += studentName[n].toLowerCase();
  }
}
console.log(capName); // Paul

/**************************
FOR OF LOOPS
**************************/
/*
EXPLAIN difference between for in and for of loops
for of loops work when the collections of objects are 'iterable'
*/

//the below doesn't work--object properties are not 'iterable'
var student = { name:"Peter", awesome: true, degree: "JavaScript", week: 1 };
for (item of student) {
  console.log(item); // name awesome degree week
}

var catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat of catArray){
  console.log(cat, 'says meow'); // tabby, brittish shorthair, burmese, maine coon, rag doll ...says meow
}


