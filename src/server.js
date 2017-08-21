const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

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
		res.send('You Signed Up')
})

app.listen(port, () => console.log(`Express server listening on port ${port}`))
