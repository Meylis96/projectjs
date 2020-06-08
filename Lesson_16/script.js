//Functions

"use strict";

let num = 20; // it is okay to write like this and to change it inside of function
function showFirstMessage(text) {
    console.log(text);
    num = 2;
}

showFirstMessage('Hello there');
console.log(num);
console.log(calc(4, 6));
function calc(a, b) {
    return (a + b);
}
 //Function declaration when you can call function before it was written


function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

//Function expression for them you need to put ; at the end. You can call after only function was written
const logger = function() {
    console.log("Hello");
};

logger();

// Arrow function
const calculator = (a, b) => a + b;