const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const session = require('express-session')
const routes = require('./server/routes')note
const port = 3000

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(path.join(__dirname, '../public')))

app.use(bodyParser.urlencoded({extended: false}))

const sessionOptions = {
  name: 'session',
  secret: "Chamber of Secrets",
  cookie: { maxAge: 1000 * 60 * 60 * 24}
}

app.use(session(sessionOptions))

app.use('/', routes)

app.listen(port, () => console.log(`Express server listening on port ${port}`))
