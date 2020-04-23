// Promise
// let drink = 1;
// function shoot(arrow, headshot, fail) {
//     console.log('You made a shoot...');

//     setTimeout(function(){
//         Math.random() > .5 ? headshot({}) : fail("You missed");
//     },3000)
// };

// function win() {
//     console.log("You win!");
//     (drink == 3) ? buyBeer() : giveMoney();
// }

// function buyBeer(){
//     console.log("We bought a beer for you");
// }

// function giveMoney(){
//     console.log("We gave you money");
// }

// function loose() {
//     console.log("You loose!");
// }

// shoot({}, 
//         function(mark) {
//             console.log("You hit the target!");
//             win(mark, buyBeer, giveMoney);
//         },
//         function(miss){
//             console.error(miss);
//             loose();
//         }
//     )

// Creating a promise

let drink = 1;
function shoot(arrow) {
    console.log('You made a shoot...');
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            Math.random() > .5 ? resolve({}) : reject("You missed"); // don't forget to give resolve and reject as argument
        },3000);
    });
    return promise;
}

function win() {
    console.log("You win!");
    (drink == 3) ? buyBeer() : giveMoney();
}

function buyBeer(){
    console.log("We bought a beer for you");
}

function giveMoney(){
    console.log("We gave you money");
}

function loose() {
    console.log("You loose!");
}

shoot({})
    .then(mark => console.log("You hit the target")) //no need for ;
    .then(win)
    .catch(loose);