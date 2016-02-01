import React, {
	AppRegistry, StyleSheet, Text, View, Animated, Component, PanResponder,
}
from 'react-native';
import CardSwiperContainer from './containers/CardSwiperContainer';
import SimpleApi from './implementations/BasicSimplifiedImplementation/SimpleApi'
import SimpleView from './implementations/BasicSimplifiedImplementation/SimpleView'
import CageView from './implementations/Nicklomentation/CageView'
import CageApi from './implementations/Nicklomentation/CageApi'

class mainView extends Component {
	constructor(props) {
		super(props);
		this.cardApi = new CageApi()
	}

	render() {
		console.log("INDEX IOS");
		console.log(this.cardApi);
		return (
			<View style={{flex:1}}>
				<CardSwiperContainer  acceptAnimation={true} rejectAnimation={true} acceptText={"Done!"} rejectText={"Not yet!"}
					onReject={this.cardApi.onReject.bind(this.cardApi)} onAccept={this.cardApi.onAccept.bind(this.cardApi)} maxCards={5}
					getNextCardDataSource={this.cardApi.goToNext.bind(this.cardApi)}>
					<CageView/>
				</CardSwiperContainer>
			</View>
		);
	}
}

AppRegistry.registerComponent('ReactNativeCardSwiper', () => mainView);