// Conctructor function no need for return
//ES5 standarts
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log('Hello! ' + this.name);
//     }
// }

// User.prototype.exit = function (name) {
//     console.log('User ' + this.name + ' gone');
// }

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);
// ivan.exit();


//ES6 standarts

// class User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello() {
//         console.log(`Hello! ${this.name}`)
//     }
//     exit(){
//         console.log(`User ${this.name} left`)
//     }
// }

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);
// ivan.hello();
// alex.hello();

// 'use strict';
// function showThis(){
//     console.log(this);
// }
// showThis();


// 'use strict';
// function showThis(a, b){
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);
// showThis(5, 5);

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function(){
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();


// let user = {
//     name: 'John'
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

console.log(sayName.call(user, 'Smith'));
console.log(sayName.apply(user, ['Snow']));


// function count(number) {
//     return this * number;
// }

// let double = count.bind(2)
// console.log(double(3));
// console.log(double(10));


// let btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//     console.log(this);
//     this.style.backgroundColor = 'red';
//     function showThis() {
//         console.log(this);
//     }
//     showThis();
// })

// 1) call function - window/undefined
// 2) Method object - this = object
// 3) Constructor (new) - this = new created object
// 4) Indication the cotext - call, aplly, bind