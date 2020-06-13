'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b; // it looks for inside sum and if it doesn't find then looks for outside
//     }

//     console.log(sum());
// }
// showThis(4, 5);


// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();


// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let meylis = new User('Meylis', 24);


// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, "Smith"); // these two set up new context
// sayName.apply(user, ['Smith']); // difference

// function count(num) {
//     return this * num;
// }//this one sets up new function

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// 1) Simple funtion: this = window, but if "use strict" is set then = undefined
// 2) this inside of object will be itself of this object but if this is called inside function of method it will return ndefined or window
// 3) this inside of constructor and classes is a new sample of object
// 4) Mechanically binding this: call, appply, bind


const btn = document.querySelector('button');

btn.addEventListener('click', function() { // () => has no its this
    this.style.backgroundColor = 'red';
});

btn.addEventListener('click', (e) =>{ // we have to use event/e
    e.target.style.backgroundColor = 'red';
});


const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};

obj.sayNumber();

const double = a => a*2; //without return if it has one argument

console.log(double(4));