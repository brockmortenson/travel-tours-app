require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
const userCtrl = require('./controllers/userController');
const tourCtrl = require('./controllers/tourController');
const cartCtrl = require('./controllers/cartController');
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

    /* AUTH ENDPOINTS */

app.post('/auth/register', userCtrl.register);

app.post('/auth/login', userCtrl.login);

app.delete('/auth/logout', userCtrl.logout);

app.get('/auth/session', userCtrl.getSession);


    /* TOURS ENDPOINTS */

app.get('/api/tours', tourCtrl.getAllTours);

// tourCtrl.bookTour
app.post('/api/tours', tourCtrl.bookTour);


    /* CART ENDPOINTS */

app.get('/api/cart', cartCtrl.getCart);

// cartCtrl.updateTour
app.put('/api/cart/:tour_id');

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