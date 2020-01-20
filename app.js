const express = require('express'),
    dotenv = require('dotenv');

dotenv.config();
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));



app.get('/', (req, res) => {
    res.render('index');
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