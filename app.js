var express = require('express');
var app = express();
app.set('view engine', 'ejs');


//route
var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
//home
app.get('/', routes.home);
//Fishes
app.get('/fish/:fish_no?', routes.single_fish);
//Not Found
app.get('*', routes.pagenotfound);

app.listen(process.env.PORT || 3000);

//console.log("Hello there");