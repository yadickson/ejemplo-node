'use strict'

module.exports = function (app) {
  const cors = require('cors')

  var corsOptions = {
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS  '],
    allowedHeaders: ['Content-Type', 'Origin', 'Accept'],
    exposedHeaders: ['Content-Type', 'X-TOKEN'],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 200
  }

  app.use(cors(corsOptions))
}
