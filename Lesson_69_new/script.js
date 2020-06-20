"use strict";

class User{
    constructor(name, age) {
        this.name = name;
        this._age = age;  //incapsulation
    }

    #surname = 'Petrychenko';

    say(){
        console.log(`User name: ${this.name} ${this.#surname}, age ${this._age}`);
    }

    get surname(){
        return this.#surname;
    }

    set surname(surname) {
        this.#surname = surname;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if(typeof age === 'number' && age < 110 && age > 0) {
            this._age = age;
        } else {
            console.log('Error');
        }
    }
}

const ivan = new User('Ivan', 27);
ivan.surname = 'Nakimov';
console.log(ivan.surname);
console.log(ivan._age);
ivan._age = 99;
console.log(ivan._age);
ivan.say();