'use strict'

module.exports = function (app) {
  const oneController = require('../controllers/one.controller')
  const base = '/one'

  /**
   * Obtener informacion inicio de aplicacion.
   *
   * @group one - Operaciones de usuarios
   * @route GET /one
   * @returns {object} 200 - An array of user info
   * @returns {Error}  default - Unexpected error
   */
  app.route(base).get(oneController.getAllTask)

  /**
   * Obtener informacion inicio de aplicacion.
   *
   * @group one - Operaciones de usuarios
   * @route POST /one
   * @returns {object} 200 - An array of user info
   * @returns {Error}  default - Unexpected error
   */
  app.route(base).post(oneController.postOneTask)

  /**
   * Obtener informacion inicio de aplicacion.
   *
   * @group one - Operaciones de usuarios
   * @route GET /one
   * @param {string} taskId.query.required - Number task id
   * @returns {object} 200 - An array of user info
   * @returns {Error}  default - Unexpected error
   */
  app.route(base + '/:taskId').get(oneController.getOneTask)

  /**
   * Obtener informacion inicio de aplicacion.
   *
   * @group one - Operaciones de usuarios
   * @route PUT /one
   * @returns {object} 200 - An array of user info
   * @returns {Error}  default - Unexpected error
   */
  app.route(base + '/:taskId').put(oneController.updateOneTask)

  /**
   * Obtener informacion inicio de aplicacion.
   *
   * @group one - Operaciones de usuarios
   * @route DELETE /one
   * @returns {object} 200 - An array of user info
   * @returns {Error}  default - Unexpected error
   */
  app.route(base + '/:taskId').delete(oneController.deleteOneTask)
}
