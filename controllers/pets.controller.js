const Pet = require('../models/pet.model')
const APIFeatures = require('../utils/api-features')

exports.getPets = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}

exports.getPetsTypes = async (req, res) => {
  try {
    const types = await Pet.find().distinct('type')
    return res.status(200).json({
      status: 'success',
      results: types.length,
      data: types
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}
