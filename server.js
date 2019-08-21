const express = require("express")


//Save the initialization of express to the app variable
const app = express()

//Create a variable that willl be the PORT
const PORT = process.env.PORT || 80

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set handlebars
const exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import the routes and give the server access to them
const routes = require("./controllers/burger_controller")

app.use(routes)

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
});
