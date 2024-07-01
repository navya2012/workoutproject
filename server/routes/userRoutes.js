
const express = require('express')

const router = express.Router()

const { loginDetails, signUpDetails, signUpValidationRules} = require('../controllers/userController')

router.post('/login', loginDetails)

router.post('/signup', signUpValidationRules, signUpDetails )

module.exports = router 