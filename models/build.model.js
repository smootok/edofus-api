const mongoose = require('mongoose')

const buildSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Build must have a name']
  },
  build: {
    type: String
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Build must belong to a user']
  }
}, { timestamps: true })

const Build = mongoose.model('Build', buildSchema)

module.exports = Build
