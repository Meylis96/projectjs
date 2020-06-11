const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');  

// btn.onclick = function() { // Almost never used
//     alert('Click');
// };


let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if(i == 2) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});  // the 3rd argument is options of event listeners
});

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});

