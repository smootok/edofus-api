const express = require('express')

const encyclopediaController = require('./../controllers/encyclopedia.controller')

const router = express.Router()

router
  .route('/equipment')
  .get(encyclopediaController.getEquipment)

module.exports = router
