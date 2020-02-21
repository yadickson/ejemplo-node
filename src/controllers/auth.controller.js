'use strict'

const authService = require('../services/auth.service')
const jwt = require('../security/jwt')
const constants = require('../constants/constants')

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
