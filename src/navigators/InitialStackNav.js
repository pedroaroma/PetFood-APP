import React, { Component } from 'react'
import SplashScreen from 'react-native-splash-screen'


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login'
import Register from '../screens/Register'
import HomeTabNav from './HomeTabNav'

//Perfil screens imports
import EditProfile from '../screens/profile/EditProfile'
import Chats from '../screens/profile/Chats'
import Notifications from '../screens/profile/Notifications'
import Wallet from '../screens/profile/Wallet'
import Cupons from '../screens/profile/Cupons'
import Favorites from '../screens/profile/Favorites'
import Payments from '../screens/profile/Payments'
import Addresses from '../screens/profile/Addresses'
import Partners from '../screens/profile/Partners'

//Loja screens imports
import AdminStore from '../screens/store/AdminStore'

const Stack = createStackNavigator()

function MyStack() {
	return(
		<Stack.Navigator
		screenOptions={{
			headerShown: false
		  }}
		>

			<Stack.Screen
				name="Login"
				component={Login}
			/>

			<Stack.Screen
				name="Register"
				component={Register}
			/>
			
			<Stack.Screen
				name="Home"
				component={HomeTabNav}
			/>

			<Stack.Screen
				name="EditProfile"
				component={EditProfile}
			/>

			<Stack.Screen
				name="Chats"
				component={Chats}
			/>

			<Stack.Screen
				name="Notifications"
				component={Notifications}
			/>

			<Stack.Screen
				name="Wallet"
				component={Wallet}
			/>

			<Stack.Screen
				name="Cupons"
				component={Cupons}
			/>

			<Stack.Screen
				name="Favorites"
				component={Favorites}
			/>

			<Stack.Screen
				name="Payments"
				component={Payments}
			/>
			
			<Stack.Screen
				name="Addresses"
				component={Addresses}
			/>

			<Stack.Screen
				name="Partners"
				component={Partners}
			/>

			<Stack.Screen
				name="AdminStore"
				component={AdminStore}
			/>

		</Stack.Navigator>
	)
}

export default class InitialStackNav extends Component {
	
	componentDidMount() { 
        SplashScreen.hide();
    }
	
	render(){
		return(
			<NavigationContainer>
				<MyStack />
			</NavigationContainer>
		)
	}
}