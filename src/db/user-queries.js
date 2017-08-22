const db = require('./db')

const userQueries = {
  createUser: (name, email, password) => {
    return db.one(`
      INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING id`,
      [name, email, password])
    .catch((error) => {
      console.log("Error in user-queries.js userQueries")
      throw error
    })
  }
}

userQueries.createUser('name', 'stuff@gmail.com', "abc")

module.exports = userQueries
