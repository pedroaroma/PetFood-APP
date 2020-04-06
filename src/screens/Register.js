import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import GeneralStatusBarColor from '../components/GeneralStatusBarColor'
import SplashScreen from 'react-native-splash-screen' //retirar depois que resolver a navegação

class Register extends Component {

    state = {
        name: '', //ok
        email: '', //ok
        password: '', //
        cpf: '', // ok
        cep: '', // ok
        rua: '', // ok
        numero: '', //ok
        estado: '', //ok
        cidade: '', //ok
        bairro: '', //ok
        complemento: '', //ok
        telefone: '', //ok
        dataNascimento: '' //ok
    }
    componentDidMount(e) { //retirar depois para resolver a navegação
        SplashScreen.hide();
	}

    render() {
      return (
          <View style={styles.container}>
              <GeneralStatusBarColor backgrondColor="#29568F" barStyle="light-content" />

                <ScrollView>

                <TextInput placeholder='Nome' style={styles.input}
                    autoFocus={true} value={this.state.nome}
                    onChangeText={name => this.setState({ nome })} />

                <TextInput placeholder='Email' style={styles.input}
                    keyboardType='email-address' value={this.state.email}
                    onChangeText={email => this.setState({email})} />

                <TextInput placeholder='Senha' style={styles.input} value={this.state.password}
                    onChangeText={password => this.setState({ password })} />

                <TextInput placeholder='CPF' style={styles.input} value={this.state.cpf}
                    onChangeText={cpf => this.setState({ cpf })} />

                <TextInput placeholder='CEP' style={styles.input} value={this.state.cep}
                    onChangeText={cep => this.setState({ cep })} />

                <TextInput placeholder='Rua' style={styles.input} value={this.state.rua}
                    onChangeText={rua => this.setState({ rua })} />

                <TextInput placeholder='Número' style={styles.input} value={this.state.numero}
                    onChangeText={numero => this.setState({ numero })} />

                <TextInput placeholder='Estado' style={styles.input} value={this.state.estado}
                    onChangeText={cpf => this.setState({ estado })} />

                <TextInput placeholder='Cidade' style={styles.input} value={this.state.cidade}
                    onChangeText={cidade => this.setState({ cidade })} />

                <TextInput placeholder='Bairro' style={styles.input} value={this.state.bairro}
                    onChangeText={bairro => this.setState({ bairro })} />

                <TextInput placeholder='Complemento' style={styles.input} value={this.state.complemento}
                    onChangeText={complemento => this.setState({ complemento })} />
                
                <TextInput placeholder='Telefone' style={styles.input} value={this.state.telefone}
                    onChangeText={telefone => this.setState({ telefone })} />

                <TextInput placeholder='Data de Nascimento' style={styles.input} value={this.state.dataNascimento}
                    onChangeText={dataNascimento => this.setState({ dataNascimento })} /> 

            </ScrollView>
            
                <TouchableOpacity onPress={()=> alert('todo')} style={styles.buttom}>
                    <Text style={styles.buttomText}>Cadastrar</Text>
                </TouchableOpacity>

          </View>
      )
    };
}
const styles = StyleSheet.create({

    container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#29568F',	
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

export default Register

