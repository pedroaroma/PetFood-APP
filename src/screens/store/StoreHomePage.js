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

    componentDidMount(){
        this.getProducts()
    }

    getProducts = async () => {
        const response = await api.get(`/store/${global.idLoja}/products`, {
            headers: {
                'Authorization': `Bearer ${global.Token}`,
            }
        })
        const productsList = response.data
        this.setState({products: productsList})

        console.debug(response.data)
        console.debug(global.idLoja)
    }

    render(){
        return(
            <View>
                <GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />
                <Text>Tela do perfil da loja</Text>
                <Text>{global.nomeLoja}</Text>
                <Text>{global.enderecoLoja}</Text>
                <Text>{global.numLoja}</Text>
                <Text>{global.idLoja}</Text>

                <Text>Produtos</Text>

                <View>
                    {this.state.products.map(product => {
                        return(
                        <TouchableOpacity key={product._id}> 
                            <Text>{product.nomeProduto}</Text>
                        </TouchableOpacity>
                     ) })}
                </View>

            </View>
        )
    }
}