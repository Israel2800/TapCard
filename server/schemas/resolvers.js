const { AuthenticationError } = require('apollo-server-express');
const { User, Card, Major } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('cards')

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('cards')
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('cards');
    },
    majors: async () => {
      return await Major.find();
    },
    cards: async (parent, { major, username }) => {
      const params = {};

      if (major) {
        params.major = major;
      }

      if (username) {
        params.username = {
          $regex: username
        };
      }

      return await Card.find(params).populate('major');
    },
    card: async (parent, { _id }) => {
      return await Card.findById(_id).populate('major');
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addCard: async (parent, args, context) => {
      if (context.user) {
        const card = await Card.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { cards: card._id } },
          { new: true }
        );

        return card;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { cardId, commentBody }, context) => {
      if (context.user) {
        const updatedCard = await Card.findOneAndUpdate(
          { _id: cardId },
          { $push: { comments: { commentBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedCard;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    updateCard: async (parent, args, context) => {
      if (context.user) {
        return await Card.findOneAndUpdate(context.user._id, args, { new: true });
      } 
      
      throw new AuthenticationError('You need to be logged in!');
    },
    
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
