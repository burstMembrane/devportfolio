const express = require('express'),
    axios = require('axios'),
    path = require('path'),
    bodyParser = require('body-parser'),
    nodeMailer = require('nodemailer'),
    dotenv = require('dotenv');

// load language json
const skills = require('./public/data/skills.json');
const projects = require('./public/data/projects.json');

dotenv.config();
const app = express();


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


const projectLinks = () => {
        for(let skill of skills) {
            // for each skill, get the language - 
            let lang = skill.language;
            skill.projects = [];
            // search languages array of projects and return all matching projects. 
            projects.map((project) => {
                const regex = new RegExp(`(${lang.split(" ")[0]})`, 'g', 'i');
                for(let item of project.languages) {
                    if(regex.test(item)) {
                        skill.projects.push({
                            name: project.name,
                            url: project.url
                        });
                    }
                }
            })
        }
    };

    
    // search the projects json language fields, if language === project, Display project title with link. 

app.get('/', (req, res) => {

    projectLinks();

    res.render('index', {
        skills: skills
    });

});

app.get('/projects', (req, res) => {
    res.render('projects');
});


app.get('/contact', (req, res) => {
    res.render('contact', {
        message: null
    });
});

app.post('/contact', (req, res) => {

    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    });
    let mailOptions = {
        from: '"Liam Power" <liamfpower@gmail.com>', // sender address
        to: req.body.message.email, // list of receivers
        subject: "Your Message", // Subject line
        text: req.body.message.text, // plain text body
        html: `${req.body.message.text}` // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.render('contact', {
            message: req.body.message
        });
    });
});


app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`server running on http://${process.env.HOST}:${process.env.PORT}`);
});