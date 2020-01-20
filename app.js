const express = require('express'),
    axios = require('axios'),
    path = require('path'),
    dotenv = require('dotenv');

// load language json
const languages = require('./public/data/skills.json')

dotenv.config();
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));



app.get('/', (req, res) => {

    res.render('index', {
        languages: languages
    });

})

app.get('/projects', (req, res) => {
    res.render('projects');
});


app.get('/contact', (req, res) => {
    res.render('contact');
});


app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`server running on http://${process.env.HOST}:${process.env.PORT}`)
});