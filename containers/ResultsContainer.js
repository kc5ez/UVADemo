'use strict';

var React = require('react-native');

var {
  ScrollView, 
  Text, 
  Image, 
  StyleSheet,
  TouchableHighlight,
  AppRegistry,
  View, 
  ListView,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  listViewContainer: {
    marginTop: 20,
    flexDirection: 'column'
  },
  taskpic: {
    width: 107,
    height: 165,
    padding: 10
  },
  taskQuote: {
    fontSize: 16,
    paddingLeft: 20,
    flex: 1,
    alignItems: 'center'
  },
  dataItem:{
    flex: 1,
    flexDirection: 'row',
    padding: 5
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'orange',
    marginTop: 40
  },
  separator: {
    height: 1,
    backgroundColor: "#dddddd"
  },
  toggleActive: {
    paddingLeft: 60,
    paddingRight: 60,
    borderWidth: 0.5,
    borderRadius: 0.1,
    borderColor: 'orange',
    fontSize: 20,
    color: 'white'
  },
  toggleInactive: {
    paddingLeft: 60,
    paddingRight: 60,
    borderWidth: 0.5,
    borderRadius: 0.1,
    borderColor: 'orange',
    fontSize: 20,
    color: 'orange',
    backgroundColor: 'white'
  }
});

    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

class ResultsContainer extends React.Component{

  constructor(props) {
    super(props);
 
    this.state = { 
      showDone: true,
      haventDone: false,
      dataSource: ds.cloneWithRows(this.props.resultsData.accepted),
    };
  }

  showDone() {
    this.setState({

      showDone: true,
      haventDone: false,
      dataSource: ds.cloneWithRows(this.props.resultsData.accepted),
    })
  }

  haventDone() {
    this.setState({
      showDone: false,
      haventDone: true,
      dataSource: ds.cloneWithRows(this.props.resultsData.rejected),
    })
  }

  _renderRow(data, sectionID, rowID) {
    return (
      <View style = {styles.dataItem}>
        <Image source={{uri: data[0].pic}}
          style = {styles.taskpic}
        />
        <Text style ={styles.taskQuote}>{data[0].quote}</Text>
      </View>
      );
  }

  render() {
    if(this.state.showDone){
      return(
        <View style = {styles.container}>
          <View style = {styles.header}>
            <TouchableHighlight onPress = { () => this.showDone()}> 
              <Text style = {styles.toggleActive}> Done </Text> 
            </TouchableHighlight>

            <TouchableHighlight onPress = {() => this.haventDone() }> 
              <Text style = {styles.toggleInactive}> To-do </Text> 
            </TouchableHighlight>
          </View>
            <ListView 
              style = {styles.listViewContainer}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
            />
        </View>

      );
    } else {
      return(
        <View style = {styles.container}>
          <View style = {styles.header}>
            <TouchableHighlight onPress = { () => this.showDone()}> 
              <Text style = {styles.toggleInactive}> Done </Text> 
            </TouchableHighlight>

            <TouchableHighlight onPress= { () => this.haventDone() }> 
              <Text style = {styles.toggleActive}> To-do </Text> 
            </TouchableHighlight>
          </View>
            <ListView 
              style = {styles.listViewContainer}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
            />
        </View>
      );
    }
  }
}

module.exports = ResultsContainer;