// Incapsulation
// function User(name, age){
//     this.name = name;
//     // this.age = age;
//     let userAge = age;

//     this.say = function(){
//         console.log(`User name ${this.name}, age: ${userAge}`);
//     };

//     this.getAge = function(){
//         return userAge;
//     };

//     this.setAge = function(age){
//         if (typeof age === 'number' && age > 0 && age < 100) {
//             userAge = age;
//         } else {
//             console.log("Undefined values")
//         }
//     }
// }

// let Ivan = new User ('Ivan', 25);

// console.log(Ivan.name);
// console.log(Ivan.userAge);
// console.log(Ivan.getAge());

// Ivan.setAge(30);
// console.log(Ivan.getAge());

// Ivan.say();

// Modules
// let app = {
//     data: 45
// };
// console.log(app);


// First method
let number = 1;
// (function(){}) function expression is anonymus
(function (){
    let number = 2;
    console.log(number);

    return console.log(number + 3);
}()); // () to call function

console.log(number);

// Second method
let user = (function(){
    let private = function(){
        console.log('I am Private');
    };

    return {
        sayHello : function(){
            console.log("Hello!");
        }
    }
}());
console.log(user);
console.log(user.sayHello());

// Thirf method

let user = (function(){
    let private = function(){
        console.log('I am Private');
    };

    let sayHello = function(){
        console.log("Hello!");
    };

    return {
        sayHello : sayHello
    }
        
        
    
}());
console.log(user);
console.log(user.sayHello());
