import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getCards($major: ID) {
    cards(major: $major) {
      _id
      name
      description
      linkedIn
      facebook
      image
      major {
        _id
      }
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    cards {
      _id
      name
      description
      linkedIn
      facebook
      major {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    majors {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      name
      orders {
        _id
        purchaseDate
        cards {
          _id
          name
          description
          linkedIn
          facebook
          image
        }
      }
    }
  }
`;
