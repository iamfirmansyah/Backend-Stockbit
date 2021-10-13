var express = require('express')
const cors = require('cors');
var app = express()
var dotenv = require('dotenv').config();

var Router = require('./routes/routes');

const corsOptions = {
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use('/', Router);

port = process.env.PORT || 8080;

app.listen(port);

console.log('Example app listening on post 8080!')