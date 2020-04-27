import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor'

export default class Wallet extends Component {
	render() {
		return (
			<View>
				<GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />
				<Text>Minha Carteira</Text>
				<View>
					<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
						<Text>Voltar</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}