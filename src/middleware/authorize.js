'use strict'

const error = require('src/models/error.model')

function isAllowedAll (roles, allowed) {
  return !!allowed && !!roles && allowed.every(allow => roles.indexOf(allow) > -1)
}

function isAllowedAny (roles, allowed) {
  return !!allowed && !!roles && allowed.some(allow => roles.indexOf(allow) > -1)
}

function sendError (req, res) {
  error.url = req.originalUrl
  error.status = 403
  error.message = 'Forbidden'
  res.status(error.status).json(error)
}

function authorizeAll (...allowed) {
  return (req, res, next) => {
    if (req.perfil && isAllowedAll(req.perfil.roles, allowed)) {
      next()
    } else {
      sendError(req, res)
    }
  }
}

function authorizeAny (...allowed) {
  return (req, res, next) => {
    if (req.perfil && isAllowedAny(req.perfil.roles, allowed)) {
      next()
    } else {
      sendError(req, res)
    }
  }
}

module.exports = {
  all: authorizeAll,
  atLest: authorizeAny
}
