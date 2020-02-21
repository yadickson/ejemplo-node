'use strict'

function initialize (app) {
  const baseController = require('../controllers/base.controller')
  const constants = require('../constants/constants')
  const base = constants.BASE_PATH
  const authenticate = require('../middleware/authenticate')
  const authorize = require('../middleware/authorize')

  /**
   * Obtener informacion inicio de aplicacion.
   *
   * @group BaseController - Operaciones de usuarios
   * @route GET /
   * @returns {task.model} 200 - Object representation
   * @returns {error.model}  500 - Unexpected error
   */
  app.route(base).get(baseController.init)

  /**
   * Obtener saludo de aplicacion.
   * Permisos ['READ']
   *
   * @group BaseController - Operaciones de usuarios
   * @route GET /hola
   * @returns {object} 200 - An array of user info
   * @returns {error.model}  error - Unexpected error
   * @security JWT
   */
  app
    .route(base + 'hola')
    .get(authenticate, authorize.all('READ'), baseController.helloWorld)
}

module.exports = initialize
