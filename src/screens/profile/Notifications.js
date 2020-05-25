import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor'
export default class Notifications extends Component {
	render() {
		return (
			<View style={styles.container}>
				<GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />
				<Text>Notificações</Text>
				<View>
					<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
						<Text>Voltar</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B3C2F2'
    },
})