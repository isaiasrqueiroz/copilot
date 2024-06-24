// Create web server
const express = require('express');
const app = express();
const PORT = 3000;

// Create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Create a route with a parameter
app.get('/comments/:id', (req, res) => {
  res.send(`Comment ID: ${req.params.id}`);
});

// Create a route with multiple parameters
app.get('/comments/:id/:title', (req, res) => {
  res.send(`Comment ID: ${req.params.id}, Title: ${req.params.title}`);
});

// Start the web server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});