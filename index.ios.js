import React, {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import TextField from './src/components/text_field';

var Quidget = React.createClass({
  getInitialState: function() {
    return {
      email   : '',
      password: ''
    };
  },

  render: function() {
    return <View style={styles.container}>
      <Text>Username or Email:</Text>
      <TextField
        text         = {this.state.email}
        placeholder  = {'Email or Username'}
        keyboardType = {'email-address'}
        onChangeText = {this.onEmailChange} />
      <Text>Password:</Text>
      <TextField
        text         = {this.state.password}
        placeholder  = {'Password'}
        isSecure     = {true}
        keyboardType = {'email-address'}
        onChangeText = {this.onPasswordChange} />
    </View>
  },

  onEmailChange: function(e) {
    this.setState({ email: e });
  },

  onPasswordChange: function(e) {
    this.setState({ password: e });
  }
})

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    justifyContent : 'center',
    alignItems     : 'center'
  }
})

AppRegistry.registerComponent('Quidget', () => Quidget);
