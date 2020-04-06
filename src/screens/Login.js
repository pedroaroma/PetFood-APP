import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import GeneralStatusBarColor from '../components/GeneralStatusBarColor'

export default class Login extends Component {

	state = {
		email: '',
		password: ''
	}

	login = () => {
		//logica de login aqui com a API
	}

	componentDidMount() {
		SplashScreen.hide();
	}

	render() {

		return (
			<View style={styles.container} >
				<GeneralStatusBarColor backgrondColor="#29568F" barStyle="light-content" />
				<Image
					style={styles.logo}
					source={require('../images/logo.png')} />
				<TextInput placeholder='Email' style={styles.input}
					autoFocus={true} keyboardType='email-address'
					value={this.state.email}
					onChangeText={email => this.setState({ email })} />

				<TextInput placeholder='Senha' style={styles.input}
					secureTextEntry={true} value={this.state.password}
					onChangeText={password => this.setState({ password })} />
				
				<TouchableOpacity onPress={this.login} style={styles.buttom}>
					<Text style={styles.buttomText}>Login</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => {}} style={styles.buttom}>
					<Text style={styles.buttomText}>Criar Nova Conta</Text>
				</TouchableOpacity>
				
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#29568F',	
	},

	logo: {
		flex: 1,
		resizeMode: 'center',
		marginBottom: 5
	},

	buttom: {
		marginTop: 5,
		marginBottom: 10,
		padding: 10,
		backgroundColor: '#B3C2F2',
		borderWidth: 1,
		borderColor: '#25a4c6',
		borderRadius: 10,
	},

	buttomText: {
		fontSize: 20,
		color: '#29568F',	
	},

	input: {
		marginTop: 10,
		width: '90%',
		backgroundColor: '#B3C2F2',
		height: 40,
		borderWidth: 1,
		borderColor: '#25a4c6'
	}
})