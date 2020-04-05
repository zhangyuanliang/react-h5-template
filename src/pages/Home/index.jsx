import React, { Component } from 'react';
import { connect } from 'react-redux'
import './index.less';

class Home extends Component {
  render() {
    const { userInfo } = this.props
    return (
      <div>
        <div>姓名：{userInfo.userName}</div>
        <div>密码：{userInfo.password}</div>
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
