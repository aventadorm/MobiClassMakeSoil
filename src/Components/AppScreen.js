import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { auth} from "../config/firebase";
import { Button, Card, CardSection, Input, Spinner } from './common';
import { TabNavigator, TabBarBottom} from 'react-navigation';

class HostingScreen extends React.Component {
  constructor() {
    super();
    this.state = {
        textInput: '',
        loading: true,
        userUID: auth.currentUser.uid,
        hostSites: [],
    };/*
    this.userRef = firestore.collection('users');
    this.hostingSitesRef = firestore.collection('soilsites');
    this.usersUnsubscribe = null;
    this.authSubscription = null;
    this.sitesUnsubscribe = null;*/
  }

  componentWillMount(){
    /*
    this.usersUnsubscribe = this.userRef.onSnapshot(this.onUsersCollectionUpdate);
    this.sitesUnsubscribe = this.hostingSitesRef.onSnapshot(this.onSitesCollectionUpdate);
    */
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
    //this.usersUnsubscribe();
    //this.sitesUnsubscribe();
  }
  /*
  onSitesCollectionUpdate = (querySnapshot) => {
    const hostSites = [];
    querySnapshot.forEach((doc) => {
      const { accepts,
              acceptsnot,
              address,
              description,
              imageURL,
              ownerName,
              status,
              supporters,
              userUID } = doc.data();
      hostSites.push({
        key: doc.id,
        doc, // DocumentSnapshot
        accepts,
        acceptsnot,
        address,
        description,
        imageURL,
        ownerName,
        status,
        supporters,
        userUID,
      });
    });
    this.setState({
      hostSites,
      loading: false,
   });
  }

  onUsersCollectionUpdate = (querySnapshot) => {
    const users = [];

    querySnapshot.forEach((doc) => {
      const { ownedSites } = doc.data();
      users.push({
        key: doc.id,
        doc, // DocumentSnapshot
        ownedSites,
      });
    });
    this.setState({
      users,
      loading: false,
    });
  }
  */
  render() {
    if (this.state.loading) {
      return null; // or render a loading icon
    }
  }

  _signOutAsync = async () => {
    auth.signOut();
    this.props.navigation.navigate('Auth');
  };
}

class SupportingScreen extends React.Component {
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



export default TabNavigator(
  {
    Hosting: { screen: HostingScreen },
    Supporting: { screen: SupportingScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({

    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 24,
      },
      style:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'green',
        borderTopWidth:1,
        borderTopColor:'#D3D3D3'
      }
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'top',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
