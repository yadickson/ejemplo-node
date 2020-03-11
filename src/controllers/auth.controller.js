'use strict'

const authService = require('src/services/auth.service')
const jwt = require('src/security/jwt')
const constants = require('src/constants/constants')

function login (req, res, next) {
  const perfil = authService.login(req.body)
  const token = jwt(perfil)
  res.header(constants.JWT, token)
  res.status(200).json(perfil)
}

function logout (req, res, next) {
  res.header(constants.JWT, null)
  res.status(200).send({ message: `Close session ${req.perfil.user} OK` })
}

module.exports = {
  login,
  logout
}
