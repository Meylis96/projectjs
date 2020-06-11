// DOM Document Object Model

"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.querySelectorAll('.circle'),
      heart = document.querySelectorAll('.hearts'),
      oneHeart = document.querySelector('.hearts'),
      wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
box.style.cssText = 'background-color: purple; width: 500px; height: 250px'; 

btns[1].style.borderRadius = '100%';

// for (let i = 0; i < heart.length; i++){
//     heart[i].style.backgroundColor = 'yellow';
// }

heart.forEach(item => {
    item.style.backgroundColor = 'yellow';
});

const div = document.createElement('div');
// const text = document.createTextNode('I was there'); rarely used

div.classList.add('black');

wrapper.append(div); //use this instead of appendChild because it is new method
// wrapper.appendChild(div);

// wrapper.insertBefore(div, heart[0]);
// wrapper.removeChild(heart[1]);

// wrapper.prepend(div); to set at the beginning
// heart[0].before(div) to set before specific element
// heart[0].after(div) to set after specific element

// circles[0].remove();
// heart[0].replaceWith(circles[0]);

// wrapper.replaceChild(circles[0], heart[0]);

wrapper.innerHTML = "<h1>Hey</h1>";

// wrapper.textContent = 'Hello there';

div.insertAdjacentHTML("beforebegin", "<h2>Meylis</h2>");