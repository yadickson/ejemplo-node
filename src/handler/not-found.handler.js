'use strict'

const error = require('src/models/error.model')
const constants = require('src/constants/constants')

function notFoundHandler (req, res, next) {
  error.url = !req ? null : req.originalUrl
  error.status = constants.NOT_FOUND_CODE
  error.menssage = constants.NOT_FOUND_STR

  res.status(error.status).send(error)
}

module.exports = function (app) {
  app.use(notFoundHandler)
}
