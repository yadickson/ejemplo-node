'use strict'

const constants = require('../constants/constants')

const options = {
  swaggerDefinition: {
    info: {
      description: 'This is a sample server',
      title: 'Swagger',
      version: '1.0.0'
    },
    produces: ['application/json', 'application/xml'],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: constants.JWT,
        description: 'JWT value'
      }
    }
  },
  basedir: __dirname,
  files: ['../models/**/*.js', '../routes/**/*.js'],
  route: { url: '/api-docs', docs: '/docs.json' }
}

module.exports = function (app) {
  const swagger = require('express-swagger-generator')(app)
  swagger(options)
}
