const Item = require('../models/item.model')
const APIFeatures = require('../utils/api-features')

exports.getItems = async (req, res) => {
  try {
    const features = new APIFeatures(Item.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate()
    const items = await features.query

    return res.status(200).json({
      status: 'success',
      results: items.length,
      data: items
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}
