import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import GeneralStatusBarColor from './src/components/GeneralStatusBarColor'

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	componentDidMount() {
		SplashScreen.hide();
	}

	render() {

		return (
			<View style={{ flex: 1}}>
				<GeneralStatusBarColor backgrondColor="#29568F"
					barStyle="light-content" />
				<Text style={styles.fundo}>App!</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	fundo: {
		backgroundColor: '#29568F',
		flex: 1,
		textAlign: 'center',	
	}
})