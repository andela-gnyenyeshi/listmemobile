import { connect } from 'react-redux';
import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from './app';

class ApplicationWithNavigation extends Component {
  componentWillMount() {
    console.log('olaa');
  }
  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.navigation,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  navigation: state.navigation,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ApplicationWithNavigation,
);
