import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../styles/styles';

class Home extends Component {
  onFetch = () => {
    this.props.getData();
  };

  onDelete = () => {
    this.props.deleteData();
  };

  onUpdate = () => {
    this.props.updateData();
  };

  onDispatchFetch = () => {
    this.props.getDataDispatch();
  };
  render() {
    return (
      <View>
        <Text>This is the Home Component</Text>
        <View style={styles.button}>
          <Button title="One" onPress={() => this.onFetch()} />
        </View>
        <View style={styles.button}>
          <Button title="Two" onPress={() => this.onDelete()} />
        </View>
        <View style={styles.button}>
          <Button title="Three" onPress={() => this.onUpdate()} />
        </View>
      </View>
    );
  }
}

export default Home;
