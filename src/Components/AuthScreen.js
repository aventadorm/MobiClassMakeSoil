import React, { Component } from 'react';
import { TextInput, Text,Image,  View, TouchableOpacity, KeyboardAvoidingView, Dimensions  } from 'react-native';
import firebase from 'firebase';
import { LabelInput, Input, Spinner, Card, Button} from './common';
import { TabNavigator, TabBarBottom} from 'react-navigation';
import logo from '../Icons/compost.png';

class LoginScreen extends React.Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
  }



  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
    this.props.navigation.navigate('App');
  }

  render() {
    return (
    <Card style={styles.loginContainerStyle} behavior="padding">
      <Image source={logo} style={styles.logo} />
      <TextInput
        placeholder="email"
        label='Email: '
        value={this.state.email}
        onChangeText={email => this.setState({ email })}
        keyboardType='email-address'
        autoCapitalize="none"
        style={styles.loginBoxInputStyle}
      />
      <TextInput
        secureTextEntry
        placeholder="password"
        value={this.state.password}
        onChangeText={password => this.setState({ password })}
        autoCapitalize="none"
        style={styles.loginBoxInputStyle}
      />

    <Text style={styles.errorTextStyle}>
      {this.state.error}
    </Text>
    <Button onPress={this.onButtonPress.bind(this)} label="LOGIN"/>
    <KeyboardAvoidingView style={{height:100}}/>
  </Card>
    );
  }
}

class SignupScreen extends React.Component {
  state = { email: '', password: '', confirmPassword:'', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    if (this.checkPasswordMatch()){
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
    } else {
      this.onPasswordMisMatch();
    }
  }

  checkPasswordMatch(){
    return this.state.password === this.state.confirmPassword;
  }

  onPasswordMisMatch(){
    this.setState({ error: "Password doesn't match", loading: false });
  }
  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
    this.props.navigation.navigate('App');
  }

  render() {
    return (
      <Card>
        <Image source={logo} style={styles.logo} />
        <TextInput
          placeholder="email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          keyboardType='email-address'
          autoCapitalize="none"
          style={styles.loginBoxInputStyle}
        />
        <TextInput
          secureTextEntry
          placeholder="password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          autoCapitalize="none"
          style={styles.loginBoxInputStyle}
        />
        <TextInput
          secureTextEntry
          placeholder="confirm password"
          value={this.state.confirmPassword}
          onChangeText={confirmPassword => this.setState({ confirmPassword })}
          autoCapitalize="none"
          style={styles.loginBoxInputStyle}
        />
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        <Button onPress={this.onButtonPress.bind(this)} label="SIGNUP"/>
        <View style={{height:100}}/>
      </Card>
    );
  }
}

const window = Dimensions.get('window');
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  loginBoxInputStyle: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
    width: window.width - 30,
  },
};

export default TabNavigator(
  {
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
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
      }
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'top',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
