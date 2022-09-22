import { gql } from "@apollo/client";

export const users = gql`
  query GetUser {
    users {
      _id
      username
      password
      email
    }
  }
`;

export const user = gql`
  query GetUser($id: String!) {
    user(id: $id) {
      _id
      username
      password
      email
    }
  }
`;

export const removeUser = gql`
  mutation ($id: String!) {
    remove(id: $id) {
      text
    }
  }
`;

export const registerUser = gql`
  mutation ($registerInput2: UserInput!) {
    register(input: $registerInput2) {
      _id
      username
      email
      password
    }
  }
`;
export const updateUser = gql`
  mutation ($id: String!, $registerInput2: UserInput!) {
    update(id: $id, input: $registerInput2) {
      _id
      username
      email
      password
    }
  }
`;
