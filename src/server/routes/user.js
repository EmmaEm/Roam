const user = require('../../db/user.js')
const router = require('express').Router()

router.post('/profile/:username', (req, res) => {
  const username = req.params.username
  const name = req.body.name
  const current_city = req.body.current_city

  user.update(username, name, current_city)
    .then( res.redirect( `/profile/${username}` ) )
    .catch( error => console.log( 'error', error ) )
})

module.exports = router
