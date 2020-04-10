const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, 'Pet must have an ID']
  },
  url: {
    type: String,
    required: [true, 'Pet must have a name'],
    trim: true
  },
  name: {
    type: String,
    required: [true, 'Pet must have a name']
  },
  level: {
    type: Number,
    required: [true, 'Pet must have a level']
  },
  description: {
    type: String,
    trim: true
  },
  effects: {
    type: [Object],
    required: [true, 'Pet must have at least one effect']
  },
  conditions: String,
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  }
})

const Pet = mongoose.model('Pet', PetSchema)

module.exports = Pet
