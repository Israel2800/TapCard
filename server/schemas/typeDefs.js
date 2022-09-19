const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    cards: [Card]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    cards(username: String): [Card]
    card(_id: ID!): Card
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addCard(cardName: String!, image: String!, field: String!, description: String!, linkedIn: String!, facebook: String!, gitHub: String!): Card
  }

  type Card {
    _id: ID
    cardName: String
    image: String
    field: String
    description: String
    linkedIn: String
    facebook: String
    gitHub: String
    username: String
  }
`;

module.exports = typeDefs;
