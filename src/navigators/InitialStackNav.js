import React, { Component } from 'react'
import SplashScreen from 'react-native-splash-screen'


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login'
import Register from '../screens/Register'
import HomeTabNav from './HomeTabNav'


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