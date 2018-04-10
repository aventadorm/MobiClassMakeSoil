import React, { Component } from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { LabelInput, Input, Spinner } from './common';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign In',
  };
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
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
      <View style={styles.loginContainerStyle}>
        <View style={styles.loginBoxInputStyle}>
          <Text style={styles.loginLabelStyle}>Email: </Text>
          <TextInput
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            keyboardType='email-address'
            autoCapitalize="none"
          />
        </View>
        <View style={styles.loginBoxInputStyle}>
          <Text style={styles.loginLabelStyle}>Password: </Text>
          <TextInput
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            autoCapitalize="none"
          />
        </View>
        <View>
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>
        </View>
        <View style={styles.loginButtonContainerStyle}>
          <TouchableOpacity
            onPress={this.onButtonPress.bind(this)}
          >
            <Text style={styles.loginButtonStyle}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'

  },
  loginContainerStyle: {
    flex:0.7,
    flexDirection:'column',
  },
  loginButtonStyle: {
    backgroundColor: "#7fe1af",
    padding: 25,
    fontSize: 25,
  },
  loginButtonContainerStyle: {
    flex:0.8,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
  },
  loginBoxInputStyle: {
    flex:1,
  },
  loginLabelStyle: {
    fontSize: 25,
    textAlign: "left",
  }


};
