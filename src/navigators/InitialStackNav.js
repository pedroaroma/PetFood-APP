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
import ProductUpload from '../screens/store/ProductUpload'
import MyProducts from '../screens/store/MyProducts'
import MySales from '../screens/store/MySales';
import ProductEdit from '../screens/store/ProductEdit'
import EditStoreInfo from '../screens/store/EditStoreInfo'
import StoreHomePage from '../screens/store/StoreHomePage'


//Compra a e venda imports

import BuyProduct from '../screens/store/BuyProduct'
import Mysale from '../screens/store/MySale'
import MySale from '../screens/store/MySale'
import MySaleDone from '../screens/store/MySaleDone'

import IncomingOrders from '../screens/IncomingOrders'
import OrdersDone from '../screens/OrdersDone'


import SearchSellsClient from '../screens/profile/SearchSellsClient'
import SearchProducts from '../screens/store/SearchProducts'
import SearchProductFiltred from '../screens/SearchProductFiltred'

import SalesGraph from '../screens/store/SalesGraph'

const Stack = createStackNavigator()

function MyStack() {
	return (
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

			<Stack.Screen
				name="ProductUpload"
				component={ProductUpload}
			/>

			<Stack.Screen
				name="MyProducts"
				component={MyProducts}
			/>

			<Stack.Screen
				name="MySales"
				component={MySales}
			/>

			<Stack.Screen
				name="ProductEdit"
				component={ProductEdit}
			/>

			<Stack.Screen
				name="EditStoreInfo"
				component={EditStoreInfo}
			/>

			<Stack.Screen
				name="StoreHomePage"
				component={StoreHomePage}
			/>

			<Stack.Screen
				name="BuyProduct"
				component={BuyProduct}
			/>

			<Stack.Screen
				name="MySale"
				component={MySale}
			/>
			<Stack.Screen
				name="MySaleDone"
				component={MySaleDone}
			/>

			<Stack.Screen
				name="IncomingOrders"
				component={IncomingOrders}
			/>

			<Stack.Screen
				name="OrdersDone"
				component={OrdersDone}
			/>

			<Stack.Screen
				name="SearchSellsClient"
				component={SearchSellsClient}
			/>

			<Stack.Screen
				name="SearchProducts"
				component={SearchProducts}
			/>

			<Stack.Screen
				name="SalesGraph"
				component={SalesGraph}
			/>



			<Stack.Screen
				name="SearchProductFiltred"
				component={SearchProductFiltred}
			/>

		</Stack.Navigator>
	)
}

export default class InitialStackNav extends Component {

	componentDidMount() {
		SplashScreen.hide();
	}

	render() {
		return (
			<NavigationContainer>
				<MyStack />
			</NavigationContainer>
		)
	}
}