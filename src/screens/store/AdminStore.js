import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor'
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import api from '../../services/api'
import { ScrollView } from 'react-native-gesture-handler';

export default class AdminStore extends Component {

    state = {
        lojainfo: [],
    }


    componentDidMount() {
        this.getStoreInfo()
    }

    getStoreInfo = async () => {
        const response = await api.get(`/store/${global.idLoja}`, {
            headers: {
                'Authorization': `Bearer ${global.Token}`,
            }
        })
        this.setState({ lojainfo: response.data })
        console.log(this.state.lojainfo)
    }






    render() {
        return (
            <View style={styles.container}>
                <GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />

                <View style={styles.header}>
                    <Text style={styles.nomeLoja}>{this.state.lojainfo.nomeLoja}</Text>
                    <View style={{marginLeft:10}}>
                        <Text>End: {this.state.lojainfo.endereco}, Nº {this.state.lojainfo.numero}</Text>
                        <Text>CEP: {this.state.lojainfo.cep}</Text>
                        <Text>CNPJ: {this.state.lojainfo.cnpj}</Text>
                    </View>
                    <View style={styles.lineStyle}></View>
                </View>
                <ScrollView>
                    <View style={styles.menu}>
                        <View style={styles.primLinha}>
                            <View style={styles.addProduto}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductUpload')}>
                                    <Icon5 name="plus" size={128} color="#91A8A4" style={styles.allignIcon} />
                                    <Text style={styles.nomesBotoes}>Cadastrar produto</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.addProduto}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('MyProducts')}>
                                    <Icon5 name="cash-register" size={128} color="#91A8A4" style={styles.allignIcon} />
                                    <Text style={styles.nomesBotoes}>Produtos cadastrados</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.segLinha}>
                            <View style={styles.addProduto}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('MySales')}>
                                    <Icon5 name="coins" size={128} color="#91A8A4" style={styles.allignIcon} />
                                    <Text style={styles.nomesBotoes}>Minhas vendas</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.addProduto}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('EditStoreInfo')}>
                                    <Icon5 name="store-alt" size={100} color="#91A8A4" style={styles.allignIcon} />
                                    <Text style={styles.nomesBotoesEdit}>Editar Informações da loja</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={styles.segLinha}>
                            <View style={styles.addProduto}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('SalesGraph')}>
                                    <Icon5 name="chart-line" size={128} color="#91A8A4" style={styles.allignIcon} />
                                    <Text style={styles.nomesBotoes}>Gráfico de minhas vendas</Text>
                                </TouchableOpacity>
                            </View>

                        </View>


                    </View>
                </ScrollView>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.voltarbotao}>
                    <Icon5 name="arrow-left" size={80} color="#91A8A4" style={styles.allignIcon} />
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#B3C2F2',
    },

    header: {
        marginTop: 30,
        marginBottom: 10,
    },

    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
    },

    menu: {
        margin: 10,
        marginTop: 20,
    },

    nomeLoja: {
        marginBottom: 10,
        fontSize: 32,
        alignSelf: 'center'
    },
    primLinha: {
        flexDirection: 'row',
        justifyContent: 'space-around'

    },

    addProduto: {
        alignItems: 'center',
        backgroundColor: '#F0F7EE',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#8C93A8',
        width: 142,
    },

    nomesBotoes: {
        fontSize: 14,
        color: '#2D2327',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    allignIcon: {
        alignSelf: 'center'
    },

    segLinha: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    voltarbotao: {
        alignItems: 'center',
        marginTop: 10,
        marginLeft: Math.round(Dimensions.get('window').width) / 2.7,
        justifyContent: 'center',
        backgroundColor: '#F0F7EE',
        borderRadius: 360,
        width: 80,
        height: 80,
    },
    nomesBotoesEdit: {
        marginTop: 28,
        fontSize: 14,
        color: '#2D2327',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})