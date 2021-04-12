require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
const userCtrl = require('./controllers/userController');
const tourCtrl = require('./controllers/tourController');



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

// userCtrl.register
app.post('/auth/register', userCtrl.register); // req.body

// userCtrl.login
app.post('/auth/login', userCtrl.login); // req.body

// userCtrl.logout
app.delete('/auth/logout', userCtrl.logout); // receive no data

// userCtrl.getSession
app.get('/auth/session', userCtrl.getSession); // receive no data


    /* TOURS ENDPOINTS */

// tourCtrl.getAllTours
app.get('/api/tours', tourCtrl.getAllTours);

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