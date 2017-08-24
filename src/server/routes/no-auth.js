const userQueries = require('../../db/user-queries.js')
const router = require('express').Router()

createUserSession = (req, res, user) => {
  req.session.user = user
        // console.log("user: ", user)
}

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
    userQueries.createUser(name, email, password)
      .then(res.redirect('/login'))
  })

router.route('/login')
 .get((req, res) => {
    res.render('login')
  })
 .post((req, res) => {
   const email = req.body.email
   const password = req.body.password
   userQueries.getUserInfo(email)
    .then(user => {
      if (password === user.password) {
        createUserSession(req, res, user)
        // NOTE: this should redirect to the profile page once there is one:
        res.send('you logged in')
      }
      else {
        res.send('sorry, wrong password')
      }

    })

  })

  module.exports = router
