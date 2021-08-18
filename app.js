const express = require('express');
const cors = require('cors')
require('./database/db');

const userRoute = require('./route/userRoute');


const bodyParser = require("body-parser");
const app = express();

app.use(cors())

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}))


app.use(userRoute)




app.listen(90);