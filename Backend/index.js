require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/rourers');
const cors = require('cors')

const connection = require('./dbconnection');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

connection();

app.use('/',routes);

app.listen(4000, () => console.log("SERVER RUN ON 4000"));

module.exports = app;