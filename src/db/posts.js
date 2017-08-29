const db = require('./db')
const pgp = require('pg-promise')()

getByPostId = (id) => {
  return db.one(`SELECT * FROM posts JOIN users ON users.user_id = posts.user_id WHERE post_id = $1`, [id])
  .catch((error) => {
    console.log("\nError in posts.getByPostId\n")
    throw error
  })
}

module.exports = {
  getByPostId
}
