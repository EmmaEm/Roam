const db = require('./db')
const pgp = require('pg-promise')()

createUser = (name, email, password) => {
  return db.one(`
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING id`,
    [name, email, password])
    .catch((error) => {
      console.log("\nError in createUser query\n")
      throw error
    })
}

getUserInfo = (email) => {
  return db.one(`
    SELECT * FROM users WHERE email = $1`,
    [email])
    .catch((error) => {
      console.log("\nError in getUserInfo query\n")
      throw error
    })
}

module.exports = {
  createUser,
  getUserInfo
}
