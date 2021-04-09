require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');



const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

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

// authCtrl.register
app.post('/auth/register'); // req.body

// authCtrl.login
app.post('/auth/login'); // req.body

// authCtrl.logout
app.delete('/auth/logout'); // receive no data

// authCtrl.getSession
app.get('/auth/session'); // receive no data


    /* TOURS ENDPOINTS */

// tourCtrl.getAllTours
app.get('/api/tours');

// tourCtrl.bookTour
app.post('/api/tours');

// tourCtrl.changeTier
app.put('/api/tours/:tour_id');


    /* CART ENDPOINTS */

// cartCtrl.getBookedTours
app.get('/api/cart');

// cartCtrl.changeTier
app.put('/api/cart/:tour_id');

// cartCtrl.removeTour
app.delete('/api/cart/:tour_id');

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