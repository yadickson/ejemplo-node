'use strict'

module.exports = function (context, app) {
  require('src/config/parser.config')(app)
  require('src/config/cors.config')(app)
  require('src/config/swagger.config')(context, app)
  require('src/config/helmet.config')(app)
  require('src/config/passport.config')(app)
}
