
import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native'
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor'
import api from '../../services/api'
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import {
	LineChart,
	BarChart,
	PieChart,
	ProgressChart,
	ContributionGraph,
	StackedBarChart
} from 'react-native-chart-kit'





// const barData = {
// 	labels: ['January', 'February', 'March', 'April', 'May', 'June'],
// 	datasets: [
// 		{
// 			data: [0, 45, 28, 0, 99, 43],
// 		},
// 	],
// };

export default class SalesGraph extends Component {


	state = {
		valorJan: 0,
		valorFeb: 0,
		valorMar: 0,
		valorAbr: 0,
		valorMai: 0,
		valorJun: 0,
		valorJul: 0,
		valorAgo: 0,
		valorSet: 0,
		valorOut: 0,
		valorNov: 0,
		valorDez: 0,
	}

	componentDidMount() {
		this.changeVal()
	}

	changeVal = async () => {
		var cont = 0;
		await api.get('/order/ordersSeller', {
			headers: {
				'Authorization': `Bearer ${global.Token}`,
			}
		}).then(response => {
			{
				response.data.map(element => {
					if (element.finalizado == true) {
						cont = Number(cont) + Number(element.preco)
					}
				})
				console.log(("aqui"))
				console.log(cont)
				this.setState({ valorJun: cont })
			}
		})

	}

	render() {

		return (
			<View style={styles.container}>
				<GeneralStatusBarColor backgrondColor="#F0F7EE" barStyle="light-content" />
				<Text style={{alignSelf: 'center', fontSize: 20}}>
					Gráfico de Vendas relacionado aos meses
            </Text>
				<LineChart
					data={{
						labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
						datasets: [
							{
								data: [this.state.valorJan, this.state.valorFeb, this.state.valorMar, this.state.valorAbr, this.state.valorMai, this.state.valorJun, this.state.valorJul, this.state.valorAgo, this.state.valorSet, this.state.valorOut, this.state.valorNov, this.state.valorDez],
							},
						],
					}
					}
					width={Dimensions.get('window').width} // from react-native
					height={220}
					yAxisLabel={'$'}
					chartConfig={{
						backgroundColor: '#91A8A4',
						backgroundGradientFrom: '#C4D7F2',
						backgroundGradientTo: '#91A8A4',
						decimalPlaces: 2, // optional, defaults to 2dp
						color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
						style: {
							borderRadius: 16
						}
					}}
					bezier
					style={{
						marginVertical: 8,
						borderRadius: 16
					}}
				/>
				<View style={styles.meses}>

					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.mes}>Você vendeu no Mês de Janeiro: </Text>
						<Text style={styles.valorPobe}>{this.state.valorJan} Reais</Text>
					</View>

					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.mes}>Você vendeu no Mês de Fevereiro: </Text>
						<Text style={styles.valorPobe}>{this.state.valorFeb} Reais</Text>
					</View>

					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.mes}>Você vendeu no Mês de Março: </Text>
						<Text style={styles.valorPobe}>{this.state.valorMar} Reais</Text>
					</View>

					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.mes}>Você vendeu no Mês de Abril: </Text>
						<Text style={styles.valorPobe}>{this.state.valorAbr} Reais</Text>
					</View>

					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.mes}>Você vendeu no Mês de Maio: </Text>
						<Text style={styles.valorPobe}>{this.state.valorMai} Reais</Text>
					</View>

					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.mes}>Você vendeu no Mês de Junho: </Text>
						<Text style={styles.valor}>{this.state.valorJun} Reais</Text>
					</View>

					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.mes}>Você vendeu no Mês de Agosto: </Text>
						<Text style={styles.valorPobe}>{this.state.valorAgo} Reais</Text>
					</View>

					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.mes}>Você vendeu no Mês de Setembro: </Text>
						<Text style={styles.valorPobe}>{this.state.valorSet} Reais</Text>
					</View>

					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.mes}>Você vendeu no Mês de Outubro: </Text>
						<Text style={styles.valorPobe}>{this.state.valorOut} Reais</Text>
					</View>

					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.mes}>Você vendeu no Mês de Novembro: </Text>
						<Text style={styles.valorPobe}>{this.state.valorNov} Reais</Text>
					</View>

					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.mes}>Você vendeu no Mês de Dezembro: </Text>
						<Text style={styles.valorPobe}>{this.state.valorDez} Reais</Text>
					</View>

				</View>

				<TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.voltarbotao}>
                            <Icon5 name="arrow-left" size={36} color="#91A8A4" style={styles.allignIcon} style={{alignSelf: 'center'}}/>
                        </TouchableOpacity>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F0F7EE'
	},
	meses: {
		padding: 10,
	},
	mes: {
		fontSize: 18
	},
	valor: {
		fontSize: 18,
		color: 'green'
	},
	valorPobe: {
		fontSize: 18,
		color: 'red'
	}
})