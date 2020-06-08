"use strict";

const str = "test";
const arr = [1, 2, 3];
console.log(str[2]);
console.log(str.toUpperCase()); // returns new value doesn't change the previous


const fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); // starts from 5th position Method

const logg = "Hello world!";

console.log(logg.slice(6)); //Method

console.log(logg.substring(6, 11)); //Method

console.log(logg.substr(6, 5)); //Method


// Numbers
const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));