const Build = require('../models/build.model')
const APIFeatures = require('../utils/api-features')
const catchAsync = require('./../utils/catch-async')
const AppError = require('./../utils/app-error')

exports.saveBuild = catchAsync(async (req, res, next) => {
  const build = await Build.create({
    name: req.body.name,
    build: req.body.build,
    user: req.user
  })

  res.status(201).json({
    status: 'success',
    data: {
      data: build
    }
  })
})

exports.removeBuild = catchAsync(async (req, res, next) => {
  const build = await Build.findOneAndDelete({
    user: req.user,
    _id: req.params.id
  })

  if (!build) {
    return next(new AppError('No build found with that ID', 404))
  }

  res.status(204).json({
    status: 'success',
    data: null
  })
})

exports.editBuild = catchAsync(async (req, res, next) => {
  const build = await Build.findOneAndUpdate(
    {
      user: req.user,
      _id: req.params.id
    },
    req.body,
    {
      new: true,
      runValidators: true
    }
  )

  if (!build) {
    return next(new AppError('No build found with that ID', 404))
  }

  res.status(204).json({
    status: 'success',
    data: {
      data: build
    }
  })
})

exports.getBuilds = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Build.find({ user: req.user }), req.query)
    .filter()
    .sort()
    .limitFields()

  const builds = await features.query

  return res.status(200).json({
    status: 'success',
    results: builds.length,
    data: builds
  })
})
