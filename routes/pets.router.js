const express = require('express')

const petsController = require('./../controllers/pets.controller')

const router = express.Router()

router.route('/').get(petsController.getPets)

router.route('/types').get(petsController.getPetsTypes)

module.exports = router
