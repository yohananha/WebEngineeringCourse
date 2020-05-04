const express = require('express');
const app = express();
//const volume_sphere = require('./sphere');
app.set('view-engine', 'ejs');
app.use(express.urlencoded({extended: false}));


app.get('/', function(req, res){
    
    return res.render('index.ejs');
})

//app.post('/index', function(req, res){

//    volume = volume_sphere(req.body.radius);
//    document.getElementById('volume').innerHTML = volume;
//});

app.listen(3000, function(){
    console.log('My server is runing on port 3000');
});
//Noam and Yohanan