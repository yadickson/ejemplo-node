const NodeCache = require('node-cache')
const Cache = new NodeCache({ stdTTL: 100, checkperiod: 120 })
const ECKey = require('ec-key')
const constants = require('../constants/constants')

function getPrivateKey () {
  return Cache.get(constants.PRIVATE_KEY)
}

function getPublicKey () {
  return Cache.get(constants.PUBLIC_KEY)
}

function initialize () {
  const ECKey = require('ec-key')

  var privateKey = ECKey.createECKey(constants.EC_CURVE)
  var publicKey = privateKey.asPublicECKey()

  Cache.set(constants.PRIVATE_KEY, privateKey.toBuffer())
  Cache.set(constants.PUBLIC_KEY, publicKey.toBuffer())
}

module.exports = {
  getPrivateKey: getPrivateKey,
  getPublicKey: getPublicKey,
  initialize: initialize
}
