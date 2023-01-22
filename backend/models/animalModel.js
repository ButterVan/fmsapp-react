const mongoose = require('mongoose')

const animalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
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
