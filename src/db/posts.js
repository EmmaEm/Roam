const db = require('./db')
const pgp = require('pg-promise')()

getByUsername = (username) => {
  return db.query(`
    SELECT * FROM posts
    JOIN users
    ON users.id = posts.user_id
    WHERE users.username = $1
    `, [username])
    .catch((error) => {
      console.log("\nError in posts.getByUsername query\n")
      throw error
    })
}

module.exports = {
  getByUsername,
}
