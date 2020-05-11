import { fetchWithTimeout } from "./services"

var movies = require('./data/movies.json'); // Require statement can be used to get the json data from other file

export function fetchMovies() {

    function resolveFunction() {
        // console.log(movies)
        return movies;
    };
    var a = fetchWithTimeout(500).then(function() {
        resolveFunction();
    });
    // console.log(a);
    return a;
};

var moviePromise = fetchMovies();
// console.log(moviePromise);

var a = moviePromise.then(function(results) {
    console.log("well");
    console.log(results);
})
console.log(a);