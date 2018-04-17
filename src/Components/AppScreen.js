import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { auth, firestore } from "../config/firebase";
import { Button, Card, CardSection, Input, Spinner } from './common';

export default class AppScreen extends React.Component {
  static navigationOptions = {
    title: 'HOME',
  };

  componentWillMount(){
    this.authSubscription = auth.onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user,
      });
      if (!user) {
        this.props.navigation.navigate('Auth');
      }
    });

  }

  componentWillUnmount(){
    this.authSubscription();
  }
  /*
  renderSoilSites(){
    // grab database

    // grab users to obtain list of soilsites owned
    var usersRef = firestore.collection("users");
    var queryUsers = usersRef.where(firestore.FieldPath.documentId(),'=', auth.currentUser.uid);
    var soilSitesRef = firestore.collection("soilsites");

    var sitesToRender = [];

    for (let i = 0; i < queryUsers.length(); i++){
      var sitesLength = queryUsers[i].ownedSites.length();
      for (let j = 0; j < sitesLength; j++){
        usersRef.where(firebase.firestore.FieldPath.documentId(),'=', queryUsers[i].ownedSites[j]);

      }
    }
  }
*/

  render() {
    return (
      <Card>
        <CardSection>
        </CardSection>
      </Card>
    );
  }

  _signOutAsync = async () => {
    auth.signOut();
    this.props.navigation.navigate('Auth');
  };
}
