'use strict'

const perfil = require('../models/perfil.model')

function login ({ user, pass }) {
  perfil.user = user

  return perfil
}

function logout ({ token }) {}

module.exports = {
  login: login,
  logout: logout
}
