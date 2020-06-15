const express = require('express')

const authController = require('./../controllers/auth.controller')

const router = express.Router()

router.post('/sign-up', authController.signUp)
router.post('/sign-in', authController.signIn)
router.post('/authenticate', authController.authenticate)
router.post('/forgot-password', authController.forgotPassword)
router.patch('/reset-password/:token', authController.resetPassword)

module.exports = router
