'use strict'

module.exports = function (app) {
  const helmet = require('helmet')
  app.use(helmet())
}
