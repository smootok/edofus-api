const Equipment = require('../models/equipment.model')
const APIFeatures = require('../utils/api-features')
const catchAsync = require('./../utils/catch-async')

exports.getEquipment = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Equipment.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate()
  const equipment = await features.query

  return res.status(200).json({
    status: 'success',
    results: equipment.length,
    data: equipment
  })
})

exports.getEquipmentTypes = catchAsync(async (req, res, next) => {
  const types = await Equipment.find().distinct('type')
  return res.status(200).json({
    status: 'success',
    results: types.length,
    data: types
  })
})
