import { gql } from "@apollo/client";

export const getUsers = gql`
  query GetUser {
    getUsers {
      _id
      username
      password
      email
    }
  }
`;

export const getUser = gql`
  query GetUser($id: String!) {
    getUser(id: $id) {
      _id
      username
      password
      email
    }
  }
`;

export const removeUsers = gql`
  mutation ($id: String!) {
    removeUser(id: $id) {
      text
    }
  }
`;

export const registerUsers = gql`
  mutation ($input: UserInput!) {
    registerUser(input: $input) {
      _id
      username
      email
      password
    }
  }
`;
export const updateUsers = gql`
  mutation ($id: String!, $registerInput2: UserInput!) {
    updateUser(id: $id, input: $registerInput2) {
      _id
      username
      email
      password
    }
  }
`;
