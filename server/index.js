require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
const userCtrl = require('./controllers/userController');
const tourCtrl = require('./controllers/tourController');
const cartCtrl = require('./controllers/cartController');
const path = require('path');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');



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
app.delete('/api/cart/:tour_id');


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



// const YOUR_DOMAIN = 'https://gotravelproject.com';
// app.post('/create-checkout-session', async (req, res) => {
//   const checkoutSession = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'Stubborn Attachments',
//             images: ['https://i.imgur.com/EHyR2nP.png'],
//           },
//           unit_amount: 2000,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${YOUR_DOMAIN}/success.html`,
//     cancel_url: `${YOUR_DOMAIN}/cancel.html`,
//   });
//   res.json({ id: checkoutSession.id });
// });