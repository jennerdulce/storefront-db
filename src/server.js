'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./auth/routes.js');
const v1Routes = require('./routes/v1.js')
const v2Routes = require('./routes/v2.js')

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(authRoutes);
app.use(v1Routes);
app.use(v2Routes);

// Home Handler
app.get('/', (req, res) => {
  res.status(200).json('Server is Working!')
})

// Error Handlers
app.use('*', notFound);
app.use(errorHandler)


module.exports = {
  app: app,
  start: (port) => {
    if(!port) {throw new Error("Missing Port");}
    app.listen(port, () => console.log(`Listening on PORT: ${port}`))
  }
}