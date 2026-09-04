const express = require('express');
const app = express();

app.get('/home', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About');
});

// For invalid routes
app.use((req, res) => {
    res.send('404! This is an invalid URL.');
});

app.listen(3000);