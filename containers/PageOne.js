'use strict';

var React = require('react-native');
var {
  Component,
  View,
  Text,
} = React;

class PageOne extends Component {
  componentWillMount() {
    var navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'PageOne',
      });
    }, 1000);
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 32,}}> page one</Text>
      </View>
    );
  }
}

module.exports = PageOne;