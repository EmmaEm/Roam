const db = require('./db')
const pgp = require('pg-promise')()

const userQueries = {
  createUser: (name, email, password) => {
    return db.query(`
      INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING id`,
      [name, email, password])
    .then(pgp.end())
    .catch((error) => {
      console.log("\nError in user-queries.js createUser\n")
      throw error
    })
  }
}

module.exports = userQueries
