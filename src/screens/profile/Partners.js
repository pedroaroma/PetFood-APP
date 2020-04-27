import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor'
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';

export default class Partners extends Component {
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
							<Text style={styles.TextFormSub}>Pensa em expandir suas negócios? Seja nosso parceiro e aumente suas vendas!</Text>
						</View>
						<View>
							<Text style={styles.inputText}>Nome da Loja</Text>
							<TextInput style={styles.input} placeholder="Qual é o nome da Loja?" placeholderTextColor="#fff"
								secureTextEntry={false}
							/>
						</View>
						<View>
							<Text style={styles.inputText}>CNPJ</Text>
							<TextInput style={styles.input} placeholder="qual é o CNPJ do estabelecimento?" placeholderTextColor="#fff"
								secureTextEntry={false}
							/>
						</View>
						<View>
							<Text style={styles.inputText}>Telefone Comercial (com DDD)</Text>
							<TextInput style={styles.input} placeholder="qual é o tel. comercial do estabelecimento?" placeholderTextColor="#fff"
								secureTextEntry={false}
							/>
						</View>
						<View>
							<Text style={styles.inputText}>CEP</Text>
							<TextInput style={styles.input} placeholder="qual é o CEP do estabelecimento?" placeholderTextColor="#fff"
								secureTextEntry={false}
							/>
						</View>
						<View>
							<Text style={styles.inputText}>Endereço</Text>
							<TextInput style={styles.input} placeholder="fornecdo pela api" placeholderTextColor="#fff"
								secureTextEntry={false}
							/>
						</View>
						<View style={styles.NumComp}>
							<View>
								<Text style={styles.inputText}>Número</Text>
								<TextInput style={styles.input} placeholder="N°" placeholderTextColor="#fff"
									secureTextEntry={false}
								/>
							</View>
							<View>
								<Text style={styles.inputText}>Complemento</Text>
								<TextInput style={styles.input} placeholder="Ex: Casa 1, apto 22, bloco 2              " placeholderTextColor="#fff"
									secureTextEntry={false}
								/>
							</View>
						</View>
						<View><Text></Text></View>
					</View>

					<TouchableOpacity onPress={() => { }} style={styles.buttom}>
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