'use strict';

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var JsonDB = require('node-json-db');

var db = new JsonDB("myDataBase", true, false);
db.push("/test1","super test");
db.push("/test2/my/test",5);
db.push("/test3", {test:"test", json: {test:["test"]}});
var data = db.getData("/");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/test1', function(req, res) {
    res.json( data );
});

router.post('/test2', function(req, res) {
    res.json({ message: 'test-post' });
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
