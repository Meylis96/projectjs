"use strict";

const numberOfFilms = +prompt("How many movies did you watch?", "0");


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt("The last movie you watched", "The Gentlemen"),
    b = prompt("How can you estimate this movie?", "0.0"),
    c = prompt("The last movie you watched", "The Gentlemen"),
    d = prompt("How can you estimate this movie?", "0.0");


personalMovieDB.movies[a] = [b]; // He did like this. It is better
personalMovieDB.movies[c] = [d];
// personalMovieDB.movies = `${a}: ${b}
//                           ${c}: ${d}`; // This I did and it works
console.log(personalMovieDB);
