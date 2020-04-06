import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'antd-mobile';
import RoutesConfig from '@/routes.config';

class App extends Component {
  render() {
    const { isLoading } = this.props;
    return (
      <div className="App">
        <ActivityIndicator toast text="loading..." animating={isLoading} />
        <RoutesConfig />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  isLoading: state.commonReducer.isLoading,
});

export default connect(mapStateToProps)(App);
