/* const objectA = {
    a: 10,
    b: true
}

const copyOfA = objectA

objectA.c = 12 * 2

console.log(copyOfA.c)

/* const myCity  = {
    city: 'New York'
}
myCity.city = 'Kryvyi Rih'

myCity.popular = true
myCity.length = '124 km'
myCity.safty = false  */

//console.log(1 +59);


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoveDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''), 
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');  


personalMoveDB.movies[a] = b;
personalMoveDB.movies[c] = d;

console.log(personalMoveDB);





