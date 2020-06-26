import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import MD5 from 'crypto-js/md5'

import { Form, Input, Button, Row, Col } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import { validatePassword } from '../../utils/validate'

import Code from '../../components/code'

import { register } from '../../redux/account/actions'

import logoImg from '../../assets/img/logo.svg'

export default function Register(props) {
  const [form] = Form.useForm()

  const [username, setUsername] = useState(null)
  const module = props.match.path.slice(1)

  const dispatch = useDispatch()

  const onFinish = values => {
    dispatch(
      register({
        data: {
          username: values.username,
          password: MD5(values.password).toString(),
          code: values.code
        },
        cb: () => {
          form.resetFields()
        }
      })
    )
  }

  function changeUsername(e) {
    setUsername(e.target.value)
  }

  return (
    <div className='form-wrapper'>
      <div style={{ textAlign: 'center', paddingBottom: '40px' }}>
        <img src={logoImg} className='logo' alt='logo' />
        <span className='logo-text'>React Back</span>
      </div>
      <div className='form-header'>
        注册新用户
        <span>
          <Link to='/login'>登录</Link>
        </span>
      </div>
      <div className='form-content'>
        <Form form={form} name='normal_login' initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item
            name='username'
            rules={[
              {
                required: true,
                message: '用户名不能为空'
              },
              {
                type: 'email',
                message: 'email格式不正确'
              }
            ]}>
            <Input onChange={changeUsername} size='large' prefix={<UserOutlined />} placeholder='邮箱' />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: '密码不能为空'
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  const pcofirmValue = getFieldValue('pconfirm')

                  if (!validatePassword(value)) {
                    return Promise.reject('密码格式不正确')
                  }

                  if (pcofirmValue && value !== pcofirmValue) {
                    return Promise.reject('两次密码不一致')
                  }

                  return Promise.resolve()
                }
              })
            ]}>
            <Input.Password size='large' prefix={<LockOutlined />} placeholder='输入密码' />
          </Form.Item>
          <Form.Item
            name='pconfirm'
            rules={[
              {
                required: true,
                message: '密码不能为空'
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject('两个密码不一致')
                }
              })
            ]}>
            <Input.Password size='large' prefix={<LockOutlined />} placeholder='确认密码' />
          </Form.Item>
          <Form.Item
            name='code'
            rules={[
              {
                required: true,
                message: '验证码不能为空'
              },
              {
                len: 6,
                message: '请输入6位验证码'
              }
            ]}>
            <Row justify='space-between' gutter={14}>
              <Col span={15}>
                <Input size='large' prefix={<LockOutlined />} placeholder='验证码' />
              </Col>
              <Col span={9}>
                <Code username={username} time={60} module={module} />
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
