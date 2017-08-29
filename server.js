'use strict';

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();



router.get('/test1', function(req, res) {
    res.json({ message: 'test-get' });
});

router.post('/test2', function(req, res) {
    res.json({ message: 'test-post's });   
});





app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
