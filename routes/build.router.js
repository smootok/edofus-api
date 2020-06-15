const express = require('express')

const buildController = require('./../controllers/build.controller')
const authController = require('./../controllers/auth.controller')

const router = express.Router()

router.route('/').post(authController.isLoggedIn, buildController.saveBuild)

router
  .route('/:id')
  .patch(authController.isLoggedIn, buildController.editBuild)
  .delete(authController.isLoggedIn, buildController.removeBuild)

router
  .route('/builds')
  .get(authController.isLoggedIn, buildController.getBuilds)

module.exports = router
