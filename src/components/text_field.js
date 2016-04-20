import React, {
  StyleSheet,
  TextInput,
} from 'react-native';

var TextField = React.createClass({
  propTypes: {
    text:         React.PropTypes.string.isRequired,
    placeholder:  React.PropTypes.string.isRequired,
    isSecure:     React.PropTypes.bool,
    keyboardType: React.PropTypes.oneOf(['default', 'email-address', 'numeric']).isRequired,
    onChangeText: React.PropTypes.func.isRequired,
  },

  getInitialState: function() {
    return {}
  },

  render: function() {
    return <TextInput
      value           = {this.props.text}
      placeholder     = {this.props.placeholder}
      secureTextEntry = {this.props.isSecure}
      keyboardType    = {this.props.keyboardType}
      onChangeText    = {this.props.onChangeText}
      style           = {styles.textField} />
  }
});


const styles = StyleSheet.create({
  // TODO: fix styling
  textField: {
    height       : 40,
    paddingLeft  : 10,
    paddingRight : 10,
    marginLeft   : 20,
    marginRight  : 20,
    borderWidth  : 1,
    borderColor  : 'black'
  }
})

export default TextField;
