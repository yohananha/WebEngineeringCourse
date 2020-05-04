const express = require('express');
const bodyParser = require('body-parser');

const app = express();

 const users = [{name: 'Noam', password: 123},
                {name: 'Yochanan', password: 456},
                {name: 'Bagno', password: 123456}]

app.set('view-engine', 'ejs');
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: false}));


app.get('/', function(req, res){
    
    return res.render('index.ejs');
})

app.post('/index', function(req, res){
    
    var ok = false;
   
    for (var i = 0; i < users.length; i ++ ){
       if(users[i].name == req.body.name ){
            if(users[i].password == req.body.password ){
                ok = true;
            }
        }
    }
    if(ok){
        res.send('<h1>You are  autorised</h1><h2>תותח על חלל אתה</h2>');
    }else{
        res.send('<h1>You are not autorised</h1><h2>לך תשתה כוס מים קרים</h2>');
    }
   
});

app.listen(3000, function(){
    console.log('My server is runing on port 3000');
});

//hello world
