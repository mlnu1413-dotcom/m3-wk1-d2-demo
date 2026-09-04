const express = require('express');
const app = express();

app.get('/home', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});