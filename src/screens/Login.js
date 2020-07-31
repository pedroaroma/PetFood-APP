import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import api from '../services/api'

import GeneralStatusBarColor from '../components/GeneralStatusBarColor'


/*
usuario.teste2@email.com.br
123456789
*/

export default class Login extends Component {

	constructor(){
		super();
		
		global.Token = '',
		global.nomeUsuario = '',
		global.idLoja = '',
		global.endEntrega = '',
		global.isPartner = false,
		global.nomeLoja = '',
		global.enderecoLoja = '',
		global.numLoja = '',

		//variaves globais para manipulação de produto (edição e remoção)
		global.nomeProduto = '',
		global.preco = '',
		global.codBarras = '',
		global.descricao = '',
		global.tags = '',
		global.itemId = ''

		//variaveis para edição de usuario
		global.userId = '',
		global.userEmail = '',
		global.userCpf = '',
		global.userTel = '',
		global.userEstado = '',
		global.userCidade = '',
		global.userBairro = '',
		global.userRua = '',
		global.userNum = '',
		global.userComp = '',
		global.userCep = '',
		global.userDataNascimento = ''

		//variavel para compra de item

		global.carrinho = {
			nomeProduto: '',
			preco: '',
			codBarras: '',
			descricao: '',
			tags: '',
			//o que vai para a api...
			produtoId: '',
			lojaId: '',
			preco: ''	
		}
		global.venda = {
			vendaId: '',
			finalizado: '',
			produtoId: '',

		}
		global.compra = {
			compraId: '',
			finalizado: '',
			produtoId: '',
		}

		global.listaCompras = [],
		global.searchCompraComprador = ''
		global.searchVendedor = '',

		global.listaVendas = [],
		global.AllProducts = [],
		global.pesqproductfiltrado = ''

		// global.EditStore = {
		// 	nomeLoja: '',
		// 	cnpj: '',
		// 	telComercial: '',
		// 	cep: '',
		// 	endereco: '',
		// 	numero: '',
		// 	complemento: '',	
		// }
	}

	state = {
		email: '',
		password: ''
	}

	login = () => {
        
		api.post('/auth/login',{
			email: this.state.email,
			senha: this.state.password
		})
			.then( response => {
				global.Token = response.data.token
				global.nomeUsuario = response.data.clientData.nome
				
				//variaveis de acesso as infos do usuario
				global.userComp = response.data.clientData.complemento,
				global.userId = response.data.clientData._id,
				global.userEmail = response.data.clientData.email,
				global.userCpf = response.data.clientData.cpf,
				global.userTel = response.data.clientData.telefone,
				global.userEstado = response.data.clientData.estado,
				global.userCidade = response.data.clientData.cidade,
				global.userBairro = response.data.clientData.bairro,
				global.userRua = response.data.clientData.rua,
				global.userNumEnd = response.data.clientData.numero,
				global.userComplemento = response.data.clientData.complemento,
				global.userCep = response.data.clientData.cep,
				global.userDataNascimento = response.data.clientData.dataNascimento
				global.endEntrega = (response.data.clientData.rua + ', '+ response.data.clientData.numero)
				console.log(response.data)
				if(response.data.clientData.tipo === "loja"){
					global.isPartner = true
					global.idLoja = response.data.clientData.loja
					//global.endEntrega = (response.data.clientData.rua + ', '+ response.data.clientData.numero)
				}
				//console.debug(response.data.clientData.tipo)
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
		//<TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.buttom}>
		//APENAS TESTE QUANDO A API ESTIVER OFF
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
				
				<TouchableOpacity onPress={this.login} style={styles.buttom}>
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