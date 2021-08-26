const express = require('express');
const cors = require('cors')
require('./database/db');

const userRoute = require('./route/userRoute');
const donateRoute = require('./route/donateRoute')
const requestRoute = require('./route/requestRoute')
const adminRoute = require('./route/adminRoute')


const bodyParser = require("body-parser");
const { verifyAdmin, verifyUser } = require('./middleware/auth');
const app = express();

app.use(cors())

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}))


app.use(userRoute)

app.use('/api/DonateFood', verifyUser, donateRoute);
app.use('/api/RequestFood', verifyUser, requestRoute);
app.use('/api/admin', verifyUser ,verifyAdmin , adminRoute);





app.listen(90);