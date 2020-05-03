const path = require('path'),
    express = require('express'),
    app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    let students = [ { name: 'Harry Potter', house:  'Gryffindor' },
        { name: 'Drako Malfoy', house:  'Slytherin' },
        { name: 'Cedrik Diggory', house:  'Hufflepuff' }
               ];
  res.render('index', { students: students});
  //res.render('index');
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.listen(8080, function () {
  console.log('Listening on port 8080!');
});
