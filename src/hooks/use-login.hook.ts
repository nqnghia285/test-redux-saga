import { useLazyQuery } from '@apollo/client'
import { LOGIN } from '~/utils'

export default function useLogin() {
   return useLazyQuery(LOGIN, {
      fetchPolicy: 'network-only',
   })
}
