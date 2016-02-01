'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Component,
  Text,
  View,
  Navigator,
  TouchableHighlight,
} = React;


var ResultsContainer = React.createClass({
  getInitialState() {
    return {
      showDone: true,
      haventDone: false,
    }
  },

  showDone() {
    this.setState({
      showDone: true,
      haventDone: false
    })
  },

  haventDone() {
    this.setState({
      showDone: false,
      haventDone: true
    })
  },


  _renderView() {
    if(this.state.showDone) {
      return (
        <Text>
          render accept!
        </Text>
      );
   }
   else {
    return (
      <Text>
        render reject
      </Text>
    );
   }
  },

  render: function() {

    return(
      <View>
            <TouchableHighlight onPress = { () => this.showDone() }>
              <Text>
                Done
              </Text>
            </TouchableHighlight>

            <TouchableHighlight onPress = { () => this.haventDone() }>
              <Text>
                Haven't Done
              </Text>
            </TouchableHighlight>
            {this._renderView()}
      </View>
    );

  }

});

  var Results = React.createClass({
    render() {
      return(
          <Text> view 1</Text>
      );
    }
  });

  var Results2 = React.createClass({
    render() {
      return(
        <Text> view 2 </Text>
      );
    }
  });

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = ResultsContainer;