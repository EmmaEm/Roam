const db = require('./db')
const pgp = require('pg-promise')()

// NOTE: remove pgp.end and .catch once they are handled elsewhere

createUser = (name, email, password) => {
  return db.one(`
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING id`,
    [name, email, password])
}


module.exports = createUser
