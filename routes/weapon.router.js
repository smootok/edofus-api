const express = require('express')

const weaponController = require('./../controllers/weapon.controller')

const router = express.Router()

router.route('/').get(weaponController.getWeapons)

router.route('/types').get(weaponController.getWeaponsTypes)

module.exports = router
