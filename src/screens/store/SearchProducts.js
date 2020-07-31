import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor'

export default class SearchProducts extends Component {

    state = {
        filtrado: global.listaVendas,
    }
    render() {
        return (
            <View style={styles.container}>
                <GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />
                <View style={styles.headerBox}>
                    <Text style={styles.header}>Resultados da pesquisa para</Text>
                    <Text style={styles.pesquisa}>{JSON.stringify(global.searchVendedor)}</Text>
                </View>

                {this.state.filtrado.map(element => {
                    if (element.nomeProduto.includes(global.searchVendedor)) {
                        return (
                            <View key={element._id} style={styles.AllCell}>
                                <View style={{flexDirection: 'row'}}>
                                <Text style={styles.text}>Nome do Produto: </Text>
                                <Text style={styles.textNome}>{element.nomeProduto}</Text>
                                </View>
                                
                                <Text style={styles.text}>ID do Produto: {element._id}</Text>
                                <Text style={styles.text}>Preço: {element.preco} Reais</Text>
                                <Text style={styles.text}>Cód Barras: {element.codBarras} Reais</Text>
                            </View>


                        )
                    } else {
                    }
                })
                }

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
        backgroundColor: '#B3C2F2'
    },
    headerBox: {
        alignItems: 'center'
    },
    header: {
        fontSize: 20
    },
    pesquisa: {
        fontSize: 25
    },
    AllCell: {
        backgroundColor: '#F0F7EE',
        marginBottom: 10,
        borderRadius: 15,
        marginHorizontal: 5,
        marginVertical: 10
    },
    text: {
        marginLeft: 15,
        fontSize: 16
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
    textNome: {
        fontSize: 16,
        color: 'blue'
    },
})