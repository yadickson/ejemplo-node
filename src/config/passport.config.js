'use strict'

const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const LocalStrategy = require('passport-local').Strategy
const constants = require('src/constants/constants')
const cert = require('src/helpers/cert.helper')

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
    secretOrKey: cert.getPublicKey(),
    algorithms: [constants.EC_ALGORITHM]
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
