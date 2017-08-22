const db = require('./db')
const pgp = require('pg-promise')()

createUser = (name, email, password) => {
  return db.one(`
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING id`,
    [name, email, password])
}


module.exports = createUser
