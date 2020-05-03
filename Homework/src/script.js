window.addEventListener('DOMContentLoaded', function(){  //To load structure of web site
    'use strict';


    let calc = require('./parts/calculator.js'),
        form = require('./parts/forms.js'),
        slider = require('./parts/slider.js'),
        tabs = require('./parts/tabs.js'),
        timer = require('./parts/timer.js'),
        modal = require('./parts/modal.js');


    calc();
    form();
    slider();
    tabs();
    timer();
    modal();

    
});