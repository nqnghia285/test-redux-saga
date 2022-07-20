import { gql } from '@apollo/client'

export const LOGIN = gql`
   query ($username: String!, $password: String!) {
      logIn(username: $username, password: $password) {
         action
         isSuccess
         data
         message
         errors
      }
   }
`
