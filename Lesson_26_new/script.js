// Dynamic type
"use strict";

// To string
//1) very old 
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2) Concat
console.log(typeof(5 + ''));

const num = 5;

console.log("https://www.vk.com/catalog/" + num);

const fontSize = 26 + 'px';
console.log(fontSize);


// To number
// 1) very very old
console.log(typeof(Number('4')));

// 2) Unar plus
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt("15px", 10)));


let answer = +prompt("Hello", "");


// To boolean

//0, '', null, undefined, NaN; Always FALSE
//1) Native
let switcher = null;

if (switcher){
    console.log('Working...');
}

switcher = 1;

if (switcher){
    console.log('Working...');
}

// 2) Almost never used
console.log(typeof(Boolean('4')));

//3)
console.log(typeof(!!"4444"));