// how we write in jquery
// $("#btn"); 
$(document).ready(function() { // inspite of DOMContentLoaded
    $('.list-item:first').hover(function(){
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', function(){ //on() exept addEventListener
        $('.image:even').fadeToggle('slow');
    });

    $('.list-item:eq(4)').on('click', function(){
        $('.image:odd').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            }, 3000
        );
    });
});  

// document.querySelectorAll('.list-item').forEach()
// .classList
// .addEventListener()
// $.ajax - fetch
// animate()

// For angular
// 1. Node.js -> npm
// 2. TypeScript
// 3. Webpack
// 4. MVC (modal view controler)
// 5. Angular

// For React JS
// 1. Node.js -> npm
// 2. Babel
// 3. JSX
// 4. React JS
// 5. Webpack

// For Vue JS
// 1. Node.js -> npm
// 2. Babel
// 3. Webpack
