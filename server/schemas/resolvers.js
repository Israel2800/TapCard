const { AuthenticationError } = require('apollo-server-express');
const { User, Card, Major } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    majors: async () => {
      return await Major.find();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('cards')

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    cards: async (parent, { major, name }) => {
      const params = {};

      if (major) {
        params.major = major;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Card.find(params).populate('major');
    },
    card: async (parent, { _id }) => {
      return await Card.findById(_id).populate('major');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'comments.cards',
          populate: 'major'
        });

        user.comments.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    comment: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.cards',
          populate: 'major'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { cards }, context) => {
      console.log(context);
      if (context.user) {
        const comment = new Order({ cards });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateCard: async (parent, { _id, facebook }) => {
      const decrement = Math.abs(facebook) * -1;

      return await Card.findByIdAndUpdate(_id, { $inc: { facebook: decrement } }, { new: true });
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
