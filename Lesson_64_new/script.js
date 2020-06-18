"use strict";

// localStorage.setItem('number', 5);

// // localStorage.removeItem('number');
// localStorage.clear();

const checkBox = document.querySelector('#checkbox'),
      form = document.querySelectorAll('form'),
      change = document.querySelector('#color');

if(localStorage.getItem('isChecked')){
    checkBox.checked = true;
}

if(localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
} 

checkBox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if(localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = 'white';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const persone = {
    name: 'Alex',
    age: 25
};

const serializePersone = JSON.stringify(persone);
localStorage.setItem('alex', persone);

console.log(localStorage.getItem('alex'));