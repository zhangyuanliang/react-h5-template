import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '@/redux/modules/common';
import { removeToken } from '../../utils/auth';
import { Button } from 'antd-mobile';
import './index.less';

import { testHttp } from '@/services/home';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      httpState: '',
    };
  }

  testHttp = () => {
    const param = {
      account: '25257261',
      password: '123456',
    };
    testHttp(param).then((res) => {
      this.setState({
        httpState: `axios 测试成功！`,
      });
    });
  };

  testActionHttp = () => {
    const param = {
      account: '25257261',
      password: '123456',
    };
    const { testActionSend } = this.props
    testActionSend(param).then(() => {
      this.setState({
        httpState: `action http 测试成功！`,
      });

    })
  };

  logout = () => {
    removeToken();
    window.location.reload();
  };

  render() {
    const { httpState } = this.state;
    const { userInfo, testInfo } = this.props;
    return (
      <div className="test-wrap">
        <div>姓名：{userInfo.userName}</div>
        <div>密码：{userInfo.password}</div>
        <div><Button type="primary" onClick={this.testHttp}> test axios http </Button></div>
        <div><Button type="ghost" onClick={this.testActionHttp}> test action http </Button></div>
        <div><Button onClick={this.logout}>退出</Button></div>
        <div>axios 测试: {httpState}</div>
        <div>redux testInfo.phone: {testInfo.phone}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.commonReducer.userInfo,
    testInfo: state.commonReducer.testInfo
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    testActionSend(param) {
      return dispatch(actions.testActionSend(param));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
