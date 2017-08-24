const user = require('../../db/user.js')
const router = require('express').Router()

router.get('/profile/:username', (req, res) => {
  const id = req.params.username

})

module.exports = router
