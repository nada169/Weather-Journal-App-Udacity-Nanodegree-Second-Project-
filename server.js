// Setup empty JS object to act as endpoint for all routes
projectData = {
    temp: '',
    date: '',
    feeling: '',


};

// Require Express to run server and routes
//express help me in http request and routes
const express = require('express');


const app = express();

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
var bodyParser = require('body-parser');
// body parser  for parse data in languages i need back and forth between server
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
// cors is a package that let browser server talk to each other
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

// create local server with node an express
const port = 8000;
const server = app.listen(port, () => { console.log(`Local server is runing on: ${port}`) });


//create local server that allow app to run locally on a browser
// Server recives requests process them return a response


/* get route */

// app.get('/all',(req,res)=>{

// res.send(projectData);
// })

/* Post route */

app.post('/postdata', Postweatherdata);

function Postweatherdata(req, res) {

        projectData.temp = req.body.temp;
        projectData.date = req.body.date;
        projectData.feeling = req.body.feeling;
        console.log('post');
        console.log(projectData);

}

app.get('/update', getdataback);


function getdataback(req, res) {
    console.log('get');
    console.log(projectData);
    res.send(projectData);
}