const db = require('./db')
const pgp = require('pg-promise')()

getByPostId = (id) => {
  return db.one(`
    SELECT * FROM posts
    JOIN users USING(user_id)
    JOIN cities USING(city_id)
    WHERE post_id = $1`,
    [id])
  .catch((error) => {
    console.log("\nError in posts.getByPostId\n")
    throw error
  })
}

getByCity = (city) => {
  return db.query(`
    SELECT * FROM posts
    RIGHT OUTER JOIN cities USING(city_id)
    WHERE cities.city = $1
    ORDER BY post_id DESC`,
    [city])
  .catch((error) => {
    console.log("\nError in posts.getByCity\n")
    throw error
  })
}

create = (title, content, city_id, user_id) => {
  return db.none(`
    INSERT INTO posts (title, content, city_id, user_id)
    VALUES ($1, $2, $3, $4)`,
    [title, content, city_id, user_id])
    .catch((error) => {
      console.log("\nError in posts.create query\n")
      throw error
    })
}

module.exports = {
  create,
  getByPostId,
  getByCity
}
