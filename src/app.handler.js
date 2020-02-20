'use strict'

module.exports = function (app) {
  require('./handler/error.handler')(app)
  require('./handler/not-found.handler')(app)
}
