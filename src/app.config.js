'use strict'

module.exports = function (context, app) {
  require('./config/parser.config')(app)
  require('./config/cors.config')(app)
  require('./config/swagger.config')(context, app)
  require('./config/helmet.config')(app)
  require('./config/passport.config')(app)
}
