var moviesJSON = require("../movies.json");

// ======================= ROUTES ====================
exports.home = function(req, res){

  var movies = moviesJSON.movies;

    res.render("home", { // by default express will look in the views directory
      title : "Star wars",
      movies: movies
    });
};

// movie_single
exports.movie_single = function(req, res){
  var episode_number = req.params.episode_number;
  var movies = moviesJSON.movies;

  if(episode_number >= 1 && episode_number <= 6){
      // Getting the details of each movie
      var movie = movies[episode_number - 1];
      var title = movie.title;
      var main_characters = movie.main_characters;

      res.render("movie_single", {
          movies: movies,
          title: title,
          movie: movie,
          main_characters: main_characters
      });
  } else {
    res.render("notFound", {
      movies: movies,
      title: "Page Not Found Papi"
    });
  }

  
};

// notFound
exports.notFound = function(req, res){
  var movies = moviesJSON.movies;
  res.render("notFound", {
    movies: movies,
    title: "Page Not Found Papi"
  });
};
