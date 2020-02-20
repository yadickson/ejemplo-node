'use strict'

module.exports = function (app) {
  require('./config/parser.config')(app)
  require('./config/cors.config')(app)
//  require('./config/jwt.config')(app)
}
