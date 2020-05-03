


// // ES6 Standarts homework

    // class Options {
    //     constructor(height, width, bg, fontSize, textAlign){
    //         this.height = height;
    //         this.width = width;
    //         this.bg = bg;
    //         this.fontSize = fontSize;
    //     this.textAlign = textAlign;
    // }
    // createDiv() {
    //     let div = document.createElement('div');
    //     document.body.appendChild(div); // To push to the HTML
    //     div.innerHTML = '<h1>Homework</h1>'; //To create any text in this

    //     let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`; //Create parametr with styles
	// 	div.style.cssText = param;
    // }
    // }

    // const obj = new Options(300, 350, "red", 14, "center");
    // obj.createDiv();

    //Form
    //Complicated without promise
    // let message = {
    //     loading: 'Loading...',
    //     success: 'Thank you! We will contact with you!',
    //     failure: 'Something is wrong...'
    // };

    // let form = document.querySelector('.main-form'),
    //     input = form.getElementsByTagName('input'),
    //     statusMessage = document.createElement('div');

    //     statusMessage.classList.add('status');
    
    // form.addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     form.appendChild(statusMessage);

    //     let request = new XMLHttpRequest();
    //     request.open('POST', 'server.php');
    //     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    //     let formData = new FormData(form);

    //     let obj = {};
    //     formData.forEach(function(value, key) {
    //         obj[key] = value;
    //     });
    //     let json = JSON.stringify(obj);

    //     request.send(json);

    //     request.addEventListener('readystatechange', function() {
    //         if(request.readyState < 4) {
    //             statusMessage.innerHTML = message.loading;
    //         } else if (request.readyState === 4 && request.status === 200) {
    //             statusMessage.innerHTML = message.success;
    //         } else {
    //             statusMessage.innerHTML = message.failure;
    //         }
    //     });


    //     for(let i = 0; i < input.length; i++) {
    //         input[i].value = '';
    //     }
    // });

    
    //     // Homework
    //     let newMessage = {
    //         loading: 'Loading...',
    //         success: 'Thank you! We will contact with you!',
    //         failure: 'Something is wrong...'
    //     };
    //     let contactForm = document.querySelector('#form'),
    //         contactInput = contactForm.getElementsByTagName('input'),
    //         newStatusMessage = document.createElement('div');
    //         newStatusMessage.classList.add('status');

    //     contactForm.addEventListener('submit', function(event) {
    //         event.preventDefault();
    //         contactForm.appendChild(newStatusMessage);
        
    //         let request = new XMLHttpRequest();
    //         request.open('POST', 'server.php');
    //         request.setRequestHeader('Content-type', 'application/json; charset=utf-8');


    //         let formData = new FormData(contactForm);

    //         let object = {};
    //         formData.forEach(function(value, key) {
    //             object[key] = value;
    //         });

    //         let json = JSON.stringify(object);
    //         request.send(json);

    //         request.addEventListener('readystatechange', function() {
    //             if(request.readyState < 4) {
    //                 newStatusMessage.innerHTML = newMessage.loading;
    //             } else if (request.readyState === 4 && request.status === 200) {
    //                 newStatusMessage.innerHTML = newMessage.success;
    //             } else {
    //                 newStatusMessage.innerHTML = newMessage.failure;
    //             }
    //         });

    //         for(let i = 0; i < contactInput.length; i++) {
    //             contactInput[i].value = '';
    //         }
    // });

   

    //Calculator

    // let persons = document.querySelectorAll('.counter-block-input')[0],
    //     restDays = document.querySelectorAll('.counter-block-input')[1],
    //     place = document.getElementById('select'),
    //     totalValue = document.getElementById('total'),
    //     personsSum = 0,
    //     daysSum = 0,
    //     total = 0;

    //     totalValue.innerHTML = 0;

    //     persons.addEventListener('change', function(){ // can't use () => because of this
    //         personsSum = +this.value;
    //         total = (daysSum + personsSum) * 4000;

    //         if(restDays.value == '') {
    //             totalValue.innerHTML = 0;
    //         } else {
    //             totalValue.innerHTML = total;
    //         }
    //         // bug
    //     });

    //     restDays.addEventListener('change', function(){ // can't use () => because of this
    //         daysSum = +this.value;
    //         total = (daysSum + personsSum) * 4000;

    //         if(persons.value == '') {
    //             totalValue.innerHTML = '0';
    //         } else {
    //             totalValue.innerHTML = total;
    //         }
    //         //bug
    //     });

    //     place.addEventListener('change', function() {
    //         if(restDays.value == '' || persons.value == '') {
    //             totalValue.innerHTML = 0;
    //         } else {
    //             let a = total;
    //             totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    //         }
    //     });

    

