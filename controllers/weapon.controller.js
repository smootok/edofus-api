const Weapon = require('../models/weapon.model')
const APIFeatures = require('../utils/api-features')

exports.getWeapons = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}

exports.getWeaponsTypes = async (req, res) => {
  try {
    const types = await Weapon.find().distinct('type')
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
