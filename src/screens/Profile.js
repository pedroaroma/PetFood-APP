import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import GeneralStatusBarColor from '../components/GeneralStatusBarColor'

export default class Profile extends Component{
    render(){
        return(
        <View>
            <GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('EditProfile')}>
                    <Text>Editar Perfil</Text>
                </TouchableOpacity>    
            </View>

            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Chats')}>
                    <Text>Chats</Text>
                </TouchableOpacity>    
            </View>

            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Notifications')}>
                    <Text>Notificações</Text>
                </TouchableOpacity>    
            </View>

            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Wallet')}>
                    <Text>Minha Carteira</Text>
                </TouchableOpacity>    
            </View>

            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Cupons')}>
                    <Text>Cupons</Text>
                </TouchableOpacity>    
            </View>
            
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Favorites')}>
                    <Text>Favoritos</Text>
                </TouchableOpacity>    
            </View>
            
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Payments')}>
                    <Text>Formas de Pagamento</Text>
                </TouchableOpacity>    
            </View>

            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Addresses')}>
                    <Text>Endereços</Text>
                </TouchableOpacity>    
            </View>

            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Partners')}>
                    <Text>Seja Parceiro Petfood</Text>
                </TouchableOpacity>    
            </View>

        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        marginHorizontal: -20,
    }
})