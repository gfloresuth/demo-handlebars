var express = require('express');
var bodyParser = require('body-parser');
var Promise = require('bluebird');

var exphbs  = require('express-handlebars');

var app = express();
var hbs = exphbs.create({ /* config */ });

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



app.get('/', function (req, res) {
    res.render('home');
});
app.get('/saludar/:unnombre', function (req, res) {
    var unnombre = req.params.unnombre;
    res.render('saludo',{nombre:unnombre});
});

app.listen(3000);