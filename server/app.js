const express = require('express');
const app = express();
const conDB = require('./config/db');


//Connect to MongoDB
conDB();


// define middleware
app.use(express.json());
app.use(express.urlencoded({ extanded: true }));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });



//store reoutes
const queryFormRoute = require('./routes/queryFormRoute')
app.use('/', queryFormRoute);



app.get('/', (request, response) => {
    response.send(`<h1>Coaching App</h1>`);
});



module.exports = app;