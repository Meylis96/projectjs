window.addEventListener('DOMContentLoaded', function(){  //To load structure of web site
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(e) {
        let target = e.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer

    let deadline = "2019-04-20";


    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()), // parse for date with m/s
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000 * 60 * 60)));
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            // Add '0'
            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else {
                    return num;
                }
            }
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                // To set '0' if date is passed
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            }
        }

    }

    setClock('timer', deadline);


    //Modal

    let btnDescr = document.querySelectorAll('.description-btn'),
        more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');


    btnDescr.forEach(function(tab){
        tab.addEventListener('click', function(event) {
            let target = event.target;
            if(target && target.classList.contains('description-btn')) {
                if (target == tab) {
                    overlay.style.display = 'block';
                    this.classList.add('more-plash');
                    document.body.style.overflow = '';
                }
            }
        });
    });  //Homework. For more tabs use querySelectorAll and dynction forEach()

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-plash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        more.classList.remove('more-plash');
        document.body.style.overflow = '';
    });

    // ES6 Standarts homework

    class Options {
        constructor(height, width, bg, fontSize, textAlign){
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let div = document.createElement('div');
        document.body.appendChild(div); // To push to the HTML
        div.innerHTML = '<h1>Homework</h1>'; //To create any text in this

        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`; //Create parametr with styles
		div.style.cssText = param;
    }
    }

    const obj = new Options(300, 350, "red", 14, "center");
    obj.createDiv();

    //Form

    let message = {
        loading: 'Loading...',
        success: 'Thank you! We will contact with you!',
        failure: 'Something is wrong...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if(request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status === 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });


        for(let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });

    
        // Homework
        let newMessage = {
            loading: 'Loading...',
            success: 'Thank you! We will contact with you!',
            failure: 'Something is wrong...'
        };
        let contactForm = document.querySelector('#form'),
            contactInput = contactForm.getElementsByTagName('input'),
            newStatusMessage = document.createElement('div');
            newStatusMessage.classList.add('status');

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            contactForm.appendChild(newStatusMessage);
        
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');


            let formData = new FormData(contactForm);

            let object = {};
            formData.forEach(function(value, key) {
                object[key] = value;
            });

            let json = JSON.stringify(object);
            request.send(json);

            request.addEventListener('readystatechange', function() {
                if(request.readyState < 4) {
                    newStatusMessage.innerHTML = newMessage.loading;
                } else if (request.readyState === 4 && request.status === 200) {
                    newStatusMessage.innerHTML = newMessage.success;
                } else {
                    newStatusMessage.innerHTML = newMessage.failure;
                }
            });

            for(let i = 0; i < contactInput.length; i++) {
                contactInput[i].value = '';
            }
    });
});


