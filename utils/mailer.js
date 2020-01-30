const bodyParser = require('body-parser'),
    express = require('express'),
    nodeMailer = require('nodemailer');


let req = express.req;

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

module.exports = { transporter, mailOptions };