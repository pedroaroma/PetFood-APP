import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor'
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import api from '../../services/api';

//import api from '../services/api'

export default class StoreHomePage extends Component {

    state = {

        products: [],
    }

    componentDidMount() {
        this.getProducts()
    }


    getProducts = async () => {
        const response = await api.get(`/store/${global.idLoja}/products`, {
            headers: {
                'Authorization': `Bearer ${global.Token}`,
            }
        })
        const productsList = response.data
        this.setState({ products: productsList })

        console.debug(response.data)
        console.debug(global.idLoja)
    }

    render() {
        return (
            <View style={styles.container}>
                <GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />

                <View style={styles.cabecalho}>
                    <Text style={styles.nomeLoja}>{global.nomeLoja}</Text>

                    <View style={styles.endereco}>
                        <Text>{global.enderecoLoja}</Text>
                        <Text>, {global.numLoja}</Text>
                    </View>

                </View>

                <View style={styles.produtoRender}>
                    <View>
                        <Text style={styles.produtoCab}>Produtos</Text>
                    </View>

                    <ScrollView>
                        <View>
                            {this.state.products.map(product => {
                                return (
                                    <View key={product._id} style={styles.produto}>
                                        <TouchableOpacity onPress={() => {
                                            global.carrinho.nomeProduto = product.nomeProduto
                                            global.carrinho.preco = product.preco
                                            global.carrinho.codBarras = product.codBarras
                                            global.carrinho.descricao = product.descricao
                                            global.carrinho.tags = product.tags
                                            //VARIAVEIS PARA EFETUAR A COMPRA NA API
                                            global.carrinho.produtoId = product._id
                                            global.carrinho.lojaId = global.idLoja
                                            global.carrinho.preco = product.preco
                                            this.props.navigation.navigate("BuyProduct")

                                        }
                                        }>
                                            <View>

                                                <Text style={styles.texto}>Nome: {product.nomeProduto}</Text>
                                                <Text style={styles.texto}>Preço: {product.preco} Reais</Text>

                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}
                        </View>
                            <View>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.voltarBtn}>
                    <Icon5 name="arrow-left" size={36} color="#29568F" />
                </TouchableOpacity>
                </View>
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
    cabecalho: {
        alignItems: 'center'
    },
    nomeLoja: {
        fontSize: 28,
    },
    endereco: {
        flexDirection: 'row',
    },
    produtoRender: {
        padding: 10,
    },
    produtoCab: {
        fontSize: 24,
        alignSelf: 'center'
    },
    produto: {
        margin: 10,
        backgroundColor: '#29568F',
        marginBottom: 10.5,
        marginTop: 3.5,
        borderRadius: 5
    },
    texto: {
        fontSize: 18,
        color: '#B3C2F2',
        marginLeft: 2,
    },

    voltarBtn: {
        marginTop:-10,
        alignSelf: 'center',
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 10,
        backgroundColor: '#B3C2F2',
        width: 48
    },

})