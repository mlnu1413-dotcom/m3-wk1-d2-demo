const express = require('express');
const app = express();

// Middleware
app.use(function (req, res, next) {
    console.log("A new request received at " + Date.now());
    next();
});

// Routes
app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/home', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.listen(3000);