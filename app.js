// Expt No: 1
// Aim: To write a program to define a route, handle routes, 
// route parameters, query parameters, and URL building.

const express = require('express');
const app = express();

// Middleware to log request method and URL
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method} & URL: ${req.url}`);
  next();
});

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome!');
});

// Route with route parameter
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is ${userId}`);
});

// Route with query parameters
// Example: http://localhost:3039/search?term=node&category=programming
app.get('/search', (req, res) => {
  const { term, category } = req.query;
  res.send(`Search Term: ${term} and Category: ${category}`);
});

// Route with multiple route parameters
app.get('/blog/:year/:month', (req, res) => {
  const { year, month } = req.params;
  res.send(`Viewing from ${month} & ${year}`);
});

// URL building and redirect
app.get('/go-to-user', (req, res) => {
  const userId = 123;
  const userUrl = `/user/${userId}`;
  res.redirect(userUrl);
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

// Server setup
const PORT = 3039;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});