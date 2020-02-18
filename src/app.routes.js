'use strict'

module.exports = function (app) {
  const oneController = require('./controller/one.controller')

  app
    .route('/one')
    .get(oneController.getAllTask)
    .post(oneController.postOneTask)

  app
    .route('/one/:taskId')
    .get(oneController.getOneTask)
    .put(oneController.updateOneTask)
    .delete(oneController.deleteOneTask)
}
