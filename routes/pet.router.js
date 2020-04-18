const express = require('express')

const petController = require('./../controllers/pet.controller')

const router = express.Router()

router.route('/').get(petController.getPets)

router.route('/types').get(petController.getPetsTypes)

module.exports = router
