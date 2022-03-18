const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

app.get('/', (req, res) => {

  res.json({message: 'Success '});
});

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports = app;
