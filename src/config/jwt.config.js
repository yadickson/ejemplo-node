'use strict'

const expressJwt = require('express-jwt')
const constants = require('../constants/constants')
const jwt = require('../security/jwt')

function checkToken (req, payload, done) {
  const token = req.headers[constants.JWT]
  const perfil = jwt.verify(token)
  console.log('perfil', perfil)
  console.log('req', req)
  console.log('payload', payload)
  done(null, true)
}

function getToken (req) {
  const perfil = jwt.verify(req.headers[constants.JWT])

  console.log(perfil)
  if (!perfil) {
    return null
  }

  return jwt.generate(perfil)
}

function findToken (req, res, next) {
  let token = req.headers[constants.JWT]

  if (token) {
    const perfil = jwt.verify(token)

    if (perfil) {
      token = jwt.generate(perfil)
      res.header(constants.JWT, token)
    }
  }

  next()
}

module.exports = function (app) {
  const jwt = expressJwt({
    secret: checkToken,
    credentialsRequired: true,
    getToken: getToken
  }).unless({
    path: [constants.BASE_PATH, constants.LOGIN_PATH]
  })

  app.all('*', findToken)
  // app.use(jwt)
}
