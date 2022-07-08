const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cowSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CowModel = mongoose.model("Cow", cowSchema);

module.exports = CowModel;
