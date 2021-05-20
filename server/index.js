require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
const userCtrl = require('./controllers/userController');
const tourCtrl = require('./controllers/tourController');
const cartCtrl = require('./controllers/cartController');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');



const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(express.json())

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 14
        }
    })
);

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


    /* nodemailer */
app.get('/mailer', (req, res) => {
    res.send('contact')
});

app.post('/send', (req, res) => {
   const output = `
   <p>Thank you for subscribing!</p>
   <h3>Contact Details</h3>
   <ul>
        <li>Email: ${req.body.email}</li>
   </ul>`;

   let transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 587,
    secure: false,
    auth: {
      user: 'bobgotravel@yahoo.com',
      pass: 'dzqdpobylmhetooc',
    },
    tls: {
        rejectUnauthorized: false
    }
  });

 
  let mailOptions = {
      from: '"GoTravel Team" <bobgotravel@yahoo.com>',
      to: 'brockotaco12@gmail.com',
      subject: 'Subscription',
      text: 'Thanks for subscribing',
      html: output
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  })

})




    /* AUTH ENDPOINTS */

app.post('/auth/register', userCtrl.register);

app.post('/auth/login', userCtrl.login);

app.delete('/auth/logout', userCtrl.logout);

app.get('/auth/session', userCtrl.getSession);

app.put('/auth/change', userCtrl.changePassword);


    /* TOURS ENDPOINTS */

app.get('/api/tours', tourCtrl.getAllTours);

// tourCtrl.bookTour
app.post('/api/tours', tourCtrl.bookTour);


    /* CART ENDPOINTS */

app.get('/api/cart', cartCtrl.getCart);

// app.put('/api/cart', cartCtrl.updateTour);

// cartCtrl.removeTour
app.delete('/api/cart/:id');


app.use(express.static(__dirname + '/../build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
});


massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then((db) => {
    app.set('db', db)

    app.listen(SERVER_PORT, () => console.log(`DB is up and Server is running on port ${SERVER_PORT}`))
}).catch(err => {
    console.log(err)
});



