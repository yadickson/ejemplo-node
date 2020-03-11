'use strict'

module.exports = function (context, app) {
  require('src/routes/auth.routes')(context, app)
  require('src/routes/base.routes')(context, app)
  require('src/routes/one.routes')(context, app)
}
