'use strict'

module.exports = function (app) {
  const parser = require('body-parser')

  app.use(
    parser.urlencoded({
      extended: false
    })
  )

  app.use(parser.json())
}
