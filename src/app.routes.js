'use strict'

module.exports = function (context, app) {
  require('./routes/auth.routes')(context, app)
  require('./routes/base.routes')(context, app)
  require('./routes/one.routes')(context, app)
}
