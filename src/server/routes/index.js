const router = require('express').Router()
const signupLogin = require('./signup-login')

router.use('/', signupLogin)
console.log(signupLogin)
