import React, { Component } from 'react'
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native'
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor'

export default class MyProducts extends Component {

    render(){
        return(
            <View>
                <GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />
                <Text>Pagina de meus produtos</Text>
            </View>
        )
    }


}