'use strict'

const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const LocalStrategy = require('passport-local').Strategy
const constants = require('../constants/constants')

function configLocal () {
  const opts = {
    usernameField: 'user',
    passwordField: 'pass',
    session: false
  }

  passport.use(
    new LocalStrategy(opts, (user, pass, done) => {
      return done(null, { user: user })
    })
  )
}

function configJwt () {
  const opts = {
    jwtFromRequest: function (req) {
      return req.headers[constants.JWT]
    },
    secretOrKey: process.env.JWT_SECRET,
    algorithms: [constants.JWT_ALGORITHM]
  }

  passport.use(
    new JwtStrategy(opts, (payload, done) => {
      return done(null, payload)
    })
  )
}

module.exports = function (app) {
  configLocal()
  configJwt()
  app.use(passport.initialize())
}
