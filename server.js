const express = require("express")


//Save the initialization of express to the app variable
const app = express()

//Create a variable that willl be the PORT
const PORT = process.env.PORT || 80

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER - The below points our server to a series of "route" files.
//require("./routing/apiRoutes")(app);
//require("./routing/htmlRoutes")(app);


// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
});
