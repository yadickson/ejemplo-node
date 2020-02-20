'use strict'

function init (req, res, next) {
  res.send('Saludos desde express')
}

function helloWorld (req, res, next) {
  const params = req.query
  console.log(params)
  res.send('Hola ' + req.body)
}

module.exports = {
  init: init,
  helloWorld: helloWorld
}
