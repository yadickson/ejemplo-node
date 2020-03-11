'use strict'

module.exports = function (app) {
  require('src/handler/error.handler')(app)
  require('src/handler/not-found.handler')(app)
}
