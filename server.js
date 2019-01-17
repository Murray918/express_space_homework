// DEPENDENCIES
const express = require('express');
const app = express();
const marsMissions = require('./models/marsMissions.js')


// run `npm install` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * MAIN GOAL:
// * User should be able to click on a mission’s name on the index page, and be taken to that mission’s show page
//
// * Bonus/Hungry for More: add images to the data and have them display (google how)
// * Bonus/Hungry for More: add static css to style the pages (google how)

// NOTES:
// ejs has not been installed
// views folder has not been created
// views/missions folder has not been created

// PORT
const port = 3000;

// DATA - put into marsMissions.js file inside of a models folder, for module.exports
// remember to require it in the server


// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission

app.set('view engine', 'ejs')

app.get('/missions', (request, response) => {
  response.render('missions/index.ejs', {marsMissions: marsMissions})
})

app.get('/missions/:index', (request, response) => {
  response.render('missions/show.ejs', {
    name: marsMissions[request.params.index].name,
    launchDate: marsMissions[request.params.index].launchDate,
    operator: marsMissions[request.params.index].operator,
    missionType: marsMissions[request.params.index].missionType,
    img: marsMissions[request.params.index].img
  })
})

// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
