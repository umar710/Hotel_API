const mongoose = require("mongoose");

const mongooseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const HotelSchemaData = mongoose.model("Hotel", mongooseSchema);
module.exports = HotelSchemaData;
