import React, { Component } from 'react'
import 'antd-mobile/dist/antd-mobile.css'
import "./login.css";
import axios from "../../utils/axios";
import { Flex, WhiteSpace, WingBlank, NavBar, Icon, List, InputItem, Button, Toast } from 'antd-mobile'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uname: '',
      pwd:''
    }
  }
  changeValue = (k, v) => {
    // console.log(k,v);
    this.setState({
      [k]:v
    })
  }
  handleLogin = async () => {
    const { history } = this.props
    const body = this.state
    const res = await axios.post(`users/login`, body)
    
    const { meta, data } = res
    if (meta.status === 200) {
      localStorage.setItem('token',data.token)
      history.push('/')
    } else {
      Toast.fail(meta.msg, 1)
    }
  }

  render() {
    return (
      <div className="flex-container">
        <Flex direction="column" justify="center">
          <Flex.Item>
            <WingBlank size="sm">
              <NavBar mode="dark">登录</NavBar>
            </WingBlank>
            <WhiteSpace size="lg" />
          </Flex.Item>
          <Flex.Item>
            <List>
              <WingBlank size="sm">
                <InputItem value={this.state.uname} onChange={v=>{
                  this.changeValue('uname',v)
                }} placeholder="请输入用户名" type="text">
                  <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                </InputItem>
                <InputItem value={this.state.pwd} onChange={v=>{
                  this.changeValue('pwd',v)
                }} placeholder="请输入密码" type="password">密码</InputItem>
              </WingBlank>
            </List>
            <WhiteSpace size="lg" />
            <WingBlank size="sm">
              <Button type="primary" size="small" onClick={this.handleLogin}>登录</Button>
            </WingBlank>  
            <WhiteSpace size="lg" />
          </Flex.Item>
        </Flex>

      </div>
    )
  }
}
export default Login