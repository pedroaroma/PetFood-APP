import React, { Component } from 'react'
import { View, Text } from 'react-native'
import GeneralStatusBarColor from '../components/GeneralStatusBarColor'

export default class Profile extends Component{
    render(){
        return(
            <View>
                <GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />
                <Text>Tela de Perfil</Text>
            </View>
        )
    }
}