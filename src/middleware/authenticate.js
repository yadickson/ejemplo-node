'use strict'

const passport = require('passport')
const jwt = require('src/security/jwt')
const error = require('src/models/error.model')
const constants = require('src/constants/constants')

function authenticate (req, res, next) {
  passport.authenticate('jwt', { session: false }, (err, payload, info) => {
    if (info) {
      error.message = info.message
      error.status = 401
      return next(error)
    }

    if (err) {
      return next(err)
    }

    if (!payload) {
      error.message = 'You are not allowed to access.'
      error.status = 403
      return next(error)
    }

    const token = jwt(payload.perfil)
    res.header(constants.JWT, token)

    req.perfil = payload.perfil

    return next()
  })(req, res, next)
}

module.exports = authenticate
