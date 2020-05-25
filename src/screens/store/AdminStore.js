import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon5 from 'react-native-vector-icons/FontAwesome5';

export default class AdminStore extends Component {
    render() {
        return (
            <View style={styles.container}>
                <GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />

                <View style={styles.header}>
                    <Text style={styles.nomeLoja}>Nome da Loja</Text>
                    <View style={styles.lineStyle}></View>
                </View>

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
                                <Text style={styles.nomesBotoes}>Minhas vendas efetuadas</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.voltarbotao}>
                        <Icon5 name="arrow-left" size={80} color="#91A8A4" style={styles.allignIcon} />
                    </TouchableOpacity>

                </View>
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

    menu:{
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
        justifyContent: 'center'
    },
    voltarbotao:{
        alignItems: 'center',
        marginTop: 60,
        marginLeft: Math.round(Dimensions.get('window').width) / 2.8,
        justifyContent: 'center',
        backgroundColor: '#F0F7EE',
        borderRadius: 360,
        width: 100,
        height: 100,
    }
})