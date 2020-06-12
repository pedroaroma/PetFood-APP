import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native'
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor'

import api from '../../services/api'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import Icon5 from 'react-native-vector-icons/FontAwesome5';


/*
		global.nomeProduto = '',
		global.preco = '',
		global.codBarras = '',
		global.descricao = '',
		global.tags = '',
		global.itemId = ''

		    usuario.teste2@email.com.br
			123456789
			
			//GAMBIARRA COM VARIAVEIS GLOBAIS, PESQUISAR UM MÉTODO PARA PASSAR PARAMETROS ENTRE CLASSES COMPONENTES
*/

export default class ProductEdit extends Component {

	state = {

		lojaId: global.idLoja,
		nomeProduto: global.nomeProduto,
		preco: String(global.preco),
		codBarras: String(global.codBarras),
		descricao: String(global.descricao),
		tags: String(global.tags),
		_id: global.itemId
	}

	productEditor = () => {

		api.patch('/store/product', {

			lojaId: this.state.lojaId,
			nomeProduto: this.state.nomeProduto,
			preco: this.state.preco,
			codBarras: this.state.codBarras,
			descricao: this.state.descricao,
			tags: this.state.tags,
			_id: this.state._id
		}, {
			headers: {
				'Authorization': `Bearer ${global.Token}`,
			}
		})
			.then(response => {
				alert("Produto Editado com sucesso")
				//console.debug(response.data)
				this.props.navigation.navigate('AdminStore')

			})
			.catch(function (error) {
				alert("ops, algo deu errado")
				console.debug(error.response)
			})
			
	}



	render() {
		return (
			<View style={styles.container}>

				<GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />

				<Text style={styles.header}>Editar Item</Text>
				<View style={styles.lineStyle}></View>

				<Text style={styles.segHeader}>Informações Gerais</Text>
				<View style={styles.lineStyle}></View>
				<ScrollView>
					<View style={styles.primBloco}>
						<View style={styles.primBlocoEsq}>
							<TouchableOpacity onPress={() => alert('Upload de foto')}>
								<Icon5 name="file-upload" size={128} color='#29568F' />
								<Text style={styles.foto}> Escolher foto</Text>
							</TouchableOpacity>
						</View>


						<View style={styles.primBlocoDir}>

							<TextInput style={styles.textNomeProduto}
								placeholder={global.nomeProduto}
								value={this.state.nomeProduto}
								onChangeText={nomeProduto => this.setState({ nomeProduto })}
								placeholderTextColor="#B3C2F2"
							/>

							<View style={styles.primBlocoSegLinha}>

								<TextInput style={styles.textPreco}
									placeholder={String("R$: "+ global.preco)}
									value={this.state.preco}
									onChangeText={preco => this.setState({ preco })}
									placeholderTextColor="#B3C2F2"
								/>


								<TextInput style={styles.button}
									placeholder={String(global.codBarras)}
									value={this.state.codBarras}
									onChangeText={codBarras => this.setState({ codBarras })}
									placeholderTextColor="#B3C2F2"
								/>

							</View>
						</View>
					</View>
					<View><Text></Text></View>
					<View style={styles.lineStyle}></View>

					<View style={styles.segBloco}>

						<Text style={styles.descricaoText}>Descrição</Text>

						<TextInput style={styles.descricaoInput}
							placeholder={global.descricao}
							value={this.state.descricao}
							onChangeText={descricao => this.setState({ descricao })}
							placeholderTextColor="#B3C2F2"
							multiline
						/>

						<Text style={styles.descricaoText}>Tags</Text>

						<TextInput style={styles.tagsInput}
							placeholder={global.tags}
							value={this.state.tags}
							onChangeText={tags => this.setState({ tags })}
							placeholderTextColor="#B3C2F2"
						/>

					</View>

					<View style={styles.terBloco}>

						<TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.botaoVoltar}>
							<Text style={styles.voltarBotaoTexto}>Cancelar</Text>
						</TouchableOpacity>

						<TouchableOpacity onPress={this.productEditor} style={styles.botaoVoltar}>
							<Text style={styles.voltarBotaoTexto}>Editar Item</Text>
						</TouchableOpacity>

					</View>
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

	header: {
		fontWeight: 'bold',
		fontSize: 20,
		marginLeft: 5
	},

	segHeader: {
		fontSize: 18,
		marginLeft: 5,
		marginTop: 5,
		textDecorationLine: 'underline',
	},

	lineStyle: {
		borderWidth: 0.5,
		borderColor: 'black',
	},

	primBloco: {
		flexDirection: 'row',
		marginLeft: 20,
		marginTop: 30,

	},

	primBlocoEsq: {
		alignItems: 'center'
	},

	primBlocoDir: {
		flexDirection: 'column',
		alignItems: 'flex-end',
		marginTop: 20,
		marginLeft: 20,


	},

	foto: {
		backgroundColor: '#29568F',
		borderRadius: 10,
		color: '#B3C2F2',
		fontSize: 15,
		width: 100,
		height: 'auto'
	},

	textNomeProduto: {

		backgroundColor: '#29568F',
		fontSize: 20,
		color: '#B3C2F2',
		borderRadius: 10,
		width: 250,

	},

	textPreco: {

		backgroundColor: '#29568F',
		fontSize: 20,
		color: '#B3C2F2',
		borderRadius: 10,
		marginRight: 5,
		width: 139,
	},

	button: {
		backgroundColor: '#29568F',
		fontSize: 20,
		color: '#B3C2F2',
		borderRadius: 10,
	},

	segBloco: {
		alignItems: 'center',

	},

	primBlocoSegLinha: {
		marginTop: 5,
		flexDirection: 'row',
	},

	descricaoText: {
		fontSize: 20,
		color: "#29568F"
	},

	descricaoInput: {
		marginTop: 5,
		width: Math.round(Dimensions.get('window').width) - 20,
		backgroundColor: '#29568F',
		borderRadius: 10,
		height: 150,
		color: '#B3C2F2',

	},

	tagsInput: {
		width: Math.round(Dimensions.get('window').width) - 20,
		backgroundColor: '#29568F',
		borderRadius: 10,
		color: '#B3C2F2',
	},

	terBloco: {
		margin: 10,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	botaoVoltar: {

		marginTop: 5,
		backgroundColor: '#29568F',
		borderRadius: 10,
		width: 120,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center'

	},

	voltarBotaoTexto: {

		fontSize: 20,
		color: '#B3C2F2'
	},

})
