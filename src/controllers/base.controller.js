'use strict'

exports.init = (req, res, next) => {
  res.send('Saludos desde express')
}

exports.helloWorld = (req, res, next) => {
  const params = req.query
  console.log(params)
  res.send('Hola ' + req.body)
}
