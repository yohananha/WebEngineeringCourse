const path = require('path');
const express = require('express');
const app = express();
const bobyParser = require("body-parser");
const db = require("./DB");


app.set('view engine', 'ejs');

app.use(bobyParser.json());
app.use(express.static(path.join(__dirname, 'public')));



app.get("/", (req, res) => {
    res.render("index.ejs", { role: null });
});

app.post("/", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
  
    const role = db.isAuthenticated(name, email);

    res.json(role);
});


app.get("/navbar/:role", (req, res) => {
    const role = req.params.role;
    res.render("navbar.ejs", {role: role});
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

