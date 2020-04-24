import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import GeneralStatusBarColor from '../components/GeneralStatusBarColor'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from'../screens/Home'
import Search from '../screens/Search'
import Orders from '../screens/Orders'
import Profile from '../screens/Profile'
import { NavigationContainer } from '@react-navigation/native'



const Tab = createBottomTabNavigator()

function MyTabs() {
    return(
        <Tab.Navigator
        initialRouteName = "Inicio"
        tabBarOptions={{
            inactiveTintColor: '#91A8A4',
            activeTintColor: '#F0F7EE',
            inactiveBackgroundColor: '#B3C2F2',
            activeBackgroundColor: '#C4D7F2'
        }}
        >
            <Tab.Screen
            name = "Inicio"
            component = {Home}
            options = {{
                tabBarLabel: 'Início'
            }}
            />

            <Tab.Screen
            name = "Busca"
            component = {Search}
            options = {{ 
                tabBarLabel: 'Busca'
            }}
            />

            <Tab.Screen
            name = "Pedido"
            component = {Orders}
            options = {{
                tabBarLabel: 'Pedido'
            }}
            />

            <Tab.Screen
            name = "Perfil"
            component = {Profile}
            options = {{
                tabBarLabel: 'Perfil'
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