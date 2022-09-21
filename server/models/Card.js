const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');

const cardSchema = new Schema(
  {
    cardName: {
      type: String,
      required: 'You need to leave a thought!',
      minlength: 1,
      maxlength: 280
    },
    image: {
      type: String,
      required: true
    },
    field: {
      type: String,
      required: true
    },
    description: {
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
    username: {
        type: String,
        required: true
    },
    comments: [commentSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

cardSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

const Card = model('Card', cardSchema);

module.exports = Card;
