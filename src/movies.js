// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => {
    return movie.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const numbDirectedMoviesBySteven = moviesArray.reduce(
    (accumulator, { director, genre }) => {
      if (director === "Steven Spielberg" && genre.includes("Drama")) {
        return accumulator + 1;
      } else {
        return accumulator;
      }
    },
    0
  );

  //   console.log(numbDirectedMoviesBySteven);
  return numbDirectedMoviesBySteven;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const sumScore = moviesArray.reduce((accumulator, movie) => {
    if (movie.score) {
      return accumulator + movie.score;
    } else {
      return accumulator;
    }
  }, 0);

  return +(Math.round(sumScore / moviesArray.length + "e+2") + "e-2");
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let sumCountDrama = 0;
  let sumScoreDrama = moviesArray.reduce((accumulator, movie) => {
    if (movie.genre.includes("Drama")) {
      sumCountDrama++;
      return accumulator + movie.score;
    } else {
      return accumulator;
    }
  }, 0);

  if (sumCountDrama === 0) {
    return 0;
  }

  return +(Math.round(sumScoreDrama / sumCountDrama + "e+2") + "e-2");
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let sortedMoviesArray = [...moviesArray];
  sortedMoviesArray.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      if (a.title.localeCompare(b.title) === -1) {
        return -1;
      } else {
        return 1;
      }
    }
  });
  return sortedMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let sortedMoviesArray = [...moviesArray];
  let sortedArrayTitle = [];
  sortedMoviesArray.sort((a, b) => {
    if (a.title.localeCompare(b.title) === -1) {
      return -1;
    } else {
      return 1;
    }
  });
  for (let i = 0; i < 20 && i < sortedMoviesArray.length; i++) {
    sortedArrayTitle.push(sortedMoviesArray[i].title);
  }
  console.log(sortedArrayTitle);
  return sortedArrayTitle;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
