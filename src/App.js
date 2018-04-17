import { auth, database, provider } from "./config/firebase";
import React, { Component} from 'react';
import { View, StyleSheet} from 'react-native';
import { Card, CardSection, Header, Button, Spinner, Input } from './Components/common';
import AppNavigation from './Navigation/AppNavigation';
import { StackNavigator, SwitchNavigator } from 'react-navigation';


export default class App extends React.Component {

  componentWillMount() {
    /*
    if (!firebase.apps.length){
      firebase.initializeApp({
        apiKey: 'AIzaSyD17KqnJyxFcr3YVqSzeuz9B_wNi8yDcbI',
        authDomain: 'makesoilvimd.firebaseapp.com',
        databaseURL: 'https://makesoilvimd.firebaseio.com',
        projectId: 'makesoilvimd',
        storageBucket: 'makesoilvimd.appspot.com',
        messagingSenderId: '484606101228'
      });
    }
    */
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  render() {
    return (
      <View style={styles.container}>
        <AppNavigation/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})
