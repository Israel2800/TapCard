import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CARD = gql`
  mutation addCard($cardName: String!, $image: file!, $field: String!, $description: String!, $linkedInLink: String!, $facebook: String!, $gitHub: String!) {
    addCard(cardName: $cardName, image: $image, field: $field, description: $description, linkedIn: $linkedIn, facebook: $facebook, gitHub: $gitHub) {
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
