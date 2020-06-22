import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Dimensions, Image } from 'react-native'
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor'
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import apiCep from '../../services/apiCep'
import api from '../../services/api'
import RNRestart from 'react-native-restart'


/*
usuario.teste2@email.com.br
123456789
*/

export default class EditProfile extends Component {

	state = {
		nome: global.nomeUsuario, //ok
		email: global.userEmail, //ok
		password: '', //
		cpf: global.userCpf, // ok
		cep: global.userCep, // ok
		rua: global.userRua, // ok
		numero: String(global.userNumEnd), //ok
		estado: global.userEstado, //ok
		cidade: global.userCidade, //ok
		bairro: global.userBairro, //ok
		complemento: global.userComplemento, //ok
		telefone: global.userTel, //ok
		dataNascimento: global.userDataNascimento //ok
	}

	editUser = () => {

        //console.debug(this.state)

        api.patch('/auth/user', {
            _id: global.userId,
            email: this.state.email, //INPUT PELO USUARIO
            senha: this.state.password, //INPUT PELO USUARIO
            nome: this.state.nome, //INPUT PELO USUARIO
            cpf: this.state.cpf, //CHUMBADO PARA EVITAR FORM LONGO = EDITAVEL NO PERFIL DO USUÁRIO
            telefone: this.state.telefone, //INPUT PELO USUARIO
            estado: this.state.estado, //AUTOMATICO PELA API
            cidade: this.state.cidade, //AUTOMATICO PELA API
            bairro: this.state.bairro, //AUTOMATICO PELA API
            rua: this.state.rua, //AUTOMATICO PELA API
            numero: this.state.numero, //INPUT PELO USUARIO
            complemento: this.state.complemento, //INPUT PELO USUARIO
            cep: this.state.cep, //INPUT PELO USUARIO
            dataNascimento: '123456' //CHUMBADO PARA EVITAR FORM LONGO = EDITAVEL NO PERFIL DO USUÁRIO
        })
            .then(response => {
                alert("Edição Bem Sucedida")
				RNRestart.Restart()
				
            })
            .catch(function (error) {
                alert("Ops, algo deu errado")
                console.debug(error.response)
                //alert(error.response)
            })
	}

	validaCep = () => {
        apiCep.get(`${this.state.cep}/json/`)
            .then(response => {
                console.debug(response.data)

                this.setState({ rua: response.data.logradouro })
                this.setState({ estado: response.data.uf })
                this.setState({ cidade: response.data.localidade })
                this.setState({ bairro: response.data.bairro })

                console.debug(this.state.rua + '/' + this.state.estado + '/' + this.state.cidade + '/' + this.state.bairro)

            })
            .catch(function (error) {
                alert("Verifique se seu CEP está correto")
                console.debug(error.response)
                //alert(error.response)
            })
    }


	render() {
		//console.log(this.state.numero)
		return (
			<View style={styles.container}>
				<GeneralStatusBarColor backgrondColor="#29568F" barStyle="light-content" />

				<View style={styles.header}>
					<Image
						style={styles.logo}
						source={require('../../images/logo.png')} />
					<Text style={styles.headerText}>Editar Perfil</Text>
				</View>
				<ScrollView>
					<View style={styles.formCell}>

						<Text style={styles.formText}>Nome completo</Text>
						<TextInput style={styles.input}
							autoFocus={false} value={this.state.nome}
							onChangeText={nome => this.setState({ nome })} />

						{/*<TextInput placeholder='CPF' style={styles.input2}
                        value={this.state.cpf}
                        onChangeText={cpf => this.setState({ cpf })} />*/}

						<Text style={styles.formText}>CEP</Text>
						<TextInput style={styles.input}
							maxLength={8}
							value={this.state.cep}
							onBlur={this.validaCep}
							onChangeText={cep => this.setState({ cep })} />

						<Text style={styles.formText}>Endereço</Text>
						<TextInput style={styles.input}
							editable={false}
							value={this.state.rua}
							onChangeText={rua => this.setState({ rua })} />

						<View style={styles.numComplemento}>
							<Text style={styles.formText}>Número</Text>
							<View>
								<Text style={styles.formTextComp}>Complemento</Text>
							</View>
						</View>

						<View style={styles.formCellNumComp}>
							<TextInput style={styles.inputNum}
								value={this.state.numero}
								onChangeText={numero => this.setState({ numero })} />

							<TextInput style={styles.inputComp}
								value={this.state.complemento}
								onChangeText={complemento => this.setState({ complemento })} />
						</View>

						<Text style={styles.formText}>Telefone</Text>
						<TextInput style={styles.input}
							value={this.state.telefone}
							onChangeText={telefone => this.setState({ telefone })} />

						<Text style={styles.formText}>Senha</Text>
						<TextInput style={styles.input}
							value={this.state.password}
							secureTextEntry={true}
							onChangeText={password => this.setState({ password })} />

					</View>
					{/*<TextInput placeholder='Estado' style={styles.input2}
                        value={this.state.estado}
                        onChangeText={estado => this.setState({ estado })} />

                    <TextInput placeholder='Cidade' style={styles.input2}
                        value={this.state.cidade}
                        onChangeText={cidade => this.setState({ cidade })} />

                    <TextInput placeholder='Bairro' style={styles.input2}
                        value={this.state.bairro}
                        onChangeText={bairro => this.setState({ bairro })} />*/}
					{/*<TextInput placeholder='Data de Nascimento' style={styles.input2}
                        value={this.state.dataNascimento}
                        onChangeText={dataNascimento => this.setState({ dataNascimento })} />*/}
					
					
					<View style={styles.footer}>

						<TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.voltarBtn}>
							<Icon5 name="arrow-left" size={48} color="#29568F" />
						</TouchableOpacity>

						<TouchableOpacity onPress={this.editUser} style={styles.cadastrarBtn}>
							<Text style={styles.cadastrarBtnText}>Editar Usuário</Text>
						</TouchableOpacity>

					</View>
				</ScrollView>
			</View>

		)
	};
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#29568F',
    },

    header: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: -10,
        marginTop: -5,
    },

    headerText: {
        fontSize: 26,
        marginHorizontal: 36,
        color: '#B3C2F2',


    },

    logo: {
        resizeMode: 'center',
        height: 100,
        width: 100,
    },

    formCell: {
        margin: 10,
    },

    formText: {
        fontSize: 16,
        color: '#B3C2F2'
    },

    input: {
        borderRadius: 10,
        backgroundColor: '#B3C2F2'
    },

    numComplemento: {
        flexDirection: 'row'
    },

    inputNum: {
        borderRadius: 10,
        backgroundColor: '#B3C2F2',
        width: 70,
    },

    formCellNumComp: {
        flexDirection: 'row'
    },

    inputComp: {
        borderRadius: 10,
        backgroundColor: '#B3C2F2',
        marginLeft: 5,
        width: 315
    },

    formTextComp: {
        fontSize: 16,
        color: '#B3C2F2',
        marginLeft: 15,
    },

    footer: {
        flexDirection: 'row'
    },

    cadastrarBtn: {
        marginLeft: 75,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B3C2F2',
        borderRadius: 10,
        width: 150,
        height: 50,
    },

    voltarBtn: {
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 10,
        backgroundColor: '#B3C2F2',
        width: 48
    },

    cadastrarBtnText: {
        fontSize: 20,
        color: '#29568F'

    }


})