
'use strict';
import CageApi from '../implementations/Nicklomentation/CageApi';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Component,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  ListView
} = React;


var ResultsContainer = React.createClass({


  getInitialState() {
    console.log("blah");
    console.log(this.props.resultsData.accepted);
      var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2});

    return {

      showDone: true,
      haventDone: false,
      dataSource: ds.cloneWithRows(this.props.resultsData.accepted),
    };
  },

  showDone() {
          var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2});

    this.setState({

      showDone: true,
      haventDone: false,
      dataSource: ds.cloneWithRows(this.props.resultsData.accepted),
    })
  },

  haventDone() {
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2});

    this.setState({

      showDone: false,
      haventDone: true,
      dataSource: ds.cloneWithRows(this.props.resultsData.rejected),
    })
  },


  _renderView() {
    return (
         <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData) => <Text>{rowData}</Text>}
        />
    );
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