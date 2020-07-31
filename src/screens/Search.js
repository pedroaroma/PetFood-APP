import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import GeneralStatusBarColor from '../components/GeneralStatusBarColor'
import api from '../services/api'
import Icon5 from 'react-native-vector-icons/FontAwesome5'
import { ScrollView } from 'react-native-gesture-handler'


export default class Search extends Component {

    state = {
        AllProducts: [],
        pesquisa: '',
    }

    componentDidMount() {
        this.getAllProducts()
    }

    GetOrdersRender() {
        this.getAllProducts();
    }


    getAllProducts = async () => {
        await api.get('/store/product/all', {
            headers: {
                'Authorization': `Bearer ${global.Token}`,
            }
        }).then(response => {
            global.AllProducts = response.data
            this.setState({ AllProducts: response.data })
        }).catch(function (error) {
            alert("ops algo deu erra do")
            console.log(error)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />


                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.pesquisa}>
                        <TextInput
                            value={this.state.pesquisa}
                            onChangeText={pesquisa => { this.setState({ pesquisa }) }}
                            placeholder="Pesquisar"
                        />
                    </View>

                    <View>
                        <TouchableOpacity style={styles.icon} onPress={() => {
                            global.pesqproductfiltrado = this.state.pesquisa
                            this.props.navigation.navigate('SearchProductFiltred')

                        }}>
                            <Icon5 name="search" size={28} color="#29568F" />
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={{alignSelf: 'center', fontSize: 19}}>Busca de todos os produtos</Text>
                <ScrollView>
                    <View style={styles.listaProduto}>
                        {this.state.AllProducts.map(element => {
                            return (
                                <View key={element._id} style={styles.AllCell}>
                                    <TouchableOpacity style={styles.cell} onPress={
                                        () => {}
                                    }>
                                        <Text style={styles.cellText}>Nome Produto: {element.nomeProduto}</Text>
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
    },
    listaProduto: {
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
        marginTop: 10,
        marginBottom: 10,
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

})