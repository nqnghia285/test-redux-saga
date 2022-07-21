import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
   LoginPayload,
   LoginSuccess,
   LSKeys,
   Response,
   UserInfo,
} from '~/interface'

export type LoginState = { isLogined: boolean; profile: UserInfo | null }

const loginSlice = createSlice({
   initialState: {
      isLogined: Boolean(localStorage.getItem(LSKeys.PROFILE)),
      profile: localStorage.getItem(LSKeys.PROFILE),
   } as LoginState,
   name: 'loginState',
   reducers: {
      login: (state: LoginState, action: PayloadAction<LoginPayload>) => {},
      loginSuccess: (
         state: LoginState,
         { payload: { accessToken, profile } }: PayloadAction<LoginSuccess>
      ) => {
         state.profile = profile
         state.isLogined = true
         localStorage.setItem(LSKeys.AUTHORIZATION, accessToken)
         localStorage.setItem(LSKeys.PROFILE, JSON.stringify(profile))

         console.log('loginSuccess with response:', { accessToken, profile })
      },
      loginFailed: (state: LoginState, action: PayloadAction<Response>) => {
         console.log('loginFailed with payload:', action.payload)
         state.profile = null
         state.isLogined = false
         localStorage.removeItem(LSKeys.PROFILE)
         localStorage.removeItem(LSKeys.AUTHORIZATION)
      },
      logout: (state: LoginState) => {},
      logoutSuccess: (state: LoginState, action: PayloadAction<Response>) => {
         console.log('logoutSuccess with response:', action.payload)
         state.profile = null
         state.isLogined = false
         localStorage.removeItem(LSKeys.PROFILE)
         localStorage.removeItem(LSKeys.AUTHORIZATION)
      },
      logoutFailed: (state: LoginState, action: PayloadAction<Response>) => {
         console.log('logoutFailed with response:', action.payload)
      },
   },
})

export const loginActions = loginSlice.actions
export const loginReducer = loginSlice.reducer
