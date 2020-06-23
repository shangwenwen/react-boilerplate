import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Form, Input, Button, Row, Col } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import { validatePassword } from '../../utils/validate'

import Code from '../../components/code'

export default function Register() {
  const [username, setUsername] = useState(null)

  const onFinish = values => {
    // console.log('Received values of form: ', values)
  }

  function changeUsername(e) {
    setUsername(e.target.value)
  }

  return (
    <div className='form-wrapper'>
      <div>shang</div>
      <div className='form-header'>
        注册新用户
        <span>
          <Link to='/login'>登录</Link>
        </span>
      </div>
      <div className='form-content'>
        <Form name='normal_login' initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item
            name='username'
            rules={[
              { required: true, message: '用户名不能为空' },
              { type: 'email', message: 'email格式不正确' }
            ]}>
            <Input onChange={changeUsername} size='large' prefix={<UserOutlined />} placeholder='邮箱' />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              { required: true, message: '密码不能为空' },
              { pattern: validatePassword, message: '请输入数字或字母，不小于6位大于20位' }
              // { min: 6, message: '最少6位' },
              // { max: 20, message: '最多20位' }
            ]}>
            <Input.Password size='large' prefix={<LockOutlined />} placeholder='输入密码' />
          </Form.Item>
          <Form.Item
            name='pconfirm'
            rules={[
              { required: true, message: '密码不能为空' },
              { pattern: validatePassword, message: '请输入数字或字母，不小于6位大于20位' }
              // { min: 6, message: '最少6位' },
              // { max: 20, message: '最多20位' }
            ]}>
            <Input.Password size='large' prefix={<LockOutlined />} placeholder='确认密码' />
          </Form.Item>
          <Form.Item
            name='code'
            rules={[
              { required: true, message: '验证码不能为空' },
              { len: 6, message: '请输入6位验证码' }
            ]}>
            <Row justify='space-between' gutter={14}>
              <Col span={15}>
                <Input size='large' prefix={<LockOutlined />} placeholder='验证码' />
              </Col>
              <Col span={9}>
                <Code username={username} time={60} />
              </Col>
            </Row>
          </Form.Item>
          <Form.Item>
            <Button size='large' type='primary' htmlType='submit' block>
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
