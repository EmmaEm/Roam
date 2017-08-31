const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const path = require('path')
const routes = require('./server/routes')
const port = process.env.PORT || 3000

const session = require('express-session')
const Simple = require('connect-pg-simple')(session)
// const connectionString = require('./db/db.js')


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(path.join(__dirname, '../public')))

app.use(bodyParser.urlencoded({extended: true}))

const sessionOptions = {
  store: new Simple({
  conString: 'postgres://localhost:5432/roam'
}),
  name: 'session',
  secret: "Chamber of Secrets",
  cookie: { maxAge: 1000 * 60 * 60 * 24},
  resave: false,
  saveUninitialized: false,
}

app.use(session(sessionOptions))

app.use('/', routes)

app.listen(port, () => console.log(`Express server listening on port ${port}`))
