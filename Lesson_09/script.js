console.log('arr' + " - object");
console.log(4 + " - object");
console.log(4 + +" - 5"); // unar plus

let incr = 10,
    decr = 10;

incr++; //increment // postfix
decr--; //decrement // postfix

++incr; //prefix
--decr; //prefix

console.log(incr);
console.log(decr);

console.log(5 % 2);

console.log(2*4 === '8'); // == true === false
console.log(2 + 2 * 2 === 8); // returns false

// && 'and' return true if all is true
// || 'or' return true if one of them is false

// const isChecked = true,
//       isClose = false;

// console.log(isChecked && isClose);

const isChecked = false,
      isClose = false;

console.log(isChecked || !isClose);