// Student Name: Ganavi Hemachandra
// Student ID: 1225757559
// Date: 09/10/2023

//Import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

// Create an instance of express
const app = express();

// We use the 'body-parser' middleware to parse the incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
// Set the view engine to ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
// console.log('views', path.join(__dirname, 'views'));

// app.get('/', (req, res) => {
//     // Render the form and pass in the current student data
//     res.render('index');
// });
// // // create a route for user to enter the numbers
// app.post("/calculate", (req, res) => {
//     const { num1, num2} = req.body;
//     const sum = Number(num1) + Number(num2);
//     const difference = Number(num1) - Number(num2);
//     const product = Number(num1) * Number(num2);
//     const quotient = Number(num1) / Number(num2);
//     res.render("result", {sum, difference, product, quotient});
// });

// const books = [];
// app.get('/', (req, res) => {
//     // Render the form and pass in the current student data
//     res.render('books');
// });

// app.post("/addBook", (req, res) => {
//     const {title, author, publicationYear, description} = req.body; // Added description field
//     books.push({title, author, publicationYear, description}); // Include description in the book object
//     res.redirect("/");
// });

// // create a route for the home page
// // The GET route for the form
// app.get('/', (req, res) => {
//     // Render the form and pass in the current student data
//     res.render('user');
// });

// // Constructor function for User
// function User(name, age, email){
//     this.name = name;
//     this.age = age;
//     this.email = email;
// }
// // Route handler for the form
// app.post("/createUser", (req, res) => {
//     const { name, age, email, country } = req.body; // Added 'country' field
//     const user = new User(name, age, email);
//     user.country = country; // Assign the 'country' value to the user object
//     const { name: userName, age: userAge, email: userEmail, country: userCountry } = user; // Include 'country' in destructuring
//     res.render("userInfo", { userName, userAge, userEmail, userCountry }); // Pass 'userCountry' to the template
// });

// const fruits = ["Apple", "Orange", "Banana"];

// app.post("/addFruit", (req, res) => {
//     const {fruit} = req.body;
//     fruits.push(fruit);
//     res.redirect("/");
// });

app.get("/", (req, res) => {
    res.render("httpRequest");
});

app.get("/simulateAsync", (req, res) => {
    setTimeout(() => {
      res.json({ message: "Asynchronous operation completed!" });
    }, 2000);
  });

app.post("/makeRequest", async (req,res) => {
    const { url } = req.body;
    console.log(`url - ${url}`)
    try {
        const response = await axios.get(url);
        console.log(`response is ${response}`)
        res.json(response.data);
    }catch(error) {
        res.json({ error: error.message });
    }
})


// Start the server on port 4000,,
// Note we are advertising the service on port number 4000 and not 3000 this time
var port = 4000
//NOTE
// the quotes are replaced by back ticks ` next to keys caps 1
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});