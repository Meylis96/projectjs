// 'use strick';

// var number = 5;
// var string = "Hello!";
// var sym = Symbol();
// var boolean = true;
// null;
// undefined;
// var obj = {};

// let person = {
//     name: "John",
//     age: 23,
//     isMarried: false
// };
// console.log(person.name);
// console.log(person.age);

// let arr = ['plum.png', 'orange.jpg', 'apple.png'];

// console.log(arr[0]);

// // alert("Hello World!");

// // let answer = confirm("Are you here?")

// // console.log(answer);


// // let answer = +prompt("Are you 18?", "Yes");

// // console.log(typeof(answer));

// // console.log("arr" + " - object");
// // console.log(4 + +" - object");

// let incr = 10,
//     decr = 10;

// console.log(incr++);
// console.log(decr--);

// console.log(5%2);
// console.log("2" == 2);

// let isChecked = false,
//     isClosed = false;

// console.log(isChecked || !isClosed);


let money = +prompt("Ваш бюджет на месяц?", ""),
    date = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (let i = 0; i < 2; i++) {
    let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt ("Во сколько обойдется?", "");

    if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

        console.log ("done");

        appData.expenses[a] = b;
    } else {                            
        console.log ("bad result");
        i--;
    }
};

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");
//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {                            
//         console.log ("bad result");
//         i--;
//     }
//         i++;
// };

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//             b = prompt ("Во сколько обойдется?", "");
//         if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
    
//             console.log ("done");
    
//             appData.expenses[a] = b;
//         } else {                            
//             console.log ("bad result");
//             i--;
//         }
//             i++;
// }
// while (i <2);

appData.moneyPerDay = appData.budget / 30;

alert("Everyday budget: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Minimum level");
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Average level");
} else if(appData.moneyPerDay > 2000) {
    console.log("High level");
} else {
    console.log("Something wrong");
};