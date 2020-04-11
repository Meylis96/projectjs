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
}