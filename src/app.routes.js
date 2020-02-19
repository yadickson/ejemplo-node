'use strict'

module.exports = function (app) {
  require('./routes/base.routes')(app)
  require('./routes/one.routes')(app)
}
