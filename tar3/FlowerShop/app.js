const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const db = require("./DB");


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));





app.get("/", (req, res) => {
    res.render("index.ejs",  { role: null });
});


// post login form // 
app.post("/", (req, res) => {
    var userName = req.body.userName;
    var password = req.body.password;

    var role = db.isAuthenticated(userName, password);

    res.json(role);
});

// render views partials // 
app.get("/header/:role", (req, res) => {
    var role = req.params.role;
    console.log("APP role is: ", role);
    if(role){
        res.render("partials/header.ejs", {role: role});
    }else{
        res.render("partials/header.ejs", {role: null});

    }

});




// render views //
app.get("/users/:role", (req, res) => {
    var role = req.params.role;
    if(role === "manager"){
        res.render("usersForManager.ejs", {role: role});
    }
    if(role === "employee"){
        res.render("usersForEmployee.ejs", {role: role});
    }
    
});


app.get("/branches", (req, res) => {
    res.render("branches.ejs");
});
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});
app.get("/about", (req, res) => {
    res.render("about.ejs");
});
app.get("/catalogue", (req, res) => {
    res.render("catalogue.ejs");
});


// json api //
app.get("/api/users/:role", (req, res) => {
    var role = req.params.role;
    var ans = db.getUsers(role);
    res.json(ans);
});

app.get("/api/branches/:role", (req, res) => {
    const role = req.params.role;
    const ans = db.getBranches(role);
    res.json(ans);
});

app.get("/api/catalogue", (req, res) => {
    const ans = db.getCatalogue();
    res.json(ans);
});







app.listen(8080, function(){
    console.log('8080 is the magic port');
});

