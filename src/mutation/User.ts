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

export const removeUser = gql`
  mutation ($id: String!) {
    removeUser(id: $id) {
      _id
      username
      email
      password
    }
  }
`;

export const createUser = gql`
  mutation ($user: UserInput!) {
    createUser(user: $user) {
      _id
      username
      email
      password
    }
  }
`;
export const updateUser = gql`
  mutation ($id: String!, $user: UserInput!) {
    updateUser(id: $id, user: $user) {
      _id
      username
      email
      password
    }
  }
`;
