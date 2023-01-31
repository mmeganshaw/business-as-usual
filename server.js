const express = require('express');
const engine = require('express-handlebars').engine; 
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use('/public', express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/careers', (req, res) => {
    res.render('careers');
});

app.get('/gallery', (req, res) => {
    res.render('gallery');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/services', (req, res) => {
    res.render('service-landing');
});

app.get('/services/lawn-maintenance', (req, res) => {
    res.render('lawn-maintenance');
});

app.get('/services/landscape-install', (req, res) => {
    res.render('landscape-installation');
});

app.get('/services/snow-removal', (req, res) => {
    res.render('snow-ice');
});

app.get('/services/landscape-design', (req, res) => {
    res.render('landscape-design');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){ 
    console.log("listening on port " + PORT);
})