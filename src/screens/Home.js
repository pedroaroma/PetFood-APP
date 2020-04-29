import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import GeneralStatusBarColor from '../components/GeneralStatusBarColor'

export default class Home extends Component{
    render(){
        return(
            <View>
                <GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />
                <Text>Tela inicial do app</Text>
                <Text>{global.isPartner ? 'loja' : 'cliente'}</Text>
                <Text>{global.Token}</Text>
            </View>
        )
    }
}