'use strict'

exports.getAllTask = function (req, res) {
  res.json({ message: 'Tasks' })
}

exports.postOneTask = function (req, res) {
  // const one = req.body
  // if (err) res.send(err)
  res.json({ message: 'Task successfully created' })
}

exports.getOneTask = function (req, res) {
  res.json({ message: 'Task successfully readed' })
}

exports.updateOneTask = function (req, res) {
  res.json({ message: 'Task successfully updated' })
}

exports.deleteOneTask = function (req, res) {
  res.json({ message: 'Task successfully deleted' })
}
