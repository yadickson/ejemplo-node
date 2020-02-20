'use strict'

function errorHandler (err, req, res, next) {
  console.log(err)

  if (typeof err === 'string') {
    return res.status(400).json({ message: err })
  }

  return res.status(err.code).json(err)
}

module.exports = function (app) {
  app.use(errorHandler)
}
