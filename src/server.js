const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
  res.render('splash-page')
})

app.get('/login', (req, res) => {
	res.render('login')
})

app.get('/signup', (req, res) => {
	res.render('signup')
})

app.listen(port, () => console.log(`Express server listening on port ${port}`))
