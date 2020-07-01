import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// antd
import { Form, Input, Button, Row, Col } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
// 表单验证
import { validatePassword } from '../../utils/validate'
// 验证码组件
import Code from '../../components/code'
// action
import { login } from '../../redux/account/actions'

// 导入图片&样式
import logoImg from '../../assets/img/logo.svg'
import './style.css'

export default function Login(props) {
  const dispatch = useDispatch()
  const [username, setUsername] = useState(null)
  // 获取发起验证码module
  const codeModule = props.match.path.slice(1)

  const onFinish = values => {
    // 点击登录
    dispatch(login(values))
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
      <div className='form-header'>用户登录</div>
      <div className='form-content'>
        <Form name='normal_login' initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item
            name='username'
            rules={[
              { required: true, message: '用户名不能为空' },
              { type: 'email', message: 'email格式不正确' }
            ]}>
            <Input onChange={changeUsername} size='large' prefix={<UserOutlined />} placeholder='用户名' />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              { required: true, message: '密码不能为空' },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!validatePassword(value)) {
                    return Promise.reject('密码格式不正确')
                  }

                  return Promise.resolve()
                }
              })
            ]}>
            <Input.Password size='large' prefix={<LockOutlined />} placeholder='请收入密码' />
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
                <Code username={username} time={5} module={codeModule} />
              </Col>
            </Row>
          </Form.Item>
          <Form.Item>
            <Button size='large' type='primary' htmlType='submit' block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
