'use strict'

function getAllTask (req, res) {
  res.json({ message: 'Tasks' })
}

function postOneTask (req, res) {
  // const one = req.body
  // if (err) res.send(err)
  res.json({ message: 'Task successfully created' })
}

function getOneTask (req, res) {
  res.json({ message: 'Task successfully readed' })
}

function updateOneTask (req, res) {
  res.json({ message: 'Task successfully updated' })
}

function deleteOneTask (req, res) {
  res.json({ message: 'Task successfully deleted' })
}

module.exports = {
  getAllTask,
  postOneTask,
  getOneTask,
  updateOneTask,
  deleteOneTask
}
