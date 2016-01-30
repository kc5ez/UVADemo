import React, {
    Component, View, Image, Text
}
from 'react-native'

class CageView extends Component {
    constructor(props) {
        super(props);
        console.log("PROPS");
        console.log(props);
        let variable = "ke";
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Image style={{flex:2}} source={{uri:this.props.dataSource.cage}}/>
                <View style={{flex: 1, flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}
                    backgroundColor={this.props.dataSource.color}>
                    <View stlye={{flex:1, flexDirection:'column', alignItems:'center'}}>
                        <Text style={{flex:1, fontSize:25, color: "blue" }}>{this.props.dataSource.quote}</Text> 
                        <Text>{this.props.dataSource.index}</Text>
                        <Text>{this.props.variable}</Text>
                    </View>
                </View> 
            </View>
        )
    }
}

export default CageView