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

/*
// if(2*4 == 7) {
//     console.log('Right!')
// } else {
//     alert('Wrong!')
// }

// let num = 50;
let num = 50;
if(num < 49) {
    console.log('Wrong!')
} else if (num > 100) {
    console.log('Too much!')
} else {
    console.log('Right!')
};

(num == 50) ? console.log('Right!') : console.log('Wrong!'); //The same as at top


switch(num) {
    case num < 49:
        console.log('Wrong!');
        break;
    case num > 100:
        console.log('Too much!');
        break;
    case num > 80:
        console.log('Still too much!');
        break;
    case 50:     // use only 50 insted of num == 50
        console.log('Right!');
        break;
    default:
        console.log('Something wrong!');
        break;
}; // Easy way of using if(){}
*/

/*
let num = 50;

while (num < 55) {
    console.log(num);
    num++;
};

do{
    console.log(num);
    num++;
}
while(num < 55); // To do something and check with while()

// Most usable 95%
for(let i = 1; i < 8; i++) {
    if(i == 6) {
        // break;
        continue;
    }
    console.log(i)
};
*/


// Function


// let num = 20;

// function showFirstMessage(text) {
//     alert(text);
//     let num = 10;
//     console.log(num);
// };

// showFirstMessage('Hello World!');
// console.log(num);


// let calc = function (a, b) {
//     return (a + b);
// };

let calc = (a, b) => a+b // The same as at top
console.log(calc(3, 4));
console.log(calc(4, 4));
console.log(calc(5, 4));



function retVar() {
    let num = 50;
    return num;
};

let anotherNum = retVar();
console.log(anotherNum);

let str = 'test';
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = '12.2px';
// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));


/*
// Call-back functions

function first() {
    setTimeout(function(){
        console.log(1)
    }, 500);
}

function second() {
    console.log(2)
}

first();
second();

function learnJS(lang, callback) {
    console.log('I learn ' + lang);
    callback();
}

function done() {
    console.log("I've done the 3rd lesson!")
}

learnJS('Java Script', done) // No need for done()
*/


//      Objects

// let obj = new Object() Don't use anymore

let options = {
    width: 1024,
    height: 1024,
    name: 'test'
};
console.log(options.name);
options.bool = false; // To add new object to element

options.colors = {
    border: 'black',
    bg: 'red'
};      // To add new object with objects

delete options.bool; //To delete object

console.log(options);

for (let key in options) {
    console.log('Property ' + key + ' has ' + options[key]); // To show width(property) with its defenition
}

console.log(Object.keys(options).length); // To show amount of objects in options


// Массивы

// let array = ['first', 2, 3, 'fourth', 5];
// // array[99] = 99;
// // console.log(array.length);

// /*
// array.pop(); // pop() to delete the last massive
// array.push('5'); // push() to add
// array.shift(); //shift() to delete the first
// array.unshift('1'); //unshift() to add the first
// */

// // for(let i = 0; i < array.length; i++) {
// //     console.log(array[i]);
// // }

// array.forEach(function(item, i, mass){
//     console.log(i + ' ' + item + '(massive: ' + mass + ')'); //calback function
// });

// console.log(array);

// // for of similar to for in. Don't use in objects
// let mass = [1, 3, 4, 6, 7];

// for(let key of mass) {
//     console.log(key);
// } // for in gives only keys

// Using split()
// let ans = prompt('', '');
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// Using join() to write massives in one line
// let array = ['dgfb', 'hgrdg', 'fdh', 'dhre'];
//     i = array.join(', ');
// console.log(i);

//Using sort() to sort in alphabet only strings not numbers
// let array = ['dgfb', 'hgrdg', 'fdh', 'dhre'];
//     i = array.sort();
// console.log(array);

/*
// Using function compareNum() to sort numbers
let array = [1, 15, 4];
    i = array.sort(compareNum);

function compareNum(a, b) {
    return a-b;
}
console.log(array);

let soldier = {
    health: 400,
    armour: 100
};

let john = {
    healt: 100
};

john.__proto__ = soldier;
console.log(john);
console.log(john.armour);
*/


// 3 4 5;
// 'string', "string", `string`;
// true / false;
// null; //It doesn't exist at all
// undefined;

// const object = {
//     name: "Alex"
// };

// const array = [1, 2, 3, 4];

// - to String

// 1)
console.log(typeof(String(4)));

// 2)
console.log("ww" + 5);
console.log("https://vk.com/catalog/" + 5);

// - to Number

// 1)
console.log(typeof(Number('5')));

// 2)
console.log(typeof(5 + +'5'));

// 3)
console.log(typeof(parseInt('15px', 10)));

let answer = +prompt("Hello!", ''); //+ before is to get number

0, '', null, undefined, NaN //They are always FALSE 

// 1)
let switcher = null;

if (switcher) {
    console.log("Working...")
};

switcher = 1;

if (switcher) {
    console.log("Working...")
};

// 2)
console.log(typeof(Boolean('5')));

// 3)
console.log(typeof(!!'5'));

//Homework
let x = 5;
console.log(x++); //6 - 5 x++ postfix

console.log([] + false - null + true); //false - NaN [] == '' empty string

let y = 1;
let q = y = 2;
console.log(q); // 1 - 2  read from right to left

console.log([] + 1 + 2); //3 - 12 in string 

console.log("1"[0]); //10 - 1

console.log(2 && 1 && null && 0 && undefined ); //undefined - null && looks for first false meaning

console.log(!!( a && b ) && (a && b)); //No - Yes !! boolean
console.log( null || 2 && 3 || 4 ); //undefined - 3 || looks for first true meaning

a = [1, 2, 3]; b = [1, 2, 3];  a == b // Yes - No different massives with its defenition


console.log( +"Infinity" ); // NaN - Infinity

console.log("Ёжик" > "яблоко") //No - 
console.log( 0 || "" || 2 || undefined || true || falsе ); // false - 2


