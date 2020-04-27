import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import GeneralStatusBarColor from '../components/GeneralStatusBarColor'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import Home from'../screens/Home'
import Search from '../screens/Search'
import Orders from '../screens/Orders'
import Profile from '../screens/Profile'




const Tab = createBottomTabNavigator()

function MyTabs() {
    return(
        <Tab.Navigator
        initialRouteName = "Inicio"
        tabBarOptions={{
            inactiveTintColor: 'black',
            activeTintColor: '#F0F7EE',
            inactiveBackgroundColor: '#B3C2F2',
            activeBackgroundColor: '#C4D7F2',
            style: {
                borderTopColor: 'black',
                borderTopWidth: 2,
            }
        }}
        >
            <Tab.Screen
            name = "Inicio"
            component = {Home}
            options = {{
                tabBarLabel: 'Início',
                tabBarIcon: () => <Icon name= 'home' size={30} color = "black" />
            }}
            />

            <Tab.Screen
            name = "Busca"
            component = {Search}
            options = {{ 
                tabBarLabel: 'Busca',
                tabBarIcon: () => <Icon name= 'search' size={30} color = "black" />
            }}
            />

            <Tab.Screen
            name = "Pedido"
            component = {Orders}
            options = {{
                tabBarLabel: 'Pedidos',
                tabBarIcon: () => <Icon name= 'shopping-cart' size={30} color = "black" />
            }}
            />

            <Tab.Screen
            name = "Perfil"
            component = {Profile}
            options = {{
                tabBarLabel: 'Perfil',
                tabBarIcon: () => <Icon name= 'user' size={30} color = "black" />
            }}
            />

        </Tab.Navigator>
    )
}

export default class HomeNav extends Component{
    render(){
        return(
                <MyTabs />
        )
    }
}