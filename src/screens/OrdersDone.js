import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import GeneralStatusBarColor from '../components/GeneralStatusBarColor'
import api from '../services/api'


export default class OrdersDone extends Component {

    state = {
        produto: []
    }

    getProductInfo = async () => {
        await api.get(`/store/product/${global.compra.produtoId}`, {
            headers: {
                'Authorization': `Bearer ${global.Token}`,
            }
        }).then(response => {
            this.setState({ produto: response.data })
        }).catch(function (error) {
            alert("algo deu errado")
            console.log("algo deu errado")
        })

    }

    componentDidMount() {
        this.getProductInfo()
    }

    render() {
        return (
            <View style={styles.container}>
                <GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />

                <View style={styles.cabecalho}>
                    <Text style={styles.cabecalhoInfo}>Informações de compra</Text>
                </View>

                <View style={styles.productinfo}>
                    <View >
                        <Text style={styles.productLines}>Nome do produto: {this.state.produto.nomeProduto}</Text>
                        <Text style={styles.productLines}>Preço: {this.state.produto.preco} Reais</Text>
                        <Text style={styles.productLines}>Código de barras: {this.state.produto.codBarras}</Text>
                        <Text style={styles.productLines}>ID de compra: {global.compra.compraId}</Text>
                        <Text style={styles.productLinesAnd}>{global.compra.finalizado === false?'Pedido Em Andamento':'Pedido Finalizado'}</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.button}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B3C2F2',
    },
    cabecalho: {
        alignSelf: 'center'
    },
    cabecalhoInfo: {
        fontSize: 30
    },
    productinfo: {
        backgroundColor: '#F0F7EE',
        borderColor: 'black',
        borderWidth: 1,
    },
    productLines: {
        marginLeft: 10,
        fontSize: 20,
    },
    productLinesAnd: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        fontSize: 20,
        color: 'blue',
        alignSelf: 'center'
    },
    button: {
        alignSelf: 'center',
        backgroundColor: '#F0F7EE',
        height: 35,
        width: 90,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 22,
    }

})