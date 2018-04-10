import firebase from 'firebase';
import React, { Component} from 'react';
import { View, StyleSheet} from 'react-native';
import { Card, CardSection, Header, Button, Spinner, Input } from './Components/common';
import AuthLoadingScreen from './Components/AuthLoadingScreen';
import AuthScreen from './Components/AuthScreen';
import AppScreen from './Components/AppScreen';
import { StackNavigator, SwitchNavigator } from 'react-navigation';

const AppStack = StackNavigator({ Home: AppScreen });
const AuthStack = StackNavigator({ Login: AuthScreen });

export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,

  },
  {
    initialRouteName: 'AuthLoading',
  }
);
