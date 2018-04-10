

class AppScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

const RootStack = StackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    App: {
      screen: AppScreen,
    },
  },
  {
    initialRouteName: 'Login',
  }
);

export default SwitchNavigator extends React.Component {
  {
    Login: {
      screen: LoginScreen,
    },
    App: {
      screen: AppScreen,
    },
  },
  {
    initialRouteName: 'Login',
  }
}
