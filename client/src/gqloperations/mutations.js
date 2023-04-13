import { gql } from "@apollo/client"
export const SIGNUP_USER = gql`
mutation createUser($userNew: UserInput!){
    user:signUpUser(userNew: $userNew){
      firstName
    }
  }
`;

export const LOGIN_USER = gql`
mutation signInUser($userSignIn: UserSignInInput!){
    user:signInUser(userSignIn: $userSignIn){
      token
    }
  }
`;