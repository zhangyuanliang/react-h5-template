import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from '@/redux/modules/common'
import { withRouter } from 'react-router-dom'
import { createForm } from 'rc-form';
import { InputItem, Button } from 'antd-mobile';
import { Toast } from 'antd-mobile';
import { setToken } from '@/utils/auth'
import './index.less'

class Login extends Component {

  login = () => {
    const { form, history, setUserInfo, changeIsloading } = this.props
    console.log(this)
    form.validateFields((error, value) => {
      if (error) {
        Toast.info('请输入')
        return
      }
      changeIsloading(true)
      setTimeout(() => {
        changeIsloading(false)
        setToken('test-token')
        setUserInfo({
          userName: value.userName,
          password: value.password
        })
        history.push({
          pathname: '/home'
        });
      }, 2000)
    });
  }

  render() {
    const { getFieldProps } = this.props.form
    return (
      <div className="login-wrap">
        <div className="content-wrap">
          <div className="title">登陆</div>
          <InputItem
              {...getFieldProps('userName', {
                onChange(){},
                rules: [{required: true}],
              })}
              placeholder="用户名"
            />
          <InputItem
              {...getFieldProps('password', {
                onChange(){},
                rules: [{required: true}],
              })}
              placeholder="密码"
            />
          <Button type="primary" onClick={this.login} className="margin-t-1">登陆</Button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    userInfo: state.commonReducer.userInfo,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setUserInfo(userInfo) {
      const action = actions.setUserInfo(userInfo)
      dispatch(action)
    },
    changeIsloading(isLoading) {
      dispatch(actions.changeIsloading(isLoading));
    },
  }
}

Login = connect(mapStateToProps, mapDispatchToProps)(Login)
export default withRouter(createForm()(Login));
