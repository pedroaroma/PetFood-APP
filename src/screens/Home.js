import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import GeneralStatusBarColor from '../components/GeneralStatusBarColor'
import api from '../services/api'

/*
    usuario.teste2@email.com.br
    123456789
*/

export default class Home extends Component {

    state ={

        stores: [],

    }

    componentDidMount(){
        this.getStores()
    }

    getStores = async () => {
        const response = await api.get('/store/all',{
            headers: {
                'Authorization': `Bearer ${global.Token}`,
            }
        })
        const stores = response.data
        this.setState({stores: stores})

        console.debug(response.data)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.modal}>

                    <GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />
                    {/*<Text>Tela apenas para Debug</Text>
                    <Text>{global.isPartner ? 'Tipo de Login: Loja' : 'cliente'}</Text>
                    <Text>{'Token do usuário: ' + (global.Token == '' ? 'Modo offline = sem token' : global.Token)}</Text>
                    <Text>{'ID da Loja: ' + global.idLoja}</Text>
                    <Text> TODO: 1 - LISTAR LOJAS DISPONIVEIS</Text>
                    <Text>2 - Editar o produto</Text>*/}

                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Entrega</Text>
                        <View style={styles.lineStyle}></View>
                        <Text style={styles.endEntrega}>{global.endEntrega}</Text>
                        <View style={styles.lineStyle}></View>

                    </View>

                    <View>
                        <Text style={styles.princiPetshops}>Principais Petshops</Text>

                    </View>


                <ScrollView>
                    {this.state.stores.map(store => {
                        return(
                            <View key={store._id}>
                                <Text>Nome da Loja: {store.nomeLoja}</Text>
                            </View>
                        )
                    })}
                </ScrollView>




                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#B3C2F2',
    },
    header:{
        marginTop: 11,
    },

    headerTitle:{
        fontSize: 26,
        
    },

    endEntrega: {
        fontSize: 22,
    },

    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        marginBottom: 6,
        marginHorizontal: -10,
    },
    
    princiPetshops: {
        fontWeight: 'bold',
        margin: 10,
    },

    modal: {
        margin: 10,
    },
})