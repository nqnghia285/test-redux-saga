import { KeyOutlined, UserOutlined } from '@ant-design/icons'
import { Alert, Button, Form, Input } from 'antd'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '~/app/hooks'
import { LoginPayload } from '~/interface'
import { loginActions } from './login.slice'

export default function Login() {
   const dispatch = useAppDispatch()
   const loginState = useAppSelector((state) => state.loginState)

   function onFinish(values: LoginPayload) {
      console.log('Dispatch login action with payload: ', values)
      dispatch(loginActions.login(values))
   }

   function onFinishFailed(errorInfo: any) {
      console.log('Form format is invalid')
   }

   function handleLogout() {
      console.log('Dispatch logout action')
      dispatch(loginActions.logout())
   }

   useEffect(() => {
      console.log('Profile', loginState.profile)
   }, [loginState])

   return (
      <div className='flex flex-col justify-center items-center space-y-3 py-3 bg-purple-700'>
         <h2 className='text-white text-xl uppercase bg-slate-900 rounded-lg px-14'>
            Login
         </h2>
         <Form
            name='login'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className='flex flex-col rounded-lg bg-slate-900 p-3 space-y-4'
         >
            <Form.Item
               label={<span className='text-white'>Username</span>}
               name='username'
               rules={[
                  { required: true, message: 'Please input your username!' },
                  {
                     type: 'email',
                     message: `Please input your username following the email address format.`,
                  },
               ]}
            >
               <Input prefix={<UserOutlined />} placeholder='Username' />
            </Form.Item>

            <Form.Item
               label={<span className='text-white'>Pasword</span>}
               name='password'
               rules={[
                  { required: true, message: 'Please input your password!' },
                  {
                     min: 6,
                     message: `The minimum length of the password must be 6`,
                  },
                  {
                     max: 16,
                     message: `The maximum length of the password must be 16`,
                  },
               ]}
            >
               <Input
                  prefix={<KeyOutlined />}
                  type='password'
                  placeholder='Password'
               />
            </Form.Item>
            <Button type='primary' htmlType='submit' className=''>
               Login
            </Button>
            <Alert
               message={
                  loginState.isLogined ? 'Login successfully' : 'Login failed'
               }
               type={loginState.isLogined ? 'success' : 'error'}
               showIcon
               closable={false}
            />
            <Button
               type='primary'
               onClick={handleLogout}
               className='text-red-500'
            >
               Logout
            </Button>
         </Form>
      </div>
   )
}
