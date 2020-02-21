'use strict'

const perfil = require('../models/perfil.model')

function login ({ user, pass }) {
  perfil.user = user
  perfil.roles = ['READ', 'WRITE', 'UPDATE', 'DELETE']
  return perfil
}

function logout ({ token }) {}

module.exports = {
  login: login,
  logout: logout
}
