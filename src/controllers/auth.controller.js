'use strict'

function login (req, res, next) {
  const login = req.body
  res.status(200).json(login)
}

function logout (req, res, next) {
  res.status(200).send({ message: 'OK' })
}

module.exports = {
  login: login,
  logout: logout
}
