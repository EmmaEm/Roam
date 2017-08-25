const user = require('../../db/user.js')
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
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    user.create(name, username, email, password)
      .then(res.redirect('/login'))
  })

router.route('/login')
  .get( (req, res) => res.render('login') )
  .post( (req, res) => {
    const username = req.body.username
    const password = req.body.password
    user.getByUsername(username)
      .then(user => {
        if (password === user.password) {
          req.session.user = user
          res.redirect(`/profile/${username}`)
        }
        else res.send('sorry, wrong password')
      })
  })

router.route('/logout')
  .get((req, res) => {
    req.session.destroy()
    res.redirect('/')
  })

router.get('/profile/:username', (req, res) => {
  const username = req.params.username
  user.getByUsername(username)
    .then(user => res.render('profile', {user}))
    .catch(error => console.log(error))
})

module.exports = router
