"use strict";
// objects

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();

const {border, bg} = options.colors; // Destructing

console.log(border);

// console.log(Object.keys(options).length);

// delete options.name;

// console.log(options["colors"]["border"]);
// let counter = 0;
// for (let key in options) {
//     if(typeof(options[key]) === 'object'){
//         for (let i in options[key]){
//         console.log(`Property ${i} has value ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Property ${key} has value ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);

