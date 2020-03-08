const mongoose = require('mongoose')

const equipmentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, 'A tour must have an ID']
  },
  url: {
    type: String,
    required: [true, 'An item must have a name'],
    trim: true
  },
  name: {
    type: String,
    required: [true, 'An item must have a name']
  },
  level: {
    type: Number,
    required: [true, 'An item must have a level']
  },
  description: {
    type: String,
    trim: true
  },
  effects: {
    type: [Object],
    required: [true, 'An item must have at least one effect']
  },
  conditions: String,
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  }
})

const Equipment = mongoose.model('Equipment', equipmentSchema)

module.exports = Equipment
