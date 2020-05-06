const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
    let line = "Any your code that you haven't looked at for few months might have been written by someone else";
    res.render('index2');
});


app.listen(8080, function(){
    console.log('8080 is the magic port');
});
