const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID
    name: String
    email: String
    cards: [Card]
  }

  type Card {
    _id: ID
    name: String
    description: String
    image: String
    linkedIn: String
    facebook: String
    gitHub: String
    username: String
    comments: [Comment]
    major: [Major]
  }

  type Major {
    _id: ID
    name: String
  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }

  type Query {
    me: User
    users: [User] 
    user(username: String!): User
    major: [Major]
    comments: [Comment]
    cards(username: String): [Card]
    card(_id: ID!): Card
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addCard(Name: String!, image: String!, major: String!, description: String!, linkedIn: String!, facebook: String!, gitHub: String!): Card
    updateUser(name: String, email: String, password: String): User
    updateCard(_id: ID!, facebook: Int!): Card
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
