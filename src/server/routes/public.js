const createUser = require('../../db/user-queries.js')
const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('splash-page')
})

router.route('/signup')
  .get((req, res) => {
    res.render('signup')
  })
  .post((req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    createUser(name, email, password)
      .then(res.send('You Signed Up'))
      .catch((error) => {
        console.log("\nError in createUser query\n")
        throw error
      })
  })

router.route('/login')
 .get((req, res) => {
    res.render('login')
  })
 .post((req, res) => {
   res.send('you logged in')
  })

  module.exports = router
