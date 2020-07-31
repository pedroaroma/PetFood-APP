import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor'
export default class SearchSellsClient extends Component {


    state = {
        filtrado: global.listaCompras,
    }


    render() {
        return (
            <View style={styles.container}>
                <GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />
                <View style={styles.headerBox}>
                    <Text style={styles.header}>Resultados da pesquisa para</Text>
                    <Text style={styles.pesquisa}>{JSON.stringify(global.searchCompraComprador)}</Text>
                </View>

                {this.state.filtrado.map(element => {
                    if (element.nomeLoja.includes(global.searchCompraComprador)) {
                        return (
                            <View key={element._id} style={styles.AllCell}>
                                <Text style={styles.text}>Nome da Loja: {element.nomeLoja}</Text>
                                <Text style={styles.text}>ID da Compra: {element._id}</Text>
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
    }
})