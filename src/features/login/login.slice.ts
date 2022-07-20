import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
   LoginPayload,
   LoginSuccess,
   LSKeys,
   Response,
   UserInfo,
} from '~/interface'

const loginSlice = createSlice({
   initialState: null,
   name: 'profile',
   reducers: {
      login: (
         state: UserInfo | null,
         action: PayloadAction<LoginPayload>
      ) => {},
      loginSuccess: (
         state: UserInfo | null,
         { payload: { accessToken, profile } }: PayloadAction<LoginSuccess>
      ) => {
         state = profile
         localStorage.setItem(LSKeys.AUTHORIZATION, accessToken)
         localStorage.setItem(LSKeys.PROFILE, JSON.stringify(profile))

         console.log('loginSuccess', { accessToken, profile })
      },
      loginFailed: (
         state: UserInfo | null,
         action: PayloadAction<Response>
      ) => {
         console.log('loginFailed', action.payload)
      },
      logout: (state: UserInfo | null) => {
         state = null
         localStorage.setItem(LSKeys.PROFILE, '')
         localStorage.setItem(LSKeys.AUTHORIZATION, '')
      },
   },
})

export const loginActions = loginSlice.actions
export const loginReducer = loginSlice.reducer
