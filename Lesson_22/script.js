"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; // we don't copy object we give a value of link

// copy.a = 10;
// console.log(copy);
// console.log(obj);

function copy(mainObj){
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers); // Clone of object

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(clone);
// console.log(add);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'adads';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blog = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blog, 'vk', 'facebook']; // expand video and blog element. expand развернуть  

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num); // to return elements from num as argument

//The same as above
const array = ["a", "b"];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log(newObj);