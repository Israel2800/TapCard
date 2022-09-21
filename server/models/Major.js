const mongoose = require('mongoose');

const { Schema } = mongoose;

const majorSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Major = mongoose.model('Major', majorSchema);

module.exports = Major;
