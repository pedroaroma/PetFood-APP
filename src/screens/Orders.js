import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import GeneralStatusBarColor from '../components/GeneralStatusBarColor'
import api from '../services/api'
import { ScrollView } from 'react-native-gesture-handler'
import Icon5 from 'react-native-vector-icons/FontAwesome5'


export default class Orders extends Component {


    state = {
        MyOrders: [],
        contador: 1,
        pesquisa: '',
    }

    componentDidMount() {
        this.getOrders()
    }

    getOrders = async () => {
        await api.get('/order/orders', {
            headers: {
                'Authorization': `Bearer ${global.Token}`,
            }
        }).then(response => {
            this.setState({ MyOrders: response.data })
            global.listaCompras = response.data
        }).catch(function (error) {
            console.log(error)
        })
    }

    GetOrdersRender() {
        this.getOrders();
    }

    render() {
        return (
            <View style={styles.container}>
                <GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.pesquisa}>
                        <TextInput
                            value={this.state.pesquisa}
                            onChangeText={pesquisa => { this.setState({ pesquisa }) }}
                            placeholder="Pesquisar"
                        />
                    </View>

                    <View>
                        <TouchableOpacity style={styles.icon} onPress={()=> {
                            this.props.navigation.navigate('SearchSellsClient')
                            global.searchCompraComprador = this.state.pesquisa

                        }}>
                            <Icon5 name="search" size={28} color="#29568F" />
                        </TouchableOpacity>
                    </View>
                </View>


                <View>
                    <Text style={styles.title}>Lista de compras Efetuadas</Text>
                </View>
                <ScrollView>
                    <View style={styles.listaPedidos}>
                        {this.state.MyOrders.map(element => {
                            return (
                                <View key={element._id} style={styles.AllCell}>
                                    <TouchableOpacity style={styles.cell} onPress={() => {
                                        if (element.finalizado == false) {
                                            this.props.navigation.navigate('IncomingOrders')
                                            global.compra.compraId = element._id
                                            global.compra.finalizado = element.finalizado
                                            global.compra.produtoId = element.produtoId
                                        } else {
                                            this.props.navigation.navigate('OrdersDone')
                                            global.compra.compraId = element._id
                                            global.compra.finalizado = element.finalizado
                                            global.compra.produtoId = element.produtoId
                                        }


                                    }}>
                                        <Text style={styles.cellText}>Nome da Loja:  {element.nomeLoja}</Text>
                                        <Text style={styles.cellText}>ID do pedido:  {element._id}</Text>

                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>
                <TouchableOpacity style={styles.button} onPress={this.GetOrdersRender.bind(this)}>
                    <Text style={styles.buttonText}>Atualizar</Text>
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

    title: {
        fontSize: 20,
        alignSelf: 'center'
    },
    listaPedidos: {
        padding: 20,
        flexDirection: 'column',
    },
    cell: {
        backgroundColor: '#F0F7EE',
        borderRadius: 15,
        marginBottom: 10,
        height: 40,
        justifyContent: 'center'
    },
    cellText: {
        fontSize: 15,
        marginLeft: 10,
    },
    button: {
        marginBottom: 15,
        alignSelf: 'center',
        backgroundColor: '#F0F7EE',
        height: 45,
        width: 70,
        borderRadius: 10,
        justifyContent: 'center'
    },
    buttonText: {
        alignSelf: 'center'
    },
    pesquisa: {
        backgroundColor: '#F0F7EE',
        width: 350,
        height: 40,
        borderRadius: 10,
        marginLeft: 10,
        marginTop: 5,
        position: 'relative'
    },
    icon: {
        marginTop: 10,
        marginLeft: 10
    }
})