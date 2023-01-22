const mongoose = require('mongoose')

const animalSchema = mongoose.Schema(
  {
  text: {
    type: String,
    required: [true, 'please add a value'],
    }
  },
  {
    timeStamp: true,
  },
)

module.exports = mongoose.model('Animal', animalSchema)
