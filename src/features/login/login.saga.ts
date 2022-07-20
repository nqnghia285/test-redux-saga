import { ApolloQueryResult } from '@apollo/client'
import { call, delay, put, takeEvery, takeLeading } from 'redux-saga/effects'
import { LoginPayload, Response, UserInfo } from '~/interface'
import { apolloClient, LOGIN } from '~/utils'
import { loginActions } from '..'

export function* login(payload: LoginPayload) {
   const res: ApolloQueryResult<{
      logIn: Response<{
         profile: UserInfo
         accessToken: string
      } | null>
   }> = yield call(apolloClient.query, {
      query: LOGIN,
      fetchPolicy: 'network-only',
      variables: payload,
   })

   return res
}

export function* handleLogin({
   payload,
}: ReturnType<typeof loginActions.login>) {
   try {
      const {
         data: { logIn },
      }: ApolloQueryResult<{
         logIn: Response<{
            profile: UserInfo
            accessToken: string
         } | null>
      }> = yield call(login, payload)

      console.log('Response', logIn)

      if (logIn?.isSuccess) {
         yield put(loginActions.loginSuccess(logIn.data!))
      } else {
         yield put(
            loginActions.loginFailed({
               action: 'logIn',
               isSuccess: false,
               data: null,
               errors: [],
               message: 'Login failed',
            })
         )
      }
   } catch (error) {
      yield put(
         loginActions.loginFailed({
            action: 'logIn',
            isSuccess: false,
            data: null,
            errors: [error],
            message: 'Login failed',
         })
      )
   }
}

export function* loginSaga() {
   yield takeLeading(loginActions.login, handleLogin)
}
