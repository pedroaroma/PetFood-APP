import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import GeneralStatusBarColor from '../components/GeneralStatusBarColor'

export default class Search extends Component{
    render(){
        return(
            <View style={styles.container}>
                <GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />
                <Text>Tela de Busca de Produtos</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B3C2F2'
    },
})