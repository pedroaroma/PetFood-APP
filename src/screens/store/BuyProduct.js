import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor'
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import api from '../../services/api';
import { Value } from 'react-native-reanimated';

export default class BuyProduct extends Component {


    buyProduct = async () => {
        console.log(global.carrinho.produtoId + " / " + global.carrinho.lojaId + " / " + global.carrinho.preco)
        await api.post('/order', {
            produtoId: global.carrinho.produtoId,
            lojaId: global.carrinho.lojaId,
            preco: global.carrinho.preco
        }, {
            headers: {
                'Authorization': `Bearer ${global.Token}`,
            }
        })
            .then(response => {
                alert("Pedido realizado com sucesso")
                this.props.navigation.navigate('Home')
            })
            .catch(function (error) {
                alert("algo deu errado em sua compra")
                console.debug(error)
            })

    }





    render() {
        return (
            <View style={styles.container}>
                <GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />



                <View style={styles.nomeProduto}>
                    <Text style={styles.nomedoproduto}>{global.carrinho.nomeProduto}</Text>
                </View>


                <View style={{ marginLeft: 10 }}>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ fontSize: 18 }}>Preço: </Text>
                        <Text style={{ fontSize: 18, color: 'green' }}>{global.carrinho.preco} Reais</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 18 }}>Descrição: {global.carrinho.descricao}</Text>
                        <Text style={{ fontSize: 18 }}>Cód Barras: {global.carrinho.codBarras}</Text>
                    </View>
                </View>




                <View style={{ flexDirection: 'row', alignContent: 'space-between', marginLeft: 10 }}>

                    <TouchableOpacity onPress={this.buyProduct} style={styles.button}>
                        <Text style={styles.buttonText}>Comprar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.buttonVoltar}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>


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
    nomeProduto: {
        marginTop: 10,
        alignItems: 'center'
    },
    nomedoproduto: {
        fontSize: 25
    },
    containerDesc: {
        backgroundColor: '#29568F',
        alignSelf: 'center',
        borderRadius: 15,
        alignItems: 'center'
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
    },
    buttonVoltar: {
        alignSelf: 'center',
        backgroundColor: '#F0F7EE',
        height: 35,
        width: 90,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 210
    }
})