"use strict";


let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("How many movies did you watch?", "Please write number of movies");

        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many movies did you watch?", "Please write number of movies");
        }
    },
    rememberMyFilms: function(){
        if(personalMovieDB.count < 10){
            console.log('Too less!');
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('That is really enough');
        } else if(personalMovieDB.count >= 30){
            console.log('That is awesome');
        } else {
            console.log('Something is wrong!');
        }
    },
    detectPersonalLevel: function(){
        for(let i = 0; i < 2; i++){
            let a = prompt("The last movie you watched", "The Gentlemen"),
                b = prompt("How can you estimate this movie?", "0.0");
        
            if(a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = [b]; // He did like this. It is better
                console.log('Done!');
            } else {
                console.log('Error');
                i--; // to return 1 cycle back
            }
        }
    },
    showByDB: function(hidden) {
        if(!hidden){ // personalMovieDB === false without argument
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++){
            let genre = prompt(`Your favorite genre number ${i}?`, '');
            if(genre === null || genre === '')  {
                console.log('Something is wrong!');
                i--;
        } else {
            personalMovieDB.genres[i - 1] = genre;
        }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`The favorite genre #${i + 1} is ${item}`);
        });

        // let genres = prompt(`Please write your favorite genre with comma`).toLowerCase();
        //     if(genre === null || genre === '')  {
        //         console.log('Something is wrong!');
        //         i--;
        // } else {
        //     personalMovieDB.genres = genres.split(', ');
        //     personalMovieDB.sort();
        // }
        // }
        // personalMovieDB.genres.forEach((item, i) => {
        //     console.log(`The favorite genre #${i + 1} is ${item}`);
        // });
    },
    filmName: [
        "ЛОГАН",
        "ЛИГА СПРАВЕДЛИВОСТИ",
        "ЛА-ЛА ЛЭНД",
        "ОДЕРЖИМОСТЬ",
        "СКОТТ ПИЛИГРИМ ПРОТИВ..."
    ]
};



const ads = document.querySelectorAll('.promo__adv img'),
      genre = document.querySelector('.promo__genre'),
      bg = document.querySelector('.promo__bg'),
      movieList = document.querySelector('.promo__interactive-list');

//  1)
ads.forEach(item => {
    item.remove();
});
//  2)
genre.textContent = 'драма';
//  3)
bg.style.background = "url(img/bg.jpg)center center/cover no-repeat";
//  4) and 5)
movieList.innerHTML = "";
personalMovieDB.filmName.sort();
personalMovieDB.filmName.forEach((film, i)=> {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>
    `;
    //a = a + 1 or a += 1
});

