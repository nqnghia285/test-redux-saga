export type Response<TData = any, TError = any> = {
   action: string
   isSuccess: boolean
   data?: TData
   errors?: readonly TError[]
   message?: string
}
