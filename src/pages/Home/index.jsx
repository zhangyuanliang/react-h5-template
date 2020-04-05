import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from 'antd-mobile';
import { removeToken } from '../../utils/auth'
import './index.less';

import { testHttp } from '@/services/home'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      httpState: ''
    }
  }

  testHttp = () => {
    const param = {
      account: "25257261",
      password: "123456"
    }
    testHttp(param).then(res => {
      this.setState({
        httpState: `测试成功！`
      })
    })
  }

  logout = () => {
    removeToken()
    window.location.reload()
  }

  render() {
    const { httpState } = this.state
    const { userInfo } = this.props
    return (
      <div>
        <div>姓名：{userInfo.userName}</div>
        <div>密码：{userInfo.password}</div>
        <Button type="primary" onClick={this.testHttp}>测试http</Button>
        <Button onClick={this.logout}>退出</Button>
        <div>{httpState}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.commonReducer.userInfo,
  }
}
export default connect(mapStateToProps)(Home)
