var express = require('express');
var bodyParser = require("body-parser");
const sequelize =require('./database')
const cookieParser = require('cookie-parser');
const login = require('./routes/login');
const signup = require('./routes/signup');
const dashboard = require('./routes/dashboard');
const dbURL ='';
const mongoose = require('mongoose');

var app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));



app.set('view engine', 'ejs');


app.use('/login', login);
app.use('/signup', signup);
app.use('/dashboard', dashboard);
app.use('/logout', login);


app.get('/',(req, res, next) => {
   
    res.render('home');
    
});

app.get('/*', (req, res, next) => {
   
    res.send("page not found");
    
});

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => {
    app.listen(3000, function () {
        console.log('connected to the database')
        console.log('Example app listening on port 3000!')
    });  
  })
  .catch((err) => console.log(err));


