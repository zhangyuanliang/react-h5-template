import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actions } from '../../redux/modules/common'
import { ActivityIndicator } from 'antd-mobile';
import RoutesConfig from '../../routes.config'

class App extends Component {

  render() {
    const {isLoading, } = this.props
    return (
      <div className="App">
        <ActivityIndicator
          toast
          text="loading..."
          animating={isLoading}
        />
        <RoutesConfig/>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  isLoading: state.commonReducer.isloading,
  isLogin: state.commonReducer.isLogin
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeIsloading() {
      dispatch(actions.changeIsloading())
    },
    changeIsLogin(e) {
      const action = actions.changeIsLogin()
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
