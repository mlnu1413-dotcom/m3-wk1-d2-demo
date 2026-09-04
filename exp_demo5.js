const express = require('express');
const app = express();

app.get('/bookings/:bookingId', function(req, res) {
    res.send(req.params);
});

app.listen(3000);