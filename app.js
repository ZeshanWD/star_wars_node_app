var express = require("express");
var app = express();

// setting view engine to ejs so it accepts ejs
app.set('view engine', 'ejs');

var routes = require("./routes"); // importamos las rutas.

var path = require("path");
app.use(express.static(path.join(__dirname, 'public')));
// ======================= ROUTES ====================
app.get("/", routes.home);

// movie_single
app.get("/star_wars_episode/:episode_number?", routes.movie_single);

// notFound
app.get("*", routes.notFound);

// For Heroku
app.listen(process.env.PORT || 3000);

