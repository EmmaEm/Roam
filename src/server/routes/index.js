const router = require('express').Router()
const noAuth = require('./no-auth')
const user = require('./user')
const userQueries = require('../../db/user.js')

router.use('/', noAuth)

router.use('/', user)

module.exports = router
