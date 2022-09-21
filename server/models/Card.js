const mongoose = require('mongoose');

const { Schema } = mongoose;

const cardSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  linkedIn: {
    type: String,
    required: true
  },
  facebook: {
    type: String,
    required: true
  },
  gitHub: {
    type: String,
    required: true
  },
  major: {
    type: Schema.Types.ObjectId,
    ref: 'Major',
    required: true
  },
  comment: {
    type: Schema.Types.ObjectId,
    ref: 'Comment',
  }

});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
