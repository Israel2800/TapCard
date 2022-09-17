import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      
    }
  }
`;

export const QUERY_CARD = gql`
  query card($id: ID!) {
    card(_id $id) {
        _id
        cardName
        image
        field
        description
        linkedIn
        facebook
        gitHub
    }
  }
`

export const QUERY_CARDS = gql`
query cards($username: String) {
    cards(username: $username) {
        _id
        cardName
        image
        field
        description
        linkedIn
        facebook
        gitHub
    }
}
`
