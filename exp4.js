project/                     # Root folder of your project
│
├── views/                   # All EJS view templates are stored here
│   ├── index.ejs            # Home page: shows title, student list, and link to form
│   ├── form.ejs             # Form page: allows user to enter and submit their name
│   └── success.ejs          # Success page: displays thank you message after form submission
│
└── app.js                   # Main Express.js server file
                             # - Configures EJS as the view engine
                             # - Defines routes (/ , /form , /submit)
                             # - Handles form submissions
                             # - Starts the server on port 3039


//index.ejs
<!DOCTYPE html>
<html>
<head>
    <title><%= title %></title>
</head>
<body>
    <h1><%= title %></h1>
    <h3>Student List:</h3>
    <ul>
        <% for (let student of students) { %>
            <li><%= student %></li>
        <% } %>
    </ul>
    <a href="/form">Submit your name</a>
</body>
</html>

//form.ejs
<!DOCTYPE html>
<html>
<head>
    <title>Form Page</title>
</head>
<body>
    <h1>Enter your Name</h1>
    <form action="/submit" method="post">
        <input type="text" name="name" placeholder="Enter your name" required>
        <button type="submit">Submit</button>
    </form>
</body>
</html>


//success.ejs
<!doctype html>
<html>
<head>
    <title>Success</title>
</head>
<body>
    <h1>Thank you, <%= name %>!</h1>
    <a href="/">Go Back to Home</a>
</body>
</html>


//app.js
const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const title = "Welcome to EJS Templating";
const students = ["Alice", "Bob", "Charlie", "David"];
app.get("/", (req, res) => {
    res.render("index", { title, students });
});
app.get("/form", (req, res) => {
    res.render("form");
});
app.post("/submit", (req, res) => {
    const name = req.body.name;
    res.render("success", { name });
});
app.listen(3039, () => {
    console.log("Server is running on http://localhost:3039");
});
