'use strict'

const jwt = require('jsonwebtoken')
const cert = require('src/helpers/cert.helper')
const constants = require('src/constants/constants')

function generate (perfil) {
  const token = jwt.sign(
    { sub: perfil.user, perfil: perfil },
    cert.getPrivateKey(),
    {
      algorithm: constants.EC_ALGORITHM
    }
  )
  return token
}

module.exports = generate
