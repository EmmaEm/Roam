const db = require('./db')
const pgp = require('pg-promise')()

getByPostId = (id) => {
  return db.one(`SELECT * FROM posts JOIN users ON users.user_id = posts.user_id WHERE post_id = $1`, [id])
  .catch((error) => {
    console.log("\nError in posts.getByPostId\n")
    throw error
  })
}

getByCity = (city) => {
  return db.query(`SELECT * FROM posts JOIN cities ON posts.city_id = cities.city_id WHERE posts.city = $1 ORDER BY post_id DESC`, [city])
  .catch((error) => {
    console.log("\nError in posts.getByCity\n")
    throw error
  })
}

module.exports = {
  getByPostId,
  getByCity
}
