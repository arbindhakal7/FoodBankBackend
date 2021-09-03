const express = require('express');
const cors = require('cors')
require('./database/db');
require('dotenv').config();


const auth = require('./middleware/auth')

const userRoute = require('./route/userRoute');
const donateRoute = require('./route/donateRoute')
const requestRoute = require('./route/requestRoute')
const adminRoute = require('./route/adminRoute')
const morgan = require('morgan')

const bodyParser = require("body-parser");
const { verifyAdmin, verifyUser } = require('./middleware/auth');
const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}))


app.use(userRoute)

app.use('/api/DonateFood', donateRoute);
app.use('/api/RequestFood' , requestRoute);
app.use('/api/admin', verifyUser ,verifyAdmin , adminRoute);





app.listen(process.env.port, () => {
    console.log(`server is running at localhost:${process.env.port}`);
});