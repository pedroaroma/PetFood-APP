import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon5 from 'react-native-vector-icons/FontAwesome5';

export default class AdminStore extends Component   {
    render(){
        return(
            <View>
                <GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />
               
                <Text>Nome da Loja</Text>

                <TouchableOpacity onPress={ () => this.props.navigation.navigate('ProductUpload')}>
                    <Text>Cadastrar produto</Text>
                </TouchableOpacity>
                
                <Text>Minhas Vendas</Text>

            </View>
        )
    }

}