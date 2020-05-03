function calculator(){
    
    let persons = document.querySelectorAll('.counter-block-input')[0],

        restDays = document.querySelectorAll('.counter-block-input')[1],

        place = document.getElementById('select'),

        totalValue = document.getElementById('total'),

        personsSum = 0,

        daysSum = 0,

        total = 0,

        city = 0;



        totalValue.innerHTML = 0;

       

        persons.addEventListener('input', function() {

            personsSum = +this.value;



            if(restDays.value == '' || personsSum == 0) {

                totalValue.innerHTML = 0;

            }

            else {

                city = place.value;

                total = ((daysSum + personsSum) * 4000) * city;

                totalValue.innerHTML = total;

            }

        });



        restDays.addEventListener('input', function () {

           daysSum = +this.value;

           total = (daysSum + personsSum) * 4000;



            if (persons.value == '' || daysSum == 0) {

                totalValue.innerHTML = 0;

            }

            else {

                city = place.value;

                total = ((daysSum + personsSum) * 4000) * city;

                totalValue.innerHTML = total;

            }

        });



        place.addEventListener('change', function() {

            if (restDays.value == '' || persons.value == '') {

                totalValue.innerHTML = 0;

            }

            else {

                personsSum = +persons.value;

                daysSum = +restDays.value;

                city = this.options[this.selectedIndex].value;

                total = ((daysSum + personsSum) * 4000) * city;

                totalValue.innerHTML = total;

            }
        });
}

module.exports = calculator;