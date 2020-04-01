const express = require('express')

const weaponsController = require('./../controllers/weapons.controller')

const router = express.Router()

router.route('/').get(weaponsController.getWeapons)

router.route('/types').get(weaponsController.getWeaponsTypes)

module.exports = router
