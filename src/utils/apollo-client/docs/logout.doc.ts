import { gql } from '@apollo/client'

export const LOGOUT = gql`
   query {
      logOut {
         action
         isSuccess
         data
         message
         errors
      }
   }
`
