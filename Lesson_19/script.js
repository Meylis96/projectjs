"use strict";
// Callback function
function first() {
    // Do something
    setInterval(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`I am learning: ${lang}`);
    callback();
}

function done() {
    console.log('I have done this lesson');
}

learnJS('JavaScript', done);