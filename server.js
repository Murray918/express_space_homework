// DEPENDENCIES
const express = require('express');
const marsMissions = require('./models/marsMissions.js')


let app = express();

app.set('view engine','ejs')






console.log(marsMissions)
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
const port = 9000;

// DATA - put into marsMissions.js file inside of a models folder, for module.exports
// remember to require it in the server










// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"




app.get('/',(request,response)=>{
  response.render('missions/index.ejs', { 
  	thing: marsMissions,
  	page: 'list.ejs',

  })
})

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission

app.get('/show/:id',(request,response)=>{
	response.render('missions/index.ejs',{
		thing: marsMissions[request.params.id],
		page: 'show.ejs',

	})
})


// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;

