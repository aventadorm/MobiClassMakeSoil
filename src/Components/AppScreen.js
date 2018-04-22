import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';
import SoilSiteRequestJoin from './SoilSiteRequestJoin'
export default class AppScreen extends React.Component {
  static navigationOptions = {
    title: 'HOME',
  };

  componentWillMount(){
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user,
      });
      if (!user) {
        this.props.navigation.navigate('Auth')
      }
    });

  }

  componentWillUnmount(){
    this.authSubscription();
  }

  render() {
    return (
      // <Card>
      //   <CardSection>
      //     <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      //   </CardSection>
      // </Card>
      <SoilSiteRequestJoin/>
    );
  }

  _signOutAsync = async () => {
    firebase.auth().signOut();
    this.props.navigation.navigate('Auth');
  };
}
