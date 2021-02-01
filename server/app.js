require('dotenv').config();

const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const routes = require('./routes');
const { clientError, serverError } = require('./controllers/errorHandle');

const app = express();

app.set('port', process.env.PORT || 5000);
app.disable('x-powered-by');

app.use(express.json());
app.use(cookieParser());
app.use(compression());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/', routes);

app.use(clientError);
app.use(serverError);

module.exports = { app };
