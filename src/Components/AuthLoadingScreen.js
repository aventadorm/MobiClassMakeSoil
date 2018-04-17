import React from 'react';
import { auth, firestore } from "../config/firebase";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

export default class AuthLoadingScreen extends React.Component {
  componentWillMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate((auth.currentUser ? 'App' : 'Auth'));
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
