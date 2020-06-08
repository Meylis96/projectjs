"use strict";

const numberOfFilms = +prompt("How many movies did you watch?", "Please write number of movies");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if(personalMovieDB.count < 10){
    console.log('Too less!');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('That is really enough');
} else if(personalMovieDB.count >= 30){
    console.log('That is awesome');
} else {
    console.log('Something is wrong!');
}


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
console.log(personalMovieDB);


