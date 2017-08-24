const router = require('express').Router()
const noAuth = require('./no-auth')

router.use('/', noAuth)

module.exports = router
