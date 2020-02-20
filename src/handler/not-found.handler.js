'use strict'

const error = require('../models/error.model')
const constants = require('../constants/constants')

function notFoundHandler (req, res, next) {
  error.url = !req ? null : req.originalUrl
  error.code = constants.NOT_FOUND_CODE
  error.menssage = constants.NOT_FOUND_STR

  res.status(error.code).send(error)
}

module.exports = function (app) {
  app.use(notFoundHandler)
}
