var express = require('express');

var app = express();

//route

//home
app.get('/', function(req, res){
    res.send('Response frome home');
});

//Fishes
app.get('/fish/:fish_no?', function(req, res){
    var fish_no = req.params.fish_no;
    res.send('This is fish no ' + fish_no); 
});

app.listen(3000 , function(){
    console.log("App is running on port 3000");
});
//console.log("Hello there");