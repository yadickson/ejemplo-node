'use strict'

module.exports = function (app) {
  require('./config/parser.config')(app)
  require('./config/cors.config')(app)
  require('./config/swagger.config')(app)
  require('./config/helmet.config')(app)
  require('./config/passport.config')(app)
}
