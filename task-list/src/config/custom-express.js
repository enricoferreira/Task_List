//dependencias
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

//Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

//definindo Rotas
require('../routes/routes.js')(app);

module.exports = app;