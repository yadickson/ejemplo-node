'use strict'

async function getAll (callback) {
  try {
    const pool = require('src/helpers/pool.helper').getPool()
    var client = await pool.connect()
    var result = await client.query('select $1::text as name', ['brianc'])
    callback(null, result.rows)
  } catch (err) {
    callback(err)
  } finally {
    client.release()
  }
}

module.exports = {
  getAll
}
