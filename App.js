import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ToastExample from './ToastPackage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    ToastExample.show('Nitish Prasad', ToastExample.SHORT);
  }

  render() {
    return (
      <View>
        <Text> App </Text>
      </View>
    );
  }
}
