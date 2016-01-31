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
      showView: true
    }
  },

  toggleView() {
    this.setState({
      showView: !this.state.showView
    })
  },

  render: function() {
    var view = <View> <Text> This View is being toggled</Text></View>

    if(this.state.showView){
          return(
      <View style = {styles.container}>
      <TouchableHighlight onPress = { () => this.toggleView() }>
        <Text>
          Hey
        </Text>
      </TouchableHighlight>
      </View>
    );          
    } else {
        return(
        <View style = {styles.container}>
          <TouchableHighlight onPress = { () => this.toggleView() }>
            <Text>
              Hey ke
            </Text>
          </TouchableHighlight>
        </View>
    );  
     
    }


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