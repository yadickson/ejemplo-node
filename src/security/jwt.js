'use strict'

const jwt = require('jsonwebtoken')
const cert = require('../helpers/cert.helper')
const constants = require('../constants/constants')

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
