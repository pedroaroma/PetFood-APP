import React, { Component } from 'react'
import SplashScreen from 'react-native-splash-screen'


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login'
import Register from '../screens/Register'
import HomeNav from './HomeNav'


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
				component={HomeNav}
			/>

		</Stack.Navigator>
	)
}

export default class LoginScreen extends Component {
	
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