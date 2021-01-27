
const express = require('express');
const nodemailer = require('nodemailer');
const app = express()
const cors = require('cors')


app.use(cors())
app.use(express.json());

const PORT = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

app.get('/express_backend', function (req, res) {
    res.send('Express server working!')
  })

// create a POST route
app.post('/express_backend', (req, res) => {
    
    console.log('Obtained data: ' + req.body);
    const { messengerName,  contact, subject, message } = req.body;    

    const htmlEmail = `
            <h3> Contact details </h3>
            <ul>
                <li>Name: ${messengerName} </li>
                <li>Contact Info: ${contact} </li>
            </ul>
            <h3> Message <h3>
            <p>${message}</p>
        `

    // Setup transporter
    let transporter = nodemailer.createTransport({
        service : 'outlook',
        auth: {
            user: 'sam.messengerbot@outlook.com',
            pass: 'mailbot362582'
        }
    });

    // Mailing options
    let mailOptions = {
        from:'sam.messengerbot@outlook.com',
        to: 'huynh5851@gmail.com',
        subject:`SITE EMAIL: \'${subject}\'`,
        text: message,
        html: htmlEmail
    };

    // Send mail
    transporter.sendMail(mailOptions, function(err, data){
        if (err) {
            res.json({
                msg: 'fail'
            })
        } else {
            res.json({
                msg: 'success'
            })
        }
    });
});