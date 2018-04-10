import React from 'react';
import firebase from 'firebase';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

export default class AuthLoadingScreen extends React.Component {
  componentWillMount() {
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

    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user,
      });
    });

    if (firebase.auth().currentUser) {
      this.setState({
        user,
      });
    }

    this._bootstrapAsync();
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate((firebase.auth().currentUser ? 'App' : 'Auth'));
  };


  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator/>
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
