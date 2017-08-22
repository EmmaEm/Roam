const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const createUser = require('./db/user-queries.js')
const port = 3000

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.render('splash-page')
})

// Login Route
app.route('/login')
 .get((req, res) => {
    res.render('login')
  })
 .post((req, res) => {
   res.send('you logged in')
  })

  // Signup Route
app.route('/signup')
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

app.listen(port, () => console.log(`Express server listening on port ${port}`))
