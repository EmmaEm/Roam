const db = require('./db')
const pgp = require('pg-promise')()

create = (name, email, password) => {
  return db.one(`
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING id`,
    [name, email, password])
    .catch((error) => {
      console.log("\nError in create query\n")
      throw error
    })
}

getByEmail = (email) => {
  return db.one(`
    SELECT * FROM users WHERE email = $1`,
    [email])
    .catch((error) => {
      console.log("\nError in getByEmail query\n")
      throw error
    })
}

module.exports = {
  create,
  getByEmail
}
