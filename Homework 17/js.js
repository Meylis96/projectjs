// $(document).ready(function(){ //1st step is to insert DOMContentLoaded
//     $('.list-item:eq(1)').on('click', function(){
//         $('.overlay').toggle('fast');
//     });
//     $('.main_btna').on('click', function(){
//         $('.overlay').toggle('fast');
//     });
//     $('.main_btn').on('click', function(){
//         $('.overlay').toggle('fast');
//     });
//     $('.main_btna').on('click', function(){
//         $('.modal').animate(
//             {
//                 opacity: 'toggle',
//                 height: 'toggle'
//             },1500
//         );
//     });
//     $('.main_btn').on('click', function(){
//         $('.modal').animate(
//             {
//                 opacity: 'toggle',
//                 height: 'toggle'
//             },1500
//         );
//     });
//     $('.list-item:eq(1)').on('click', function(){
//         $('.modal').animate(
//             {
//                 opacity: 'toggle',
//                 height: 'toggle'
//             },1500
//         );
// });

//  let btn = document.querySelector('.close');

//  btn.addEventListener('click', function(){
//     $('.overlay').fadeToggle('fast');
//     $('.modal').fadeToggle(1000);
//  });
// });

// or like this
$(document).ready(function() {

    $('.main_btna, .main_btn, a[href="#sheldure"]').click(function() {
        $('.overlay').fadeIn(1000);
        $('.modal').slideDown(1000);
    });

    $('.close').click(function() {
        $('.modal').slideUp(1000);
        $('.overlay').fadeOut(1000);
    });

});

