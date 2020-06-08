"use strict";

const arr = [1, 23, 13, 44, 5, 6];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) { // to compare numbers
    return a - b;
}
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);


// arr.pop(); // delete the last element in array
// arr.push(10); // add 10 to the end
// // arr.shift(0); // delete the first element in array
// console.log(arr);


// it is the simple cycle
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]); //to call the specific element
}

//It is method. They are both the same for of only for arrays. It has break and continue
for (let value of arr) {
    console.log(value);
}

// The same but with callback function. The most usable
arr.forEach(function(item, numberOrder, arr) {
    console.log(`${numberOrder}: ${item} inside of array ${arr}`);
});


const str = prompt("" , "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));