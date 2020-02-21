'use strict'

module.exports = function (app) {
  const passport = require('passport')
  const JwtStrategy = require('passport-jwt').Strategy
  const constants = require('../constants/constants')

  const opts = {}
  opts.jwtFromRequest = function (req) {
    return req.headers[constants.JWT]
  }
  opts.secretOrKey = process.env.JWT_SECRET
  opts.algorithms = [constants.JWT_ALGORITHM]

  passport.use(
    new JwtStrategy(opts, (payload, done) => {
      console.log('ejecutando *callback verify* de estategia jwt', payload)
      return done(null, payload)
    })
  )

  app.use(passport.initialize())
}
