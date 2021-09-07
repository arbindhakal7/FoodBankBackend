const express = require('express');
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose');

require('./database/db');
require('dotenv').config();


const auth = require('./middleware/auth')

const userRoute = require('./route/userRoute');
const donateRoute = require('./route/donateRoute')
const requestRoute = require('./route/requestRoute')
const adminRoute = require('./route/adminRoute')
const profileRoute = require('./route/profileRoute')
const foodbankRoute = require('./route/FoodBankRoute')

const morgan = require('morgan')

const bodyParser = require("body-parser");
const { verifyAdmin, verifyUser } = require('./middleware/auth');
const app = express();

app.use(cors('*'))
app.use(morgan('tiny'))


mongoose.connect(process.env.DbURI,{
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(()=> console.log('Database server connected'))
.catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res) => {
    res.send('Welcome, to my app');
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/user', userRoute);
app.use('/api/DonateFood' , auth.verifyUser,donateRoute);
app.use('/api/RequestFood', auth.verifyUser, requestRoute);
app.use('/api/admin', verifyUser ,verifyAdmin , adminRoute);
app.use('/api/Profile', auth.verifyUser, profileRoute);
app.use('/api/FoodBank', auth.verifyUser, foodbankRoute);

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(err.status || 500);
    res.json({
        status: 'error',
        message: err.message
    })
})





app.listen(process.env.port, () => {
    console.log(`server is running at localhost:${process.env.port}`);
});