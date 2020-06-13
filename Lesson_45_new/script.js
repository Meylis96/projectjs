"use strict";

// const num = new Function(3);
// console.log(num); VERY VERY OLD

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`User ${this.name} left`);
};

const meylis = new User('Meylis', 24);
const alex = new User('Alex', 20);

meylis.exit();

meylis.hello();
alex.hello();

console.log(meylis);
console.log(alex);