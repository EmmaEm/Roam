const user = require('../../db/user.js')
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
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    user.create(name, username, email, password)
      .then(res.redirect('/login'))
  })

router.route('/login')
 .get((req, res) => {
    res.render('login')
  })
 .post((req, res) => {
   const username = req.body.username
   const password = req.body.password
   user.getByUsername(username)
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
