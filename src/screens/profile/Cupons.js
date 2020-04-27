import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor'

export default class Cupons extends Component {
	render() {
		return (
			<View>
				<GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />
				<Text>Meus Cupons</Text>
				<View>
					<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
						<Text>Voltar</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}
