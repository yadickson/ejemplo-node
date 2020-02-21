'use strict'

module.exports = function (app) {
  const authRoutes = require('./routes/auth.routes')
  const baseRoutes = require('./routes/base.routes')
  const oneRoutes = require('./routes/one.routes')

  authRoutes.initialize(app)
  baseRoutes.initialize(app)
  oneRoutes.initialize(app)
}
