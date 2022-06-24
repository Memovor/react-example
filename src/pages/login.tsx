import * as React from 'react'
import '@/common/css/login.less'
import { Form, Button, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { post } from '../api/request'
import { useHistory } from 'react-router-dom'
import { useMenuDispatchEffect } from 'hooks/menu/effect'
import { FormattedMessage, useIntl } from 'react-intl'
import { IntlMessage } from 'language/type'
import { messages } from 'language/intl'
import { setStorage } from 'lib/untils'
import MenuInfo from 'common/js/menu'
import { MenuType } from 'types/menu'


const Login = () => {
  const intl = useIntl()
  const history = useHistory()
  // redux菜单栏
  const [menuInfo, setMenuInfo] = useMenuDispatchEffect()

  const getIntl = (intlName: IntlMessage) => intl.formatMessage(messages[intlName])


  const onFinish = (values: any) => {
    post('/user/login', values).then(res => {
      const data = res.data || {}
      const { sessionId, menu } = data
      const { username }: { username: MenuType } = values
      setStorage('sessionId', sessionId)
      setMenuInfo(MenuInfo[username] || menu)
      setStorage('menu', MenuInfo[username] || menu)
      history.push('/home')
    }, err => {
      console.log('登录出错了', err)
    })
  }

  return (
    <div className="login-wrapper">
      <header className='header'>
        <img src="http://1.202.166.1:8180/cas/images/logo.png" />
        <span className='title'>业务组件集成管理系统</span>
      </header>
      <div className='container'>
        <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
        >
          <FormattedMessage
            id="formTitle"
          >
            {(txt: string) => <h3 className="form-title">{txt}</h3>}
          </FormattedMessage>
          <Form.Item
            name="username"
            rules={[{ required: true, message: getIntl('usernameTip') }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder={getIntl('username')} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: getIntl('passwordTip') }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder={getIntl('password')}
            />
          </Form.Item>
          <Form.Item>
            <FormattedMessage
              id="formTitle"
            >
              {(txt: string) => <Button type="primary" htmlType="submit" className="login-form-button">{txt}</Button>}
            </FormattedMessage>

          </Form.Item>
          <Form.Item>
            <p className="tip">{`${getIntl('username')}：admin ${getIntl('password')}：${getIntl('passwordContent')}  (${getIntl('admin')})`}</p>
            <p className="tip">{`${getIntl('username')}：editor ${getIntl('password')}：${getIntl('passwordContent')}  (${getIntl('editor')})`}</p>
          </Form.Item>
        </Form>
      </div>
      <footer className='footer'>
          © 2022 vsersionW 版权所有
      </footer>
    </div>
  )
}

export default Login