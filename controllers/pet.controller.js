const Pet = require('../models/pet.model')
const APIFeatures = require('../utils/api-features')
const catchAsync = require('./../utils/catch-async')

exports.getPets = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Pet.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate()
  const pets = await features.query

  return res.status(200).json({
    status: 'success',
    results: pets.length,
    data: pets
  })
})

exports.getPetsTypes = catchAsync(async (req, res, next) => {
  const types = await Pet.find().distinct('type')
  return res.status(200).json({
    status: 'success',
    results: types.length,
    data: types
  })
})
