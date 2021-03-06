import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor'
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';
import RNRestart from 'react-native-restart'

import api from '../../services/api'
import apiCep from '../../services/apiCep'

export default class Partners extends Component {

	state = {

		nomeLoja: '',
		cnpj: '',
		telComercial: '',
		cep: '',
		endereco: '',
		numero: '',
		complemento: '',
		
	}

	register = () => {

		console.debug(this.state)

		api.post('/store/',{
			nomeLoja: this.state.nomeLoja,
			cnpj: this.state.cnpj,
			telComercial: this.state.telComercial,
			cep: this.state.cep,
			endereco: this.state.endereco,
			numero: this.state.numero,
			complemento: this.state.complemento, 
		}, {
			headers: {
				'Authorization': `Bearer ${global.Token}`,
			}
		})
			.then( response => {
				alert("Loja cadastrada com sucesso, por favor faça Login novamente")
				console.debug(response.data)
				RNRestart.Restart()
			})
			.catch(function(error){
				alert("ops, algo deu errado")
				console.debug(error.response)
			})


	}

	validaCep = () => {
        apiCep.get(`${this.state.cep}/json/`)
            .then(response => {
                console.debug(response.data)

                this.setState({ endereco: response.data.logradouro })
                
            })
            .catch(function (error) {
                alert("Verifique se seu CEP está correto")
                console.debug(error.response)
                //alert(error.response)
            })
	}
	

	render() {
		return (
			<View style={styles.container}>
				<ScrollView>

					<GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />
					
					<View style={styles.Icon}>
						<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
							<Icon5 name="arrow-left" size={64} color='black' />
						</TouchableOpacity>
						<View style={styles.Name}>
							<Text style={styles.NameFontTitle}>Petfood</Text>
							<Text style={styles.NameFontSub}>Seja um Parceiro</Text>
						</View>
					</View>

					<View style={styles.Form}>
						<View style={styles.Inside}>
							<Text style={styles.TextFormTitle}>Cadastre sua loja</Text>
							<Text style={styles.TextFormSub}>Pensa em expandir seus negócios? Seja nosso parceiro e aumente suas vendas!</Text>
						</View>
						<View>
							<Text style={styles.inputText}>Nome da Loja</Text>
							<TextInput style={styles.input} 
								placeholder="Qual é o nome da Loja?" 
								value={this.state.nomeLoja} 
								onChangeText={nomeLoja => this.setState({ nomeLoja })} 
								placeholderTextColor="#fff"	
							/>
						</View>
						<View>
							<Text style={styles.inputText}>CNPJ</Text>
							<TextInput style={styles.input} 
								placeholder="qual é o CNPJ do estabelecimento?"
								value={this.state.cnpj}
								onChangeText={cnpj => this.setState({ cnpj })} 
								placeholderTextColor="#fff"
							/>
						</View>
						<View>
							<Text style={styles.inputText}>Telefone Comercial (com DDD)</Text>
							<TextInput style={styles.input} 
								placeholder="qual é o tel. comercial do estabelecimento?" 
								value={this.state.telComercial}
								onChangeText={telComercial => this.setState({ telComercial })}
								placeholderTextColor="#fff"
							/>
						</View>
						<View>
							<Text style={styles.inputText}>CEP</Text>
							<TextInput style={styles.input}
								placeholder="qual é o CEP do estabelecimento?"
								value={this.state.cep}
								onBlur={this.validaCep}
								onChangeText={cep => this.setState({ cep })}
								placeholderTextColor="#fff"
							
							/>
						</View>
						<View>
							<Text style={styles.inputText}>Endereço</Text>
							<TextInput style={styles.input}
								placeholder="Endereço da loja"
								value={this.state.endereco}
								onChangeText={endereco => this.setState({ endereco })}
								placeholderTextColor="#fff"
								editable={false}
							/>
						</View>
						<View style={styles.NumComp}>
							<View>
								<Text style={styles.inputText}>Número</Text>
								<TextInput style={styles.input}
									placeholder="N°"
									value={this.state.numero}
									onChangeText={numero => this.setState({ numero })}
									placeholderTextColor="#fff"
								/>
							</View>
							<View>
								<Text style={styles.inputText}>Complemento</Text>
								<TextInput style={styles.input}
									placeholder="Ex: primeiro andar, bloco 2                "
									value={this.state.complemento}
									onChangeText={complemento => this.setState({ complemento })}
									placeholderTextColor="#fff"
								/>
							</View>
						</View>
						<View><Text></Text></View>
					</View>

					<TouchableOpacity onPress={this.register} style={styles.buttom}>
						<Text style={styles.buttomText}>Cadastrar Loja</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#B3C2F2',
	},
	Icon: {
		flex: 1,
		flexDirection: 'row',
		marginLeft: 10
	},
	Name: {
		flex: 0.85,
		alignItems: 'center',
		marginTop: -7,
	},
	NameFontTitle: {
		fontSize: 36,
		color: '#4F558F',
		fontFamily: 'Montserrat',
		marginBottom: -10
	},
	NameFontSub: {
		fontSize: 24,
		color: '#4F558F',
		fontFamily: 'Montserrat'
	},
	Form: {
		flex: 8,
		backgroundColor: '#939EC2',
		borderRadius: 10,
		margin: 50,
		marginBottom: 0,
		marginVertical: 10,
	},
	Inside: {
		padding: 20,
		marginLeft: 10
	},
	TextFormTitle: {
		fontSize: 22,
		color: '#4F558F'
	},
	TextFormSub: {
		fontSize: 14,
		color: '#4F558F',
	},
	inputText: {
		color: '#4F558F',
		marginLeft: 10,
		fontSize: 16
	},
	input: {
		backgroundColor: '#B3C2F2',
		borderRadius: 5,
		width: '90%',
		height: 40,
		marginLeft: 10,
	},
	NumComp: {
		flexDirection: 'row'
	},
	buttom: {
		alignItems: 'center',
		backgroundColor: '#466BE1',
		borderRadius: 10,
		width: 190,
		height: 50,
		alignSelf: 'center',
		marginBottom: 10,
		marginTop: 15,

	},
	buttomText: {
		fontSize: 26,
		color: '#B3C2F2',
		marginTop: 5,
	}
})