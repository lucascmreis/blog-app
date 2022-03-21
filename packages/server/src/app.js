const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

app.use('/', routes);

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports = app;
