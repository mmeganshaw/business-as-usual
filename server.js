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


const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){ 
    console.log("listening on port " + PORT);
})