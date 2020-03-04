'use strick';

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

let person = {
    name: "John",
    age: 23,
    isMarried: false
};
console.log(person.name);
console.log(person.age);

let arr = ['plum.png', 'orange.jpg', 'apple.png'];

console.log(arr[0]);

// alert("Hello World!");

// let answer = confirm("Are you here?")

// console.log(answer);


// let answer = +prompt("Are you 18?", "Yes");

// console.log(typeof(answer));

// console.log("arr" + " - object");
// console.log(4 + +" - object");

let incr = 10,
    decr = 10;

console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log("2" == 2);

let isChecked = false,
    isClosed = false;

console.log(isChecked || !isClosed);

