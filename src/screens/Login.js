import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import api from '../services/api'

import GeneralStatusBarColor from '../components/GeneralStatusBarColor'

export default class Login extends Component {

	state = {
		email: '',
		password: ''
	}

	login = () => {
        
		api.post(`/auth/login?email=${this.state.email}&senha=${this.state.password}`)
			.then( response => {
				alert("Login Bem Sucedido")
				this.props.navigation.navigate('Home')
				this.setState({email: ''})
				this.setState({password: ''})
				
			})
			.catch(function(error){
				alert("usuário não encontrado")
			})

	}

	componentDidMount() {
		SplashScreen.hide();
	}

	render() {
		//<TouchableOpacity onPress={this.login} style={styles.buttom}>
		return (
			<View style={styles.container} >
				<GeneralStatusBarColor backgrondColor="#29568F" barStyle="light-content" />
				<Image
					style={styles.logo}
					source={require('../images/logo.png')} />
				<TextInput placeholder='Email' style={styles.input}
					autoFocus={false} keyboardType='email-address'
					value={this.state.email}
					onChangeText={email => this.setState({ email })} />

				<TextInput placeholder='Senha' style={styles.input}
					secureTextEntry={true} value={this.state.password}
					onChangeText={password => this.setState({ password })} />
				
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.buttom}>
					<Text style={styles.buttomText}>          Login           </Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} style={styles.buttom}>
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
	},

	buttom: {

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
		marginBottom: 5,
		width: '90%',
		backgroundColor: '#B3C2F2',
		height: 40,
		borderWidth: 1,
		borderColor: '#25a4c6'
	}
})