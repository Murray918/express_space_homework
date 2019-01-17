// DEPENDENCIES
const express = require('express');
const marsMissions = require('./models/marsMissions')
const app = express();


// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * MAIN GOAL:
// * User should be able to click on a mission’s name on the index page, and be taken to that mission’s show page
//
// * Bonus/Hungry for More: add images to the data and have them display (google how)
// * Bonus/Hungry for More: add static css to style the pages (google how)

// PORT
const PORT = 3000;



// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"
app.get('/', (req, res)=> {
  res.send(marsMissions)
})




// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission



// LISTENER
app.listen(PORT, function() {
  console.log('Missions to Mars running on port: ', PORT);
})



module.exports = app;
