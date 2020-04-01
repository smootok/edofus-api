const mongoose = require('mongoose')

const weaponSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, 'Weapon must have an ID']
  },
  url: {
    type: String,
    required: [true, 'Weapon must have a name'],
    trim: true
  },
  name: {
    type: String,
    required: [true, 'Weapon must have a name']
  },
  level: {
    type: Number,
    required: [true, 'Weapon must have a level']
  },
  description: {
    type: String,
    trim: true
  },
  effects: {
    type: [Object],
    required: [true, 'Weapon must have at least one effect']
  },
  conditions: String,
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  }
})

const Weapon = mongoose.model('Weapon', weaponSchema)

module.exports = Weapon
