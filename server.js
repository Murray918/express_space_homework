//All of our requires are giving access to the objects in the files
const express = require('express');
const ejs = require('ejs')


//creating a reference AND accessing objects from the marsMissions.js
const missions = require('./models/marsMissions')

//short hand to use express functions
const app = express()

//creating short for what port we'll be accessing the server from
const port = 3000;

//Using express to set our viewport to use EJS 
app.set('view engine', 'ejs')


//This function is getting access to the server by first sending our route which is set to '/'. Then we create a function that uses request and respond as parameters.
app.get('/', (req, res) => {
      //rendering the index.ejs file so we can visual it in our HTML.
      res.render('missions/index',{

      //objectives is a key value within the renders second parameter. It's value is that of missions which links back to our marsMissions array of objects.
      objectives: missions,

      //path is a key with the value of a string called 'list' which is our list.ejs file (which is used in the index.ejs file)
      path: 'list',

    })
})

//we are getting the show.ejs file and i'm not sure what the :id is doing yet. Though I believe it's setting the a tags href to the value of the array within the marsMissions.js. So if 5 objects are in the array than each a href will equal between 0 and 5.
app.get('/show/:id',(req,res)=>{
    //rendering the index.ejs file
    res.render('missions/index',{

    //accessing the marsMissions array and setting the array elements to whatever id becomes.
    objectives: missions[req.params.id],
    
    //establishing that show.ejs is the file we will go to when a mission is clicked
    path: 'show',

  })
})


// LISTENER
app.listen(port, function() {
    console.log('Missions to Mars running on port: ', port);
})

module.exports = app;