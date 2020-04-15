let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue'; // To change style in elements
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';


/*
// for(let i=0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

heart.forEach(function(item, i, hearts){
    item.style.backgroundColor = 'blue';
}); // The same like at top
*/

//Creation of Element
let div = document.createElement('div'),
    text = document.createTextNode('Here was I');

div.classList.add('black'); //Adding class to element


// document.body.appendChild(div); // To add this div to the HTML
// wrapper.appendChild(div); // Adding to the end of HTML

div.innerHTML = 'Hello World!'; //To add text to the element or h1 tag <h1>'Hello World!'</h1>
div.textContent = 'Hello World!'; // Add only text

document.body.insertBefore(div, circle[0]); // Adding before specific element
document.body.removeChild(circle[1]); // To delete element
wrapper.removeChild(heart[1]); // To delete element inside of class

document.body.replaceChild(btn[1],circle[1]); // To replace


console.log(div);