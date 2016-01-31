'use strict';

var React = require('react-native');
var {
  Component,
  View,
  Text,
} = React;

class PageTwo extends Component {
  componentWillMount() {
    var navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'PageTwo',
      });
    }, 1000);
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 32,}}> page two </Text>
      </View>
    );
  }
}

module.exports = PageTwo;