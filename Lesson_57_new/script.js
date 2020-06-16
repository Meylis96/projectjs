"use strict";

// filter - return new array

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter((name) => {
    return name.length < 5;
});

console.log(shortNames);

// map - return changed new array

const answers = ['IvaN', 'AnnA', 'HellO'];

const result = answers.map(item => item.toLocaleLowerCase());
console.log(result);


// every/some

const some = [4, 'qwq', 'wedsafs'];

console.log(some.some(item => typeof(item) === 'number'));

console.log(some.every(item => typeof(item) === 'number'));

// reduce

const arr = [4, 5, 1, 3, 2, 6];
                        // 0   4
                        // 4   5
                        // 9   1
                        // 10  3
                        // 13  2
                        // 15  6

const res = arr.reduce((sum, current) => sum + current, 3);
console.log(res);

const array = ['apple', 'pear', 'plum'];

const reslt = array.reduce((sum, current) => `${sum}, ${current}`);
console.log(reslt);


const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);