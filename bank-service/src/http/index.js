const express = require('express');
const bodyParser = require('body-parser');
const i18n = require('../i18n');
const { NotFoundError } = require('../errors');
const { NODE_ENV } = require('../env');

/* Routes */
const banksRoute = require('./routes/bankRoutes');

/* Middlewares */
const errorHandler = require('./middlewares/errorHandler');

/* Express initialization */
const app = express();

/* Express utilites */
app.use(i18n.init);
app.use(bodyParser.json({
  limit: process.env.BODY_LIMIT,
}));

/* Status endpoint */
app.get(['/info', '/status'], async (req, res, next) => {
  try {
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

if (NODE_ENV === 'production') {
  // app.use(auth(['ADMIN']));
}

/* Instatiate routes */
app.use('/banks', banksRoute);

app.all('*', (req, res, next) => {
  next(new NotFoundError(res.__('error.notFound')));
});

app.use(errorHandler);

module.exports = app;
