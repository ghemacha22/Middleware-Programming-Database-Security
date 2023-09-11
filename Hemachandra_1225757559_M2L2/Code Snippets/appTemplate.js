// Student Name: Ganavi Hemachandra
// Student ID: 1225757559
// Date: 09/10/2023

//Import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Create an instance of express
const app = express();

// We use the 'body-parser' middleware to parse the incoming request bodies
app.use(bodyParser.urlencoded({ extended: false}));

// Set the view engine to ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
console.log('views', path.join(__dirname, 'views'));


// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});