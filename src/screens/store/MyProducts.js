import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor'
import api from '../../services/api'
import { ScrollView } from 'react-native-gesture-handler'
import Icon5 from 'react-native-vector-icons/FontAwesome5';

export default class MyProducts extends Component {

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

        const produtos = response.data
        this.setState({ products: produtos })

    }

    render() {
        return (
            <View style={styles.container}>

                <GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />

                <View style={styles.header}>
                    <Text style={styles.headerText}>Meus produtos</Text>
                </View>
                <View style={styles.lineStyle}></View>




                <ScrollView>
                    {this.state.products.map(product => {
                        return (
                            <View key={product._id} style={styles.produto}>
                                <Text style={styles.texto}>Nome: {product.nomeProduto}</Text>
                                <Text style={styles.texto}>Preço: {product.preco} Reais</Text>
                                <Text style={styles.texto}>Cód Barras: {product.codBarras}</Text>
                                <Text style={styles.texto}>Descrição: {product.descricao}</Text>
                            </View>
                        )
                    })}
                </ScrollView>

                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.voltarbotao}>
                    <Icon5 name="arrow-left" size={80} color="#91A8A4" style={styles.allignIcon} />
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
    header: {
        margin: 10,
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        marginBottom: 6,
    },
    headerText: {
        fontSize: 26,
        marginBottom: -5,
    },
    produto: {
        margin: 10,
        backgroundColor: '#29568F',
        marginBottom: 3.5,
        marginTop: 3.5,
        borderRadius: 5
    },

    texto: {
        fontSize: 18,
        color: '#B3C2F2',
        marginLeft: 2,
    },

    allignIcon: {
        alignSelf: 'center'
    },

    voltarbotao: {
        marginTop: 5,
        alignItems: 'center',
        marginLeft: Math.round(Dimensions.get('window').width) / 2.5,
        marginBottom: 5,
        justifyContent: 'center',
        backgroundColor: '#F0F7EE',
        borderRadius: 360,
        width: 80,
        height: 80,
    }
})