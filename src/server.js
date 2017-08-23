const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const index = require('./server/routes/public')
const path = require('path')

const port = 3000

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(path.join(__dirname, '../public')))

app.use(bodyParser.urlencoded({extended: false}))
app.use('/', index)

app.listen(port, () => console.log(`Express server listening on port ${port}`))
