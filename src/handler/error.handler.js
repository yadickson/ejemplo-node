'use strict'

function errorHandler (err, req, res, next) {
  const error = require('../models/error.model')

  console.log(err)

  error.url = !req ? null : req.originalUrl

  if (typeof err === 'string') {
    error.message = err
    error.status = 400
  } else if (err.status === 401) {
    error.message = err.message
    error.status = err.status
  } else {
    error.message = 'Unexpected error'
    error.status = 500
  }

  return res.status(error.status).json(error)
}

module.exports = function (app) {
  app.use(errorHandler)
}
