const express = require('express')

const equipmentController = require('./../controllers/equipment.controller')

const router = express.Router()

router.route('/').get(equipmentController.getEquipment)

router.route('/types').get(equipmentController.getEquipmentTypes)

module.exports = router
