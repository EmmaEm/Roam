const user = require('../../db/user.js')
const router = require('express').Router()

router.get('/profile/:username', (req, res) => {
  const username = req.params.username
  user.getByUsername(username)
    .then(user => res.render('profile', {user}))
    .catch(error => console.log(error))
})

module.exports = router
