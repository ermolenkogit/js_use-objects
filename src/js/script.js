'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt('How many movies have you watched?', '');

		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('How many movies have you watched?', '');
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt('One of the last movies you watched?', ''),
				b = prompt('How much would you rate it?', '');

			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log('done');
			} else {
				console.log('error');
				i--;
			}
		}
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log('Not many movies watched');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log("You're a classic viewer");
		} else if (personalMovieDB.count >= 30) {
			console.log("You're a movie buff");
		} else {
			console.log('There was an error');
		}
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function () {
		for (let i = 1; i < 2; i++) {
			let genre = prompt(`Your favorite genre number is ${i}`);

			if (genre === '' || genre == null) {
				console.log('You entered incorrect data or no data at all');
				i--;
			} else {
				personalMovieDB.genres[i - 1] = genre;
			}
		}

		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Favorite genre ${i + 1} - is ${item}`);
		});
	},
};
