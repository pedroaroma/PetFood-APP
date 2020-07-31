import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor'
import api from '../../services/api'

export default class MySale extends Component {

    state = {
        produto: [],
    }

    componentDidMount() {
        this.getProductInfo()
    }

    getProductInfo = async () => {
        await api.get(`/store/product/${global.venda.produtoId}`, {
            headers: {
                'Authorization': `Bearer ${global.Token}`,
            }
        }).then(response => {
            this.setState({ produto: response.data })
        }).catch(function (error) {
            alert("algo deu errado")
            console.log("algo deu errado")
        })

    }

    chekmateOrder = () => {

        console.log("id da venda: " + global.venda.vendaId)
        console.log("token: " + global.Token)
        api.patch(`/order/${global.venda.vendaId}`, {

            headers: {
                'Authorization': `Bearer ${global.Token}`,
            }
        })
            .then(response => {
                alert("produto finalizado com sucesso")
                this.props.navigation.navigate('AdminStore')
            })
            .catch(function (error) {
                alert("algo deu errado")
                console.log(error)
            })

    }

    render() {
        return (
            <View style={styles.container}>
                <GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />
                <Text style={styles.textCima}>Pedido ID: {global.venda.vendaId}</Text>
                <View style={styles.lineStyle}></View>
                <View style={styles.productInfo}>
                    <View style={styles.productmargin}>
                        <Text style={styles.text}>Venda do produto: {this.state.produto.nomeProduto}</Text>
                        <Text style={styles.text}>preço: {this.state.produto.preco} Reais</Text>
                        <Text style={styles.text}>Codigo de barras: {this.state.produto.codBarras}</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.text}>STATUS: </Text>
                            <Text style={styles.status}>{global.venda.finalizado == false ? 'Pendente' : 'Finalizada'}</Text>
                        </View>
                    </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
                    <TouchableOpacity onPressIn={this.chekmateOrder} style={styles.button}>
                        <Text>
                            FINALIZAR COMPRA
                    </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPressIn={() => this.props.navigation.goBack()} style={styles.button}>
                        <Text style={{fontSize: 20}}>
                            Voltar
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B3C2F2'
    },
    productInfo: {
        backgroundColor: '#F0F7EE',
        borderRadius: 15,
        marginTop: 20,
        marginVertical: 5,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    productmargin: {
        marginLeft: 10,
        padding: 10,
    },
    textCima: {
        alignSelf: 'center',
        fontSize: 20,
        marginTop: 20,
    },
    text: {
        fontSize: 18
    },
    status: {
        fontSize: 18,
        color: 'orange'
    },
    button: {
        backgroundColor: '#F0F7EE',
        borderRadius: 10,
        width: 160,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        marginBottom: 6,
        marginHorizontal: -10,
    },
})