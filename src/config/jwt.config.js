'use strict'

module.exports = function (app) {
  const expressJwt = require('express-jwt')
  // const config = require('config.json')
  const constants = require('../constants/constants')

  // const { secret } = config
  const jwt = expressJwt({
    secret: new Buffer('shhhhhhared-secret', 'base64')
  }).unless({
    path: [constants.LOGIN_PATH]
  })

  app.use(jwt)
}
