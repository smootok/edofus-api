const Equipment = require('../models/equipment.model')
const APIFeatures = require('../utils/api-features')

exports.getEquipment = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}
