const router = require('express').Router()
const noAuth = require('./no-auth')
const userQueries = require('../../db/user.js')

router.use('/', noAuth)

module.exports = router
