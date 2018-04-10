import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

export default class AppScreen extends React.Component {
  static navigationOptions = {
    title: 'MAKE:SOIL',
  };

  render() {
    return (
      <View>
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _signOutAsync = async () => {
    firebase.auth().signOut();
    this.props.navigation.navigate('Auth');
  };
}
