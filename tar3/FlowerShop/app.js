const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const db = require("./DB");


app.set('view engine', 'ejs');

app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));





app.get("/", (req, res) => {
    res.render("indexNoam.ejs");
});

app.get('/', function(req, res) {
    let line = "Any your code that you haven't looked at for few months might have been written by someone else";
    res.render('index2');
});

app.post("/", (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;
   
    const role = db.isAuthenticated(userName, password);
    if(role){
        res.render("indexLoged.ejs",{ role: role });
    }
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.get("/employees", (req, res) => {
    res.send("you got to /employees");
});

app.get("/branches", (req, res) => {
    res.render("you got to /branches");
});

app.listen(8080, function(){
    console.log('8080 is the magic port');
});

