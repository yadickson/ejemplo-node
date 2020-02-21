'use strict'

const passport = require('passport')

function authenticate (req, res, next) {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    console.log(
      'ejecutando *callback auth* de authenticate para estrategia jwt'
    )

    console.log(err)
    console.log(user)
    console.log(info)
/*
    // si hubo un error relacionado con la validez del token (error en su firma, caducado, etc)
    if (info) {
      return next(new error_types.Error401(info.message))
    }

    // si hubo un error en la consulta a la base de datos
    if (err) {
      return next(err)
    }

    // si el token está firmado correctamente pero no pertenece a un usuario existente
    if (!user) {
      return next(new error_types.Error403('You are not allowed to access.'))
    }

    // inyectamos los datos de usuario en la request
    req.user = user
    */
    next()
  })(req, res, next)
}

module.exports = authenticate
