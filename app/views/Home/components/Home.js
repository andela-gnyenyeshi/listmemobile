import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { setStart, thunkAction } from './actions/actions';

class Home extends Component {
  onTextChange = () => {
    this.props.thunkAction();
    this.props.navigation.navigate('Dashboard');
  };
  render() {
    console.log('PROOP', this.props);
    return (
      <View>
        <Text>This is the Home Component</Text>
        <Button title="Press me" onPress={() => this.onTextChange()} />
      </View>
    );
  }
}

export default connect(null, { setStart, thunkAction })(Home);
