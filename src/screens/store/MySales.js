import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor'
import api from '../../services/api'
import { ScrollView } from 'react-native-gesture-handler'
import Icon5 from 'react-native-vector-icons/FontAwesome5'

var cont = 0;
export default class MySales extends Component {

    state = {
        orders: []
    }

    componentDidMount() {
        this.getSells()
    }

    getSells = async () => {
        await api.get('/order/ordersSeller', {
            headers: {
                'Authorization': `Bearer ${global.Token}`,
            }
        }).then(response => {
            this.setState({ orders: response.data })

        })

    }

    render() {
        return (
            <View style={styles.container}>
                <GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 24 }}>Lista de Vendas</Text>
                </View>
                <View style={styles.lineStyle}></View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 22 }}>Lista de vendas não finalizadas</Text>
                </View>
                <ScrollView>
                    {this.state.orders.map(element => {
                        if (element.finalizado == false) {
                            return (
                                <View key={element._id} style={styles.pedidosNfinalizados}>
                                    <TouchableOpacity onPress={
                                        () => {
                                            this.props.navigation.navigate('MySale')
                                            global.venda.vendaId = element._id
                                            global.venda.finalizado = element.finalizado
                                            global.venda.produtoId = element.produtoId
                                        }
                                    }>
                                        <View>
                                            <View style={styles.nFinalizadoText}>
                                                <Text>ID venda: {element._id}</Text>
                                                <Text>Produto Vendido: {element.nomeProduto}</Text>
                                                <Text>Nome do Cliente: {element.nomeCliente}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        }

                    })}
                </ScrollView>

                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 22 }}>Lista de Compras Finalizadas</Text>
                </View>
                <ScrollView>
                    {this.state.orders.map(element => {
                        cont = cont + element.preco
                        if (element.finalizado == true) {

                            return (
                                <View key={element._id} style={styles.pedidosFinalizados} >
                                    <TouchableOpacity onPress={
                                        () => {
                                            this.props.navigation.navigate('MySaleDone')
                                            global.venda.vendaId = element._id
                                            global.venda.finalizado = element.finalizado
                                            global.venda.produtoId = element.produtoId
                                        }
                                    }>
                                        <View style={styles.nFinalizadoText}>
                                            <Text>ID venda: {element._id}</Text>
                                            <Text>Produto Vendido: {element.nomeProduto}</Text>
                                            <Text>Nome do Cliente: {element.nomeCliente}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        }

                    })
                    }
                
                </ScrollView>

                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.voltarbotao}>
                    <Icon5 name="arrow-left" size={64} color="#91A8A4" style={styles.allignIcon} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B3C2F2'
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        marginBottom: 6,
        marginHorizontal: -10,
    },
    allignIcon: {
        alignSelf: 'center'
    },
    pedidosNfinalizados: {
        backgroundColor: '#F0F7EE',
        marginHorizontal: 10,
        borderRadius: 10,
        marginVertical: 2,
        borderColor: 'red',
        borderWidth: 1,
    },
    nFinalizadoText: {
        marginLeft: 10,
    },
    pedidosFinalizados: {
        backgroundColor: '#F0F7EE',
        marginHorizontal: 10,
        borderRadius: 10,
        marginVertical: 2,
        borderColor: 'green',
        borderWidth: 1,
    }
})