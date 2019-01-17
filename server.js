// DEPENDENCIES
const express = require('express');
const marsMissions = require('./models/marsMissions')
const path = require('path')
const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')



// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"
app.get('/', (req, res)=> {
  res.render('missions/index', { 
    thing: marsMissions,
    page: 'list',
    cssPath: 'css/style.css'
  })
})



// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission
app.get('/show/:id', (req, res)=> {
  res.render('missions/show.ejs', { 
    thing: marsMissions[req.params.id],
    page: 'show',
    cssPath: 'css/style.css'
  })
})


app.get('/missions', (req, res)=> {
  res.send(marsMissions)
})



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




// LISTENER
app.listen(PORT, function() {
  console.log('Missions to Mars running on port: ', PORT);
})



module.exports = app;
