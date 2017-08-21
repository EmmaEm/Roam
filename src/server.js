const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
  res.render('splash-page')
})

const port = 3000
app.listen(port, () => console.log(`Express server listening on port ${port}`))
