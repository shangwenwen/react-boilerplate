import React from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

// import './style.css'

export default function Register() {
  const onFinish = values => {
    console.log('Received values of form: ', values)
  }

  return (
    <div className='form-wrapper'>
      <div className='form-header'>
        新用户注册
        <span>
          <Link to='/login'>登录</Link>
        </span>
      </div>
      <div className='form-content'>
        <Form name='normal_login' className='login-form' initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item name='username' rules={[{ required: true, message: 'Please input your Username!' }]}>
            <Input size='large' prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Username' />
          </Form.Item>
          <Form.Item name='password' rules={[{ required: true, message: 'Please input your Password!' }]}>
            <Input size='large' prefix={<LockOutlined className='site-form-item-icon' />} type='password' placeholder='Password' />
          </Form.Item>
          <Form.Item name='confirm' rules={[{ required: true, message: 'Please input your Password!' }]}>
            <Input size='large' prefix={<LockOutlined className='site-form-item-icon' />} type='password' placeholder='Confirm Password' />
          </Form.Item>
          <Form.Item>
            <Row justify='space-between' gutter={14}>
              <Col span={15}>
                <Input size='large' prefix={<LockOutlined className='site-form-item-icon' />} placeholder='code' />
              </Col>
              <Col span={9}>
                <Button type='primary' size='large' danger block>
                  ddddddd
                </Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' block size='large'>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
