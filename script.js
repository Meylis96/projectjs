'use strict'; //For ES6 standarts


/*
var leftBorderWidth = 1; //console.log() - use anywhere

let second = 2; //console.log() - use after and inside of {}

const pi = 3.14; //unchangeble as let
*/




var number = 5;
var string = 'Meylis';
var sym = Symbol(); //Use very rarely
var boolean = true;
null;
undefined;
var obj = {};

// console.log(string + ' ' + 'Muhamedov')

let person = {
    name: 'John',
    age: 25,
    isMaried: true
};
console.log(person['isMaried']);  //[''] after person use rarely


let arr = ['plum.png', 'orange.jpg', 'apple.png'];
console.log(arr[0]) //[] to get element starting with 0

// alert('Hello World!');


// let answer = confirm('Are you here?');
// console.log(answer)

// let answer = prompt('Are you more than +18', 'Yes'); // tap , and then '' for IE

// console.log(typeof(null));

// console.log('arr' + '-object');
// console.log(4 + +'-object'); // + + for making it as number



let incr = 10,
    decr = 10;


// console.log(++incr); //prefix form
// console.log(--decr); //prefix form

console.log(incr++); //postfix form
console.log(decr--); //postfix form

console.log(5 % 2);
console.log('2' == 2); // Даст true потому что == сравнивает по значению
console.log('2' === 2); // Даст False потому что === по типу данных

let isChecked = false,
    isClose = false;

console.log(isChecked || !isClose); // && will give True if both of true || will give False if both of them false