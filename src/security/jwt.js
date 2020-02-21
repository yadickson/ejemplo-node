'use strict'

const jwt = require('jsonwebtoken')
const cert = require('../helpers/cert.helper')
const constants = require('../constants/constants')

function generate (perfil) {
  const token = jwt.sign(
    { sub: perfil.user, user: perfil },
    cert.getPrivateKey(),
    {
      algorithm: constants.EC_ALGORITHM
    }
  )
  return token
}

function verify (token) {
  try {
    const decode = jwt.verify(token, cert.getPublicKey(), {
      algorithm: constants.EC_ALGORITHM
    })
    return decode ? decode.user : null
  } catch (err) {
    console.log(err)
    return null
  }
}

module.exports = {
  generate: generate,
  verify: verify
}
