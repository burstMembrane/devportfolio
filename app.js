// load dependencies
const express = require('express'),
    hljs = require('highlight.js'),
    bodyParser = require('body-parser'),
    nodeMailer = require('nodemailer'),
    dotenv = require('dotenv'),
    compression = require('compression'),
    minify = require('express-minify'),
    moment = require('moment');

// load language json
const skills = require('./public/data/skills.json');
const projects = require('./public/data/projects.json');

// Destructure dependencies list from package.json
const {
    dependencies
} = require('./package.json');
const depArray = Object.keys(dependencies);

// set up environment variables
dotenv.config();

// initialize app:
const app = express();

// app config
app.set('view engine', 'ejs');

// app middleware
app.use(compression());
app.use(minify());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const getProjectLinks = () => {
    // search the projects json language fields, if language === project, Display project title with link.
    for (let skill of skills) {
        // for each skill, get the language
        let lang = skill.language;
        skill.projects = [];
        // search languages array of projects and return all matching projects.
        projects.map((project) => {
            const regex = new RegExp(`(${lang.split(' ')[0]})`, 'g', 'i');
            for (let item of project.languages) {
                if (regex.test(item)) {
                    skill.projects.push({
                        name: project.name,
                        url: project.url
                    });
                }
            }
        });
    }
};

app.get('/', (req, res) => {
    getProjectLinks();
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
        subject: 'Your Message', // Subject line
        text: req.body.message.text, // plain text body
        html: `${req.body.message.text}` // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) return console.log(error);
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.render('contact', {
            message: req.body.message
        });
    });
});

app.get('/about', (req, res) => {
    // get first project as example code
    let jsonStr = JSON.stringify(projects[0], null, 2);
    jsonStr = jsonStr.replace(/[{}]/g, '');
    const exampleProject = hljs.highlightAuto(jsonStr).value;
    const [exampleSkill] = skills;

    res.render('about', {
        exampleProject: exampleProject,
        exampleSkill: exampleSkill,
        dependencies: depArray,
        moment: moment
    });
});

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`server running on http://${process.env.HOST}:${process.env.PORT}`);
});