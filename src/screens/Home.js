import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import GeneralStatusBarColor from '../components/GeneralStatusBarColor'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.modal}>
                    <GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />
                    <Text>Tela inicial do app</Text>
                    <Text>Tela apenas para Debug</Text>
                    <Text>{global.isPartner ? 'Tipo de Login: Loja' : 'cliente'}</Text>
                    <Text>{'Token do usuário: ' + (global.Token == '' ? 'Modo offline = sem token' : global.Token)}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#B3C2F2',
    },

    modal: {
        margin: 10,
    },
})