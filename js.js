// mobile devices
// touchstart  when you touch the element
// touchmove  when you touch the element and move it
// touchend when finger is out off touch
// touchenter when finger enters to the element
// touchleave when your finger leaves the element
// touchcancel when finger cancels the event

window.addEventListener('DOMContentLoaded', function(){
    let box = document.querySelector('.box');

    // box.addEventListener('touchstart', function(e){
    //     e.preventDefault();
    //     console.log("Red box: touchstart");
    //     console.log(e.target);
    //     console.log(e.touches[0].target);
    //     console.log(e.changedTouches);
    //     console.log(e.targetTouches);
    // });

    box.addEventListener('touchmove', function(e){
        e.preventDefault();
        console.log("Red box: " + e.touches[0].pageX);
    });

    // box.addEventListener('touchend', function(e){
    //     e.preventDefault();
    //     console.log("Red box: touchend");
    // });

    // Regular expressions

    // new RegExp('pattern', 'flags');
    // /pattern/

    // let ans = prompt('Write your name');

    // let reg = /n/gi;

    // // console.log(ans.search(reg));
    // console.log(reg.test(ans));

    // flags

    // i register flag (A, a)
    // g global
    // m 

    // \d \D   numbers-not numbers
    // \w \W   words-not words
    // \s \S   spaces-not spaces

    // let pass = prompt('Write your password');

    // console.log(pass.replace(/./g, "*"));
    // alert('12-34-56'.replace(/-/g, ":"));

    // let ans = prompt('Write numbers');

    // let reg = /\d/g;
    // console.log(ans.match(reg));

    let str = 'My name is/ R2D2';

    console.log(str.match(/ /i));
});
