'use strict'

function initialize (app) {
  const authController = require('../controllers/auth.controller')
  const constants = require('../constants/constants')

  /**
   * Login.
   *
   * @group AuthController - Operaciones de autenticacion
   * @route POST /login
   * @param {login.model} login.body.required - informacion de autenticacion
   * @consumes application/json
   * @produces application/json
   * @returns {perfil.model} 200 - Informacion del perfil de usuario.
   * @returns {error.model}  500 - Unexpected error
   */
  app.route(constants.LOGIN_PATH).post(authController.login)

  /**
   * Logout.
   *
   * @group AuthController - Operaciones de autenticacion
   * @route POST /logout
   * @produces application/json
   * @returns {object} 200 - ok
   * @returns {error.model}  500 - Unexpected error
   * @security X-TOKEN
   */
  app.route(constants.LOGOUT_PATH).post(authController.logout)
}

module.exports = {
  initialize: initialize
}
