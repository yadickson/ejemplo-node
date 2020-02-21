'use strict'

module.exports = function (context, app) {
  const swagger = require('express-swagger-generator')(app)
  const constants = require('../constants/constants')

  const options = {
    swaggerDefinition: {
      info: {
        description: 'This is a sample server',
        title: 'Swagger',
        version: '1.0.0'
      },
      basePath: context,
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
    route: { url: context + '/api-docs', docs: context + '/docs.json' }
  }

  swagger(options)
}
