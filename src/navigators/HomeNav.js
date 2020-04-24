import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import GeneralStatusBarColor from '../components/GeneralStatusBarColor'

export default class HomeNav extends Component{
    render(){
        return(
            <View>
                <GeneralStatusBarColor backgrondColor="#29568F" barStyle="light-content" />
                <Text>Tela Inicial</Text>
            </View>
        )
    }
}