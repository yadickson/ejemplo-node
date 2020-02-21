'use strict'

function initialize (app) {
  const oneController = require('../controllers/one.controller')
  const constants = require('../constants/constants')
  const base = constants.ONE_PAGE
  const authenticate = require('../middleware/authenticate')
  const authorize = require('../middleware/authorize')

  /**
   * Obtener todas las tareas.
   * Permisos ['READ']
   *
   * @group OneController - Operaciones de usuarios
   * @route GET /one
   * @returns {object} 200 - An array of user info
   * @returns {error.model}  default - Unexpected error
   * @security JWT
   */
  app
    .route(base)
    .get(authenticate, authorize.all('READ'), oneController.getAllTask)

  /**
   * Crear una tarea.
   * Permisos ['WRITE']
   *
   * @group OneController - Operaciones de usuarios
   * @route POST /one
   * @returns {object} 200 - An array of user info
   * @returns {error.model}  default - Unexpected error
   * @security JWT
   */
  app
    .route(base)
    .post(authenticate, authorize.all('WRITE'), oneController.postOneTask)

  /**
   * Obtener una tarea.
   * Permisos ['READ']
   *
   * @group OneController - Operaciones de usuarios
   * @route GET /one
   * @param {string} taskId.query.required - Number task id
   * @returns {object} 200 - An array of user info
   * @returns {Error}  default - Unexpected error
   * @security JWT
   */
  app
    .route(base + '/:taskId')
    .get(authenticate, authorize.all('READ'), oneController.getOneTask)

  /**
   * Actualizar una tarea.
   * Permisos ['UPDATE']
   *
   * @group OneController - Operaciones de usuarios
   * @route PUT /one
   * @returns {object} 200 - An array of user info
   * @returns {error.model}  default - Unexpected error
   * @security JWT
   */
  app
    .route(base + '/:taskId')
    .put(authenticate, authorize.all('UPDATE'), oneController.updateOneTask)

  /**
   * Eliminar una tarea.
   * Permisos ['DELETE']
   *
   * @group OneController - Operaciones de usuarios
   * @route DELETE /one
   * @returns {object} 200 - An array of user info
   * @returns {error.model}  default - Unexpected error
   * @security JWT
   */
  app
    .route(base + '/:taskId')
    .delete(authenticate, authorize.all('DELETE'), oneController.deleteOneTask)
}

module.exports = initialize
