// DEPENDENCIES
const express = require('express');
const app = express();
const marsMissions = require('./models/marsMissions.js')
app.set('view engine', 'ejs')

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * MAIN GOAL:
// * User should be able to click on a mission’s name on the index page, and be taken to that mission’s show page


// PORT
const port = 3000;


// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"

app.get('/', (request, response) => {
    response.render('missions/index', {
        missions: marsMissions,
        page: 'list.ejs'
    })
})


// SHOW Route
// // send data to 'missions/show.ejs' view 
// the view should display all the data for a single mission

app.get('/show/:id', (request, response) => {
    response.render('missions/index', {
        missions: marsMissions[request.params.id],
        page: 'show.ejs'
    })
})

// LISTENER
app.listen(port, function() {
    console.log('Missions to Mars running on port: ', port);
})

module.exports = app;