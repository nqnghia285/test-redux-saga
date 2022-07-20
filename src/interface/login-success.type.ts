import { UserInfo } from './user-info.type'

export type LoginSuccess = {
   profile: UserInfo
   accessToken: string
}
