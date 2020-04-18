const Weapon = require('../models/weapon.model')
const APIFeatures = require('../utils/api-features')
const catchAsync = require('./../utils/catch-async')

exports.getWeapons = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Weapon.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate()
  const weapons = await features.query

  return res.status(200).json({
    status: 'success',
    results: weapons.length,
    data: weapons
  })
})

exports.getWeaponsTypes = catchAsync(async (req, res, next) => {
  const types = await Weapon.find().distinct('type')
  return res.status(200).json({
    status: 'success',
    results: types.length,
    data: types
  })
})
