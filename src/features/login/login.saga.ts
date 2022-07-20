import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, take, takeLeading } from 'redux-saga/effects'
import { LoginPayload, Response, UserInfo } from '~/interface'
import { apolloClient, LOGIN } from '~/utils'
import { loginActions } from '..'

export async function login(payload: LoginPayload) {
   try {
      const res = await apolloClient.query({
         query: LOGIN,
         fetchPolicy: 'network-only',
         variables: payload,
      })

      return res.data.logIn as Response<{
         profile: UserInfo
         accessToken: string
      }>
   } catch (error) {
      return {
         action: 'logIn',
         isSuccess: false,
         data: null,
         errors: [error],
         message: 'Login failed',
      } as Response
   }
}

export function* handleLogin({
   payload,
}: ReturnType<typeof loginActions.login>) {
   const res: Response<{
      profile: UserInfo
      accessToken: string
   }> = yield call(login, payload)

   console.log('Login Response:', res)

   if (res.isSuccess) {
      yield put(loginActions.loginSuccess(res.data!))
   } else {
      yield put(loginActions.loginFailed(res))
   }
}

export function* loginSaga() {
   while (true) {
      // Listen login action
      const action: PayloadAction<LoginPayload> = yield take(loginActions.login)
      yield call(handleLogin, action)

      // Listen logout action
      yield take(loginActions.logout)
      yield put(loginActions.logoutSuccess())
   }
}
