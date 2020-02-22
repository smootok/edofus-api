const express = require('express')

const itemController = require('./../controllers/item.controller')

const router = express.Router()

router
  .route('/')
  .get(itemController.getItems)

module.exports = router
