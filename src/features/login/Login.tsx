import { KeyOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import { useAppDispatch } from '~/app/hooks'
import { LoginPayload } from '~/interface'
import { loginActions } from './login.slice'

export default function Login() {
   const dispatch = useAppDispatch()

   function onFinish(values: LoginPayload) {
      console.log('onFinish', values)
      dispatch(loginActions.login(values))
   }

   function onFinishFailed(errorInfo: any) {
      console.log('onFinishFailed')
   }

   return (
      <div className='flex flex-col justify-center items-center space-y-3 py-3 bg-slate-400'>
         <h2 className='text-white text-xl uppercase'>Login</h2>
         <Form
            name='login'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className='flex flex-col rounded-lg bg-slate-900 p-3'
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
         </Form>
      </div>
   )
}
