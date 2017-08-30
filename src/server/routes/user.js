const user = require('../../db/user.js')
const posts = require('../../db/posts.js')
const router = require('express').Router()

router.post('/profile/:username', (req, res) => {
  const username = req.params.username
  const name = req.body.name
  const current_city = req.body.current_city

  user.update(username, name, current_city)
    .then( res.redirect( `/profile/${username}` ) )
    .catch( error => console.log( 'error', error ) )
})

router.post('/city/:cityName', (req, res) => {
  const user_id = req.session.user.user_id
  const city_id = req.body.city_id
  const title = req.body.title
  const content = req.body.content
  posts.create(title, content, city_id, user_id)
    .then( res.redirect( `/city/${req.params.cityName}` ) )
})

module.exports = router
