'use strict'

function initialize (app) {
  const oneController = require('../controllers/one.controller')
  const constants = require('../constants/constants')
  const base = constants.ONE_PAGE
  const authenticate = require('../middleware/authenticate')
  const authorize = require('../middleware/authorize')

  /**
   * Obtener informacion inicio de aplicacion.
   *
   * @group OneController - Operaciones de usuarios
   * @route GET /one
   * @returns {object} 200 - An array of user info
   * @returns {error.model}  default - Unexpected error
   * @security JWT
   */
  app.route(base).get(authenticate, authorize.all('READ'), oneController.getAllTask)

  /**
   * Obtener informacion inicio de aplicacion.
   *
   * @group OneController - Operaciones de usuarios
   * @route POST /one
   * @returns {object} 200 - An array of user info
   * @returns {error.model}  default - Unexpected error
   * @security JWT
   */
  app.route(base).post(authenticate, oneController.postOneTask)

  /**
   * Obtener informacion inicio de aplicacion.
   *
   * @group OneController - Operaciones de usuarios
   * @route GET /one
   * @param {string} taskId.query.required - Number task id
   * @returns {object} 200 - An array of user info
   * @returns {Error}  default - Unexpected error
   * @security JWT
   */
  app.route(base + '/:taskId').get(authenticate, oneController.getOneTask)

  /**
   * Obtener informacion inicio de aplicacion.
   *
   * @group OneController - Operaciones de usuarios
   * @route PUT /one
   * @returns {object} 200 - An array of user info
   * @returns {error.model}  default - Unexpected error
   * @security JWT
   */
  app.route(base + '/:taskId').put(authenticate, oneController.updateOneTask)

  /**
   * Obtener informacion inicio de aplicacion.
   *
   * @group OneController - Operaciones de usuarios
   * @route DELETE /one
   * @returns {object} 200 - An array of user info
   * @returns {error.model}  default - Unexpected error
   * @security JWT
   */
  app.route(base + '/:taskId').delete(authenticate, oneController.deleteOneTask)
}

module.exports = initialize
