import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import GeneralStatusBarColor from '../components/GeneralStatusBarColor'
import { ScrollView } from 'react-native-gesture-handler'

export default class SearchProductFiltred extends Component {


    state = {

        filtrado: global.AllProducts

    }
    render() {
        return (
            <View style={styles.container}>
                <GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />
                <View style={styles.headerBox}>
                    <Text style={styles.header}>Resultados da pesquisa para</Text>
                    <Text style={styles.pesquisa}>{JSON.stringify(global.pesqproductfiltrado)}</Text>
                </View>
                <ScrollView>
                    {this.state.filtrado.map(element => {
                        if (element.nomeProduto.includes(global.pesqproductfiltrado)) {
                            return (
                                <View key={element._id} style={styles.AllCell}>
                                    <Text style={styles.text}>Nome do Produto: {element.nomeProduto}</Text>
                                    <Text style={styles.text}>Preço: {element.preco} Reais</Text>
                                    <Text style={styles.text}>Descrição: {element.descricao}</Text>
                                </View>


                            )
                        } else {
                        }
                    })
                    }
                </ScrollView>
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