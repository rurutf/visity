const numberOfFilms = +promt("Сколько фильмов вы посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""), 
    b = prompt("На сколько оцените его?", "");
    
    if (a != null && b != null && a != "" && b != "" a.length < 50)
    personalMovieDB.movies[a] = b;
    console.log('done');
} else {
    console.log('error');
    i--;
} */

//2 способ 
let i = 0;
const a = prompt("Один из последних просмотренных фильмов?", ""), 
    b = prompt("На сколько оцените его?", "");

while  (i<2) {
    if (a != null && b != null && a != "" && b != "" a.length < 50)
    personalMovieDB.movies[a] = b;
    console.log('done');
    i++
} else {
    console.log('error');
    i--;
}

//3 способ
do {
    console.log('done');
    i++
}
while (i<2) {
    if (a != null && b != null && a != "" && b != "" a.length < 50)
    personalMovieDB.movies[a] = b;
}






if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов')
} esle if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель')
} else if(personalMovieDB.count > 30) {
    console.log('Вы киноман!')
} else {
    console.log('Произошла ошибка')
}

console.log(personalMovieDB);


if (4==4) {
    console.log("no!")
} else {
    console.log("yes!")
}