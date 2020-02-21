'use strict'

function initialize (app) {
  const baseController = require('../controllers/base.controller')
  const constants = require('../constants/constants')
  const base = constants.BASE_PATH

  /**
   * Obtener informacion inicio de aplicacion.
   *
   * @group base - Operaciones de usuarios
   * @route GET /
   * @returns {task.model} 200 - Object representation
   * @returns {error.model}  500 - Unexpected error
   */
  app.route(base).get(baseController.init)

  /**
   * Obtener informacion inicio de aplicacion.
   *
   * @group base - Operaciones de usuarios
   * @route GET /hola
   * @returns {object} 200 - An array of user info
   * @returns {error}  error - Unexpected error
   */
  app.route(base + 'hola').get(baseController.helloWorld)
}

module.exports = initialize
