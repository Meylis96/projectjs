"use strict";

// new RegExp('pattern', 'flags');// don't use anymore
// /pattern/f

// const ans = prompt('Write numbers');

// const reg = /\d/g;
// // flags = i, g, m
// console.log(ans.match(reg));

const str = 'My name is R2D2';

console.log(str.match(/\D/ig));


// Classses
// \d - to find numbers
// \w - to find all letters
// \s - to find all spaces
// \D - not numbers
// \W - not letters

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*"));

// console.log('12-34-56'.replace(/-/g, ':'));