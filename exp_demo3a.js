var express = require('express');
var router = express.Router();

router.get('/home', function(req, res){
    res.send('This is the home page');
});

module.exports = router;