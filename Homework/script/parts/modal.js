function modal(){
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
}

module.exports = modal;