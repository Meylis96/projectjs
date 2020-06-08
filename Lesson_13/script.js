"use strict";

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Are you joking?!');
}

const num = 50;

if(num < 49) {
    console.log('Error');
} else if(num > 100) {
    console.log('To0 much!');
} else {
    console.log('It is okay!!!');
}

(num === 50) ? console.log('Ok') : console.log('Error'); // Ternary operator
// 4 + 4 //binary argument
// 4+ //unary argument

switch(num) {
    case 49:
        console.log('Error');
        break;
    case 100:
        console.log('Error');
        break;
    case 50: 
        console.log('It is true');
        break;
    default:
        console.log('Not today')
        break;
}