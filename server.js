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

// DEPENDENCIES
const express = require('express');
// DATA - put into marsMissions.js file inside of a models folder, for module.exports
// remember to require it in the server
const marsMissions = require('./models/marsMissions.js')
const path = require('path')
const PORT = 3000;

let app = express();


// this links our server to a static public directory
app.use(express.static(path.join(__dirname, 'public')))
// this replaces (default template engine that comes with Express) with ejs
app.set('view engine', 'ejs') 


// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"
app.get('/', (request, response) => {
    response.render('missions/index.ejs', {
        component: marsMissions,
        page: 'list',
        cssPath: '/css/style.css'
    })
})
// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission
app.get('/:index', (request, response) => {
    let missionId = request.params.index
    console.log(marsMissions[missionId])
    response.render('missions/index.ejs', {
        component: marsMissions[missionId],
        page: 'show',
        cssPath: '/css/style.css'

    })
})



// LISTENER
app.listen(PORT, function() {
    console.log('Missions to Mars running on port: ', PORT);
})

module.exports = app;