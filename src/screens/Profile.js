import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import GeneralStatusBarColor from '../components/GeneralStatusBarColor'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon5 from 'react-native-vector-icons/FontAwesome5';


export default class Profile extends Component{

    screenClient = () => {
        return(
            <View style={styles.Container}>
    
                <GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />
    
                <View style={styles.Nome}>
                    <Icon5 name='user-circle' size={30} color='black' />
                    <Text style={styles.tamFonteNome}>{global.nomeUsuario}</Text>
                </View>
    
            <View style = {styles.Buttons}>
                
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('EditProfile') }>
                    <View style={styles.ButtonName}>
                        <Icon5 name= 'id-card-alt' size={30} color = "black" />
                        <Text style={styles.ItemName}>Editar Perfil                                            </Text>
                        <Icon5 style= {styles.Arrow} name= 'long-arrow-alt-right' size={24} color = "black" />
                    </View>
                    </TouchableOpacity>    
            
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Chats')}>
                        <View style={styles.ButtonName}>
                            <Icon name= 'comments' size={30} color = "black" />
                            <Text style={styles.ItemName}>Chats                                                       </Text>
                            <Icon5 style= {styles.Arrow} name= 'long-arrow-alt-right' size={24} color = "black" />
                        </View>
                    </TouchableOpacity>    
    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Notifications')}>
                        <View style={styles.ButtonName}>
                            <Icon name= 'bell' size={30} color = "black" />
                            <Text style={styles.ItemName} >Notificações                                           </Text>
                            <Icon5 style= {styles.Arrow} name= 'long-arrow-alt-right' size={24} color = "black" />
                        </View>
                    </TouchableOpacity>    
                
    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Wallet')}>
                        <View style={styles.ButtonName}>
                            <Icon5 name= 'wallet' size={30} color = "black" />
                            <Text style={styles.ItemName}>Minha Carteira                                       </Text>
                            <Icon5 style= {styles.Arrow} name= 'long-arrow-alt-right' size={24} color = "black" />
                        </View>
                    </TouchableOpacity>    
                
    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Cupons')}>
                        <View style={styles.ButtonName}>
                            <Icon name= 'ticket' size={30} color = "black" />
                            <Text style={styles.ItemName}>Cupons                                                    </Text>
                            <Icon5 style= {styles.Arrow} name= 'long-arrow-alt-right' size={24} color = "black" />
                        </View>
                    </TouchableOpacity>    
                
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Favorites')}>
                        <View style={styles.ButtonName}>
                            <Icon name= 'bookmark' size={30} color = "black" />
                            <Text style={styles.ItemName}>  Favoritos                                                 </Text>
                            <Icon5 style= {styles.Arrow} name= 'long-arrow-alt-right' size={24} color = "black" />
                        </View>
                    </TouchableOpacity> 
                
                
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Payments')}>
                        <View style={styles.ButtonName}>
                            <Icon name= 'credit-card' size={30} color = "black" />
                            <Text style={styles.ItemName}>Formas de Pagamento                        </Text>
                            <Icon5 style= {styles.Arrow} name= 'long-arrow-alt-right' size={24} color = "black" />
                        </View>
                    </TouchableOpacity>    
                
    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Addresses')}>
                        <View style={styles.ButtonName}>
                            <Icon name= 'address-book' size={30} color = "black" />
                            <Text style={styles.ItemName} > Endereços                                              </Text>
                            <Icon5 style= {styles.Arrow} name= 'long-arrow-alt-right' size={24} color = "black" />
                        </View>
                    </TouchableOpacity>    
    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Partners')}>
                        <View style={styles.ButtonName}>
                            <Icon5 name= 'handshake' size={30} color = "black" />
                            <Text style={styles.ItemName}>Seja Parceiro Petfood                         </Text>
                            <Icon5 style= {styles.Arrow} name= 'long-arrow-alt-right' size={24} color = "black" />
                        </View>
                    </TouchableOpacity>    
                </View>
            </View>
        )
    
    
    }
    
    screenLoja = () => {
        return(
            <View style={styles.Container}>
    
                <GeneralStatusBarColor backgrondColor="#B3C2F2" barStyle="light-content" />
    
                <View style={styles.Nome}>
                    <Icon5 name='user-circle' size={30} color='black' />
                    <Text style={styles.tamFonteNome}>{global.nomeUsuario}</Text>
                </View>
    
            <View style = {styles.Buttons}>
                
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('EditProfile') }>
                    <View style={styles.ButtonName}>
                        <Icon5 name= 'id-card-alt' size={30} color = "black" />
                        <Text style={styles.ItemName}>Editar Perfil                                            </Text>
                        <Icon5 style= {styles.Arrow} name= 'long-arrow-alt-right' size={24} color = "black" />
                    </View>
                    </TouchableOpacity>    
            
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Chats')}>
                        <View style={styles.ButtonName}>
                            <Icon name= 'comments' size={30} color = "black" />
                            <Text style={styles.ItemName}>Chats                                                       </Text>
                            <Icon5 style= {styles.Arrow} name= 'long-arrow-alt-right' size={24} color = "black" />
                        </View>
                    </TouchableOpacity>    
    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Notifications')}>
                        <View style={styles.ButtonName}>
                            <Icon name= 'bell' size={30} color = "black" />
                            <Text style={styles.ItemName} >Notificações                                           </Text>
                            <Icon5 style= {styles.Arrow} name= 'long-arrow-alt-right' size={24} color = "black" />
                        </View>
                    </TouchableOpacity>    
                
    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Wallet')}>
                        <View style={styles.ButtonName}>
                            <Icon5 name= 'wallet' size={30} color = "black" />
                            <Text style={styles.ItemName}>Minha Carteira                                       </Text>
                            <Icon5 style= {styles.Arrow} name= 'long-arrow-alt-right' size={24} color = "black" />
                        </View>
                    </TouchableOpacity>    
                
    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Cupons')}>
                        <View style={styles.ButtonName}>
                            <Icon name= 'ticket' size={30} color = "black" />
                            <Text style={styles.ItemName}>Cupons                                                    </Text>
                            <Icon5 style= {styles.Arrow} name= 'long-arrow-alt-right' size={24} color = "black" />
                        </View>
                    </TouchableOpacity>    
                
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Favorites')}>
                        <View style={styles.ButtonName}>
                            <Icon name= 'bookmark' size={30} color = "black" />
                            <Text style={styles.ItemName}>  Favoritos                                                 </Text>
                            <Icon5 style= {styles.Arrow} name= 'long-arrow-alt-right' size={24} color = "black" />
                        </View>
                    </TouchableOpacity> 
                
                
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Payments')}>
                        <View style={styles.ButtonName}>
                            <Icon name= 'credit-card' size={30} color = "black" />
                            <Text style={styles.ItemName}>Formas de Pagamento                        </Text>
                            <Icon5 style= {styles.Arrow} name= 'long-arrow-alt-right' size={24} color = "black" />
                        </View>
                    </TouchableOpacity>    
                
    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Addresses')}>
                        <View style={styles.ButtonName}>
                            <Icon name= 'address-book' size={30} color = "black" />
                            <Text style={styles.ItemName} > Endereços                                              </Text>
                            <Icon5 style= {styles.Arrow} name= 'long-arrow-alt-right' size={24} color = "black" />
                        </View>
                    </TouchableOpacity>    
    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AdminStore')}>
                        <View style={styles.ButtonName}>
                            <Icon5 name= 'store' size={28} color = "black" />
                            <Text style={styles.ItemName}>Administrar minha loja                       </Text>
                            <Icon5 style= {styles.Arrow} name= 'long-arrow-alt-right' size={24} color = "black" />
                        </View>
                    </TouchableOpacity>    
                </View>
            </View>
        )
    }


    render(){
        return global.isPartner ? this.screenLoja() : this.screenClient()
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#B3C2F2',
    },
    Nome: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        justifyContent: 'center'

    },
    tamFonteNome: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 5,
    },
    Buttons: {
        marginLeft: 10,
        flexDirection: 'column',

    },
    ButtonName: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#C7D3FA',
        marginBottom: 2,
              
    },
    ItemName: {
        fontSize: 20,
        marginLeft: 10,
        alignSelf: 'center',
        color: '#877C7C'
    },
    Arrow: {
        alignSelf: 'center',
    }

})