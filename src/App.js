
import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './Components/common';
import LoginForm from './Components/LoginForm';

class App extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyD17KqnJyxFcr3YVqSzeuz9B_wNi8yDcbI',
    authDomain: 'makesoilvimd.firebaseapp.com',
    databaseURL: 'https://makesoilvimd.firebaseio.com',
    projectId: 'makesoilvimd',
    storageBucket: 'makesoilvimd.appspot.com',
    messagingSenderId: '484606101228'
  });
  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
  render() {
    return (
      <View>
      <Header headerText="Authentication" />
      {this.renderContent()}
      </View>
    );
  }
}
export default App;
